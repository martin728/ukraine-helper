import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth"
import {GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "@angular/fire/auth"
import {Router} from "@angular/router";
import {sendPasswordResetEmail} from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth, private router: Router) {}
  //login
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{
      localStorage.setItem('token','true');

      if(res.user?.emailVerified == true){
        this.router.navigate(['requests/admin']);
      }else{
        this.router.navigate(['vrify-email']);
      }
    },err =>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }
  //register
  register(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert('Registration succesful');
      this.router.navigate(['/login']);
      this.sendEmailForVarification(res.user)
    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }
  //sign out
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err => {
      alert(err.message)
    })
  }

  forgotPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/varify-email']);
    },err => {
      alert('smth went wrong')
    })
  }
  //email for varification
  sendEmailForVarification(user:any){
    user.sendEmailVarification().then((res:any) => {
      this.router.navigate(['/varify-email']);
    },(err:any)=>{
      alert("smth went wrong")
    })
  }
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res =>{
      this.router.navigate(['requests/admin']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    },err => {
      alert(err.message)
    })
  }

}
