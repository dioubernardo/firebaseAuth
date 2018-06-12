import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebase } from '@firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = null;

  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = JSON.stringify(user);
    });
  }

  loginpop() {
    this.fireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      alert('promise.then ' + JSON.stringify(res));
    }).catch((err) => {
      alert('promise.catch' + JSON.stringify(err));
    });
  }

  loginred() {
    this.fireAuth.auth.signInWithRedirect(
      new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      alert('promise.then ' + JSON.stringify(res));
    }).catch((err) => {
      alert('promise.catch' + JSON.stringify(err));
    });
  }

  logout() {
    this.fireAuth.auth.signOut().then((res) => {
      alert('promise.then ' + JSON.stringify(res));
    }).catch((err) => {
      alert('promise.catch' + JSON.stringify(err));
    });
  }

}
