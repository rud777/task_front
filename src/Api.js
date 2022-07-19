import axios from "axios";
import Account from "./services/Account";


const api = axios.create({
  baseURL: 'http://localhost:4000',
});

api.interceptors.request.use((config) => {
  const token = Account.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, e => Promise.reject(e));

api.interceptors.response.use((r) => r, (e) => {
  if (e.response.status === 401) {
    Account.delete();
    window.location.href = '/login';
  }
  return Promise.reject(e)
})

class Api {
  static register(data = {}) {
    return api.post('/users/register', { ...data })
  }

  static login(data = {}) {
    return api.post('/users/login', { ...data })
  }

  static myAccount() {
    return api.get('/users/account/me',)
  }

  static getUsersList(s) {
    return api.get('/users/list', {
      params: { s }
    })
  }
  static getAccount(userId) {
    return api.get(`/users/account/${userId}`);
  }
  static userUpdate(data={}){
    console.log(data)
    return api.put(`/users/update`,{data})
  }
  static userDelete(id){
    return api.delete(`/users/delete/${id}`)
  }
}

export default Api

