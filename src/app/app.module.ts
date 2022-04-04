import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  OktaAuthGuard,
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';




const config = {
  issuer: 'https://dev-4211287.okta.com/oauth2/default',
  clientId: '0oa4i98bidEJPUSCk5d7',
  redirectUri: window.location.origin + '/login/callback'
}
const oktaAuth = new OktaAuth(config);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {Routes} from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth }
    },
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
