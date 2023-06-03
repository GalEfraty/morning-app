import { makeAutoObservable, toJS } from 'mobx';
import demoData from '../services/demoData';

class AccountStore {
  account = null;

  constructor() {
    makeAutoObservable(this);
    this.getAccount();
  }

  setAccount(account) {
    this.account = account;
  }

  logout() {
    this.account = null;
    window.location.href = '/login';
  }

  getAccount() {
    if (this.account) {
      return this.account;
    } else {
      this.account = toJS(demoData);
      return this.account;
      // fetch('https://crossorigin.me/https://sandbox.d.greeninvoice.co.il/api/v1/account/me', {
      //   method: 'GET',
      //   headers: { 'Content-Type': 'application/json' },
      // })
      //   .then((response) => response.json())
      //   .then((jsonResponse) => {
      //     console.log('get account', jsonResponse);
      //     this.account = toJS(jsonResponse);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }

  login(email, password) {
    if (email && password) {
      this.account = toJS(demoData);
      // fetch('https://crossorigin.me/https://sandbox.d.greeninvoice.co.il/api/v1/account/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // })
      //   .then((response) => response.json())
      //   .then((jsonResponse) => {
      //     console.log(jsonResponse);
      //     this.account = toJS(jsonResponse);
      //   })
      //   .catch((error) => console.log(error));
    }
  }
}

/**
 * proxy servers:
 * https://crossorigin.me
 * https://cors-anywhere.herokuapp.com
 */

const accountStore = new AccountStore();

export default accountStore;
