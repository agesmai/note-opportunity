import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {User} from "../../shared/services/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;

  constructor(public authService: AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }

}
