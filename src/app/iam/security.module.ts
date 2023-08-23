import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";
import {SecurityComponent} from "./security.component";
import {SecurityRoutingModule} from "./security-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {ButtonModule, CardModule, FormModule, GridModule} from "@coreui/angular";

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SecurityComponent,

  ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        SecurityRoutingModule,
        GridModule,
        CardModule,
        FormModule,
        ButtonModule,
        NgOptimizedImage,
    ]
})
export class SecurityModule { }
