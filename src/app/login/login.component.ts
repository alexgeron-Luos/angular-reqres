import { Component, OnInit } from '@angular/core';
import { Credential } from '../entity/credential';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import validator from 'validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  showError: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {}
  onClickSubmit(data: Credential) {
    // TODO : add validator for password
    if (validator.isEmail(data.email)) {
      this.http
        .post<any>('https://reqres.in/api/login', {
          email: data.email,
          password: data.password,
        })
        .subscribe(
          (data) => {
            localStorage.setItem('authToken', data.token);
            this.router.navigate(['/']);
          },
          (error) => {
            this.showError = true;
            this.errorMessage = 'Invalid user please use a reqres user !';
          }
        );
    } else {
      this.showError = true;
      this.errorMessage = 'Credential error please retry !';
    }
  }
}
