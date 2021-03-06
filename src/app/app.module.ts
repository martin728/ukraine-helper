import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestManagerComponent } from './components/request-manager/request-manager.component';
import { AddRequestComponent } from './components/add-request/add-request.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule} from "@angular/forms";
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './components/varify-email/varify-email.component';
import {EditRequestComponent} from "./components/edit-request/edit-request.component";
import {ViewRequestComponent} from "./components/view-request/view-request.component";
import { RequestComponent } from './components/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RequestManagerComponent,
    AddRequestComponent,
    EditRequestComponent,
    ViewRequestComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
