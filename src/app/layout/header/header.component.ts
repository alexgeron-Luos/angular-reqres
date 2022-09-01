import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiHttpService } from '../../services/ApiHttpService';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private router: Router, private apiHttpService: ApiHttpService) {}

  ngOnInit(): void {}

  logOut = (): void => {
    this.apiHttpService.logOut();
  };
}
