import api from '../api';

export async function createUser(user) {
  try {
    const result = await api.post('/users', user);
    return result.data;
  } catch (erro) {
    console.log(erro);
    return {};
  }
}

export async function editUser(user) {
  try {
    await api.put(`/users/${user.id}`, {
      username: user.username,
      password: user.password,
      cep: user.cep,
      uf: user.uf,
      localidade: user.localidade,
      bairro: user.bairro,
      numero: user.numero,
      id: user.id,
      favoritos: user.favoritos,
      carrinho: user.carrinho,
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}

export async function removeUser(user) {
  try {
    await api.delete(`/users/${user.id}`);
    return 'success';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export async function getUserByUsername(username) {
  try {
    const result = await api.get('/users');
    let users;
    if (result) {
      users = result.data;
      for (let i = 0; i < users.length; i = i + 1) {
        if (username === users[i].username) {
          return users[i];
        }
      }
    }
    return {};
  } catch (error) {
    console.log('getUserByUsername: ', error);
    return { error: 'error' };
  }
}

export async function clearCart(user) {
  try {
    await api.put(`/users/${user.id}`, {
      username: user.username,
      password: user.password,
      cep: user.cep,
      uf: user.uf,
      localidade: user.localidade,
      bairro: user.bairro,
      numero: user.numero,
      id: user.id,
      favoritos: user.favoritos,
      carrinho: [],
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}

export async function addProductToUserGrocery(user, newProduct) {
  // newProduct = {
  //   id: productId,
  //   quantity: quantity,
  // };

  let hasId = false;
  const cart = user.carrinho;
  for (let i = 0; i < cart.length; i = i + 1) {
    if (cart[i].id === newProduct.id) {
      hasId = true;
      cart[i] = newProduct;
    }
  }
  if (!hasId) {
    cart.push(newProduct);
  }

  try {
    await api.put(`/users/${user.id}`, {
      username: user.username,
      password: user.password,
      cep: user.cep,
      uf: user.uf,
      localidade: user.localidade,
      bairro: user.bairro,
      numero: user.numero,
      id: user.id,
      favoritos: user.favoritos,
      carrinho: cart,
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}

export async function removeProductFromUserGrocery(user, productId) {
  const cart = user.carrinho;

  for (let i = 0; i < cart.length; i = i + 1) {
    if (cart[i].id === productId) {
      let currentQuantity = cart[i].quantity;
      if (currentQuantity === 1) {
        cart.splice(i, 1);
      } else {
        cart[i].quantity = currentQuantity - 1;
      }
      break;
    }
  }

  try {
    await api.put(`/users/${user.id}`, {
      username: user.username,
      password: user.password,
      cep: user.cep,
      uf: user.uf,
      localidade: user.localidade,
      bairro: user.bairro,
      numero: user.numero,
      id: user.id,
      favoritos: user.favoritos,
      carrinho: cart,
    });
    return 'success';
  } catch (error) {
    console.log(error);
    return 'erro';
  }
}

export async function getUserGroceryList(username) {
  const user = await getUserByUsername(username);
  const list = [];

  if (user.carrinho !== undefined && user.carrinho.length > 0) {
    console.log('GET USER GROCERY LIST:', user.carrinho);
    return user.carrinho;
  }

  return list;
}

export async function getCheapestProductByCode(productCode) {
  const result = await api.get('/supermarkets');
  const supermarkets = result.data;
  const list = [];

  for (let i = 0; i < supermarkets.length; i = i + 1) {
    const supermarket = supermarkets[i];
    for (const product of supermarket.products) {
      if (product.code === productCode) {
        product.supermarketName = supermarket.name;
        product.supermarketLogo = supermarket.image;
        list.push(product);
        break;
      }
    }
  }

  console.log('GetCheapest List ', list);
  // const listOrdered =
  list.sort((a, b) => a.price >= b.price);

  // console.log('GetCheapest Ordered: ', listOrdered);
  // return listOrdered[0];
  return list[0];
}

export async function getProductList(productName, type) {
  const result = await api.get('/supermarkets');
  const supermarkets = result.data;
  const list = [];

  if (productName === '') {
    for (let i = 0; i < supermarkets.length; i = i + 1) {
      const supermarket = supermarkets[i];
      for (const product of supermarket.products) {
        product.supermarketName = supermarket.name;
        product.supermarketLogo = supermarket.image;
        list.push(product);
      }
      if (type === 'CheapestGrocery') {
        break; // With this we only add the products of the first market in db.json
      }
    }
    return list;
  }

  for (let i = 0; i < supermarkets.length; i = i + 1) {
    const supermarket = supermarkets[i];
    for (const product of supermarket.products) {
      const prodName = product.name;

      if (compareProductNames(prodName, productName)) {
        product.supermarketName = supermarket.name;
        product.supermarketLogo = supermarket.image;
        list.push(product);
      }
    }
    if (type === 'CheapestGrocery') {
      break; // With this we only add the products of the first market in db.json
    }
  }
  return list;
}

function compareProductNames(prodA, prodB) {
  if (
    prodA
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase() ===
    prodB
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
  ) {
    return true;
  }
  return false;
}

export async function getProductListBySupermarket(supermarketName) {
  const result = await api.get('/supermarkets');
  const supermarkets = result.data;
  const list = [];

  for (let i = 0; i < supermarkets.length; i = i + 1) {
    const supermarket = supermarkets[i];
    if (supermarket.name === supermarketName) {
      for (const product of supermarket.products) {
        product.supermarketName = supermarket.name;
        product.supermarketLogo = supermarket.image;
        list.push(product);
      }
      return list;
    }
  }

  return list;
}

export async function findFuelList(productName) {
  const result = await api.get('/gasstations');
  const gasStations = result.data;
  const list = [];

  for (let i = 0; i < gasStations.length; i = i + 1) {
    const gasStation = gasStations[i];
    for (const fuel of gasStation.products) {
      const fuelName = fuel.name;

      if (compareProductNames(fuelName, productName)) {
        fuel.title = gasStation.name;
        fuel.bairro = gasStation.bairro;
        fuel.address = gasStation.address;
        fuel.image = gasStation.image;
        list.push(fuel);
      }
    }
  }
  return list;
}
