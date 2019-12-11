import axios from 'axios';
import { urlApi, urlSignIn } from './url';

export async function callApi(method, path, data, url = urlApi.api) {
  const response = await axios(`${url}/${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: !(method === "GET") ? JSON.stringify(data) : null
  })
  return await response
}
export async function callApiSignIn(method, path, data, url = urlSignIn.api) {
  const response = await axios(`${url}${path}`, {
    method : method,
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Access-Control-Allow-Origin': 'https://accounts.google.com' 
    },
    data: !(method === "GET") ? JSON.stringify(data) : null
  })
  return await response
}