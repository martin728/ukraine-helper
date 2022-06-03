import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  isAuthenticated() {
    if (this.fireAuth.authState) {
      console.log('authenticated');
    } else {
      console.log(' not authenticated');
    }
  }

  //login
  login(email: string, password: string) {
    this.isAuthenticated();
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this.router.navigate(['requests/admin']);
        } else {
          this.router.navigate(['verify-email']);
        }
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }
  //register
  register(email: string, password: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration succesful');
        this.router.navigate(['/login']);
        this.sendEmailForVarification(res.user);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }
  //sign out
  logout() {
    this.fireAuth.signOut().then(
      () => {
        this.isAuthenticated();

        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  forgotPassword(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/verify-email']);
      },
      () => {
        alert('smth went wrong');
      }
    );
  }
  //email for varification
  sendEmailForVarification(user: any) {
    user.sendEmailVarification().then(
      () => {
        this.router.navigate(['/verify-email']);
      },
      () => {
        alert('smth went wrong');
      }
    );
  }
  googleSignIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        this.router.navigate(['requests/admin']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
