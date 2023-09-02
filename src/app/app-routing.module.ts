import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//user governance components
// import { SignInComponent } from './iam/sign-in/sign-in.component';
// import { SignUpComponent } from './iam/sign-up/sign-up.component';
// import { ForgotPasswordComponent } from './iam/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './iam/verify-email/verify-email.component';

//layout components
import {HomeLayoutComponent} from "./layout/home-layout/home-layout.component";

//error pages
import {P404Component} from "./components/error/p404/p404.component";
import {P500Component} from "./components/error/p500/p500.component";

// route guard
import { AuthGuard } from './shared/guard/auth.guard';

//app components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {OrganizationMapComponent} from "./components/organization-map/organization-map.component";

const routes: Routes = [

  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app', component: HomeLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'p404', component: P404Component, data: {title: 'Page 404'}},
      {path: 'p500', component: P500Component, data: {title: 'Page 500'}},
      {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      // {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
      // {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
      {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
      {path: 'org-map', component: OrganizationMapComponent, canActivate: [AuthGuard]},
    ]
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
