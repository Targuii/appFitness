import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';
import {User} from '../models/User';
import {AuthData} from '../models/AuthData';

@Injectable()
export class AuthService {

  constructor(private router: Router) {}

  authChange = new Subject<boolean>();

  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authSuccessFull();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authSuccessFull();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    // methode spread (faire une copie de l'objet)
    return { ...this.user};
  }

  isAuth() {
    return this.user == null;
  }

  private authSuccessFull() {
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }
}
