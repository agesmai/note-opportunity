import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Firebase services + environment module
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

import {AppComponent} from './app.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// App layout
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {HomeLayoutComponent} from './layout/home-layout/home-layout.component';
import {MainComponent} from './layout/main/main.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import {ASidebarComponent} from './layout/a-sidebar/a-sidebar.component';

// Shared service
import {AuthService} from "./shared/services/auth.service";
import {AppRoutingModule} from "./app-routing.module";
import {SecurityModule} from "./iam/security.module";

// Components
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {P404Component} from "./components/error/p404/p404.component";
import {P500Component} from "./components/error/p500/p500.component";
import {
  AvatarModule, BadgeModule,
  BreadcrumbModule, CollapseModule,
  DropdownModule,
  GridModule,
  HeaderModule,
  NavModule, SidebarModule,
  TabsModule
} from "@coreui/angular";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

// Font Awesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ActivityComponent} from './components/activity/activity.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {NgOptimizedImage} from "@angular/common";
import {ActivityTimelineComponent} from './components/activity-timeline/activity-timeline.component';
import {OrganizationMapComponent} from './components/organization-map/organization-map.component';
import {FormsModule} from "@angular/forms";
import {OrganizationChartModule} from "primeng/organizationchart";
import {DividerModule} from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    P404Component,
    P500Component,
    FooterComponent,
    HeaderComponent,
    HomeLayoutComponent,
    MainComponent,
    SidebarComponent,
    ASidebarComponent,
    ActivityComponent,
    UserProfileComponent,
    ActivityTimelineComponent,
    OrganizationMapComponent,
  ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        BrowserAnimationsModule,
        AppRoutingModule,
        SecurityModule,
        GridModule,
        HeaderModule,
        DropdownModule,
        NavModule,
        BreadcrumbModule,
        AvatarModule,
        BadgeModule,
        SidebarModule,
        CollapseModule,
        TabsModule,
        BsDropdownModule,
        FontAwesomeModule,
        NgOptimizedImage,
        FormsModule,
        OrganizationChartModule,
        DividerModule
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
