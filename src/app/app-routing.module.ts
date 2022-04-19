import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestManagerComponent} from "./components/request-manager/request-manager.component";
import {AddRequestComponent} from "./components/add-request/add-request.component";
import {EditRequestComponent} from "./components/edit-request/edit-request.component";
import {ViewRequestComponent} from "./components/view-request/view-request.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {VarifyEmailComponent} from "./components/varify-email/varify-email.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {RequestComponent} from "./components/request/request.component";

const routes: Routes = [
  {path:'', redirectTo:'requests/admin', pathMatch:'full'},
  // {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'requests/admin', component:RequestManagerComponent},
  {path:'requests/add', component:AddRequestComponent},
  {path:'requests/edit/:requestId', component:EditRequestComponent},
  {path:'login', component:LoginComponent},
  {path:'varify-email', component:VarifyEmailComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'register', component:RegisterComponent},
  {path:'request', component:RequestComponent},
  {path:'requests/view/:requestId', component:ViewRequestComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
