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
  static create(data={}){
    return api.post('/project/create',{...data})
  }
  static getProjectsList(s){
    return api.get('/project/list',{
      params: { s }
    })
  }
  static projectUpdate(data={}){
    return api.put(`/project/update`,{data})
  }
  static projectDelete(data={}){
    return api.delete(`/project/delete/${data}`,)
  }
  static createTaskes(data={}){
    return api.post('/taskes/create',{...data})
  }
  static  getTaskesList(ProjectId){
    return api.get(`/taskes/list`,{
      params:{ProjectId}
    })
  }
  static taskesUpdate(data={}){
    return api.put(`/taskes/update`,{data})
  }

}

export default Api

