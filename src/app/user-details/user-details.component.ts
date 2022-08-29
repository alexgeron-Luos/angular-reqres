import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { User } from '../entity/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private location: Location) {}

  selectedUser: User = JSON.parse(localStorage.getItem('selectedUser') || '{}');

  ngOnInit(): void {}

  back(): void {
    this.location.back();
  }
}
