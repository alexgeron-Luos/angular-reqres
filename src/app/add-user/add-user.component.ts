import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../entity/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  usersList: Array<User> = JSON.parse(
    localStorage.getItem('usersList') || '[]'
  );

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }
  onClickSubmit(user: User) {
    const nextId = this.usersList.length + 1;
    user = { ...user, id: nextId };
    this.usersList = [...this.usersList, user];
    localStorage.setItem('usersList', JSON.stringify(this.usersList));
    this.router.navigate(['/']);
  }
}
