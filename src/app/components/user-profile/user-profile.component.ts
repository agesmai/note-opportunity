import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/services/user";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;

  constructor(public authService: AuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
  }
}
