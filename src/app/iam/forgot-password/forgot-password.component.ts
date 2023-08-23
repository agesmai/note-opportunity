import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  buttonDisabled = false;
  remainingTime = 10;

  constructor(
    public authService: AuthService
  ) {
  }

  onClick() {
    this.startTimer();
    this.buttonDisabled = true;
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 10000);
  }

  startTimer() {
    const intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        clearInterval(intervalId);
        this.remainingTime = 10;
      }
    }, 1000);
  }

  sendResetPassword(passwordResetEmail: string) {
    this.authService.ForgotPassword(passwordResetEmail).then(r => {
      this.onClick();
    });
  }

  ngOnInit(): void {
  }

}
