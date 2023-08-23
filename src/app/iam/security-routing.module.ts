import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {SecurityComponent} from "./security.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {SecurePagesGuard} from "../shared/guard/secure-pages.guard";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: 'security', component: SecurityComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'prefix'},
      {path: 'login', component: SignInComponent, canActivate: [SecurePagesGuard]},
      {path: 'register', component: SignUpComponent, canActivate: [SecurePagesGuard]},
      {path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecurePagesGuard]},
      {path: 'verify-email', component: VerifyEmailComponent, canActivate: [SecurePagesGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {
}
