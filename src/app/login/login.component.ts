import { Component, OnInit } from '@angular/core';
import { Credential } from '../entity/credential';
import { Router } from '@angular/router';
import { ApiHttpService } from '../services/ApiHttpService';
import { environment } from 'src/environments/environment';
import validator from 'validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private apiHttpService: ApiHttpService) {}

  showError: boolean = false;
  errorMessage: string = '';

  ngOnInit(): void {}
  onClickSubmit = (data: Credential): void => {
    // TODO : add validator for password
    if (validator.isEmail(data.email)) {
      const credential: Credential = {
        email: data.email,
        password: data.password,
      };
      this.apiHttpService
        .post(environment.apiBaseUrl + '/login', credential)
        .subscribe(
          (data: any) => {
            sessionStorage.setItem('authToken', data.token);
            this.router.navigate(['/']);
          },
          (error: Error) => {
            this.showError = true;
            this.errorMessage = 'Invalid user please use a reqres user !';
          }
        );
    } else {
      this.showError = true;
      this.errorMessage = 'Credential error please retry !';
    }
  };
}
