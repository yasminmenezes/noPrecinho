import axios from 'axios';

export async function getAddressByCEP(cep) {
  const instance = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    responseType: 'json',
  });
  try {
    const result = await instance.get(`/${cep}/json/`);
    return result.data;
  } catch (error) {
    console.log('ERROR: ', error);
    return [];
  }
}

// const resultado = await axios({
//   method: 'get',
//   url: `https://viacep.com/br/ws/${cep}/json`,
// });

// export async function getAddressByCEP(cep) {
//   try {
//     const resultado = await api.get('/produtos');
//     return resultado.data;
//   } catch (erro) {
//     console.log(erro);
//     return [];
//   }
// }

//  https://viacep.com.br/ws/58051022/json/ - Sample using CEP
