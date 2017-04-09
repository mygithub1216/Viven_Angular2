import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2'; 
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap';
import { OnsenModule, CUSTOM_ELEMENTS_SCHEMA } from 'angular2-onsenui';

import 'hammerjs';
// import '../assets/js/impress.js';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { SupportComponent } from './support/support.component';
import { FaqItemComponent } from './faq-item/faq-item.component';

import { firebaseConfig } from './../environments/firebase.config';
import { CasesComponent } from './cases/cases.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UserService } from './user.service';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LandingComponent,
    HomeComponent,
    FooterComponent,
    ProgramsComponent,
    SupportComponent,
    FaqItemComponent,
    CasesComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    // ScrollViewModule,
    RouterModule.forRoot([{
      path: 'login',
      component: LoginComponent,
    },{
      path: 'support',
      component: SupportComponent,
    },
    {
      path: 'cases',
      component: CasesComponent,
    },
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: '',
      component: LandingComponent,
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'content',
      component: ContentComponent,
    },
    {
      path: 'signup',
      component: SignupComponent,
    }]),
    ModalModule.forRoot(),
    OnsenModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [BadgeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
