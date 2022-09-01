import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiHttpService } from '../services/ApiHttpService';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../entity/user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private apiHttpService: ApiHttpService
  ) {}

  usersList: Array<User> = JSON.parse(
    sessionStorage.getItem('usersList') || '[]'
  );
  currentPage: number = 1;
  faTrash = faTrash;
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;

  ngOnInit(): void {
    this.loadPage(this.currentPage);
  }

  loadPage = (id: number): void => {
    this.apiHttpService
      .get(environment.apiBaseUrl + '/users?page=' + id)
      .subscribe((data: any) => {
        data.data.map((user: User) => {
          const found = this.usersList.find((e: User) => e.id == user.id);
          found ? null : (this.usersList = [...this.usersList, user]);
        });
        sessionStorage.setItem('usersList', JSON.stringify(this.usersList));
      });
  };

  loadMore = (): void => {
    if (this.currentPage === 1) {
      this.currentPage = 2;
      this.loadPage(this.currentPage);
    }
  };

  removeUser = (user: User): void => {
    this.apiHttpService
      .delete(environment.apiBaseUrl + '/users/' + user.id)
      .subscribe((data: any) => {
        const found = this.usersList.find((e: User) => e.id == user.id);
        found ? this.usersList.splice(this.usersList.indexOf(found), 1) : null;
        sessionStorage.setItem('usersList', JSON.stringify(this.usersList));
      });
  };

  selectUser = (user: User): void => {
    sessionStorage.setItem('selectedUser', JSON.stringify(user));
    this.router.navigate(['/details']);
  };

  addUser = (): void => {
    this.router.navigate(['/add']);
  };
}
