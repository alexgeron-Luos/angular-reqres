import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn = () => {
    const token = sessionStorage.getItem('authToken'); // get token from session storage

    return token !== null ? true : false;
  };
}
