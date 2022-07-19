import Cookie from "js-cookie";

class Account {
  static setToken = (token) => {
      localStorage.setItem('token', token)
  }

  static getToken = () => {
    return localStorage.getItem('token') || Cookie.get('token') || '';
  }

  static delete = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    Cookie.remove('token');
  }

  static set = (account) => {
    localStorage.setItem('account', JSON.stringify(account));
  }

  static get = () => {
    const account = localStorage.getItem('account');
    try {
      return JSON.parse(account) || {};
    } catch (e) {
      return {};
    }
  }

}

export default Account;
