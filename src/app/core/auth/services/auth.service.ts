import { Injectable } from '@angular/core';

import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  user,
  updateProfile
} from '@angular/fire/auth';
import { updateCurrentUser } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
/**
 * AuthService
 * 
 * This service provides the functions that can be used to create and
 * authenticate the user through email and password or google account
 */
export class AuthService {

  constructor(public afAuth: Auth) { }

  /**
   * Creates a new account with email and password
   * @param email string - new user email
   * @param password string - new user password
   * @returns Boolean - if the account was created 
   */
  async createEmailAccount(email:string, password:string): Promise<any> {
    return await createUserWithEmailAndPassword(this.afAuth, email, password);
  }

  /**
   * Authenticates the user with email and password
   * @param email string - user email
   * @param password string - user password
   * @returns Boolean - if the user was authenticated
   */
   async loginEmail(email: string, password:string) {
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  /**
   * Authenticates the user with its Google account
   * @returns Boolean - if the user was authenticated
   */
   async loginGoogle() {
    return await signInWithPopup(this.afAuth, new GoogleAuthProvider());
  }

  /**
   * Logs the user out
   */
   async logOut() {
    return await signOut(this.afAuth);
  }

  /**
   * Send the link to user verify email
   * @returns 
   */
  async sendEmailVerification() {
    const actionCodeSettings = {
      url: 'https://desafio-capyba-nay.web.app/',
      handleCodeInApp: true
    };
    
    const currentUser = this.afAuth.currentUser;
    
    return sendEmailVerification(currentUser!, actionCodeSettings);
  }

  /**
   * Updates an account name
   * @param name string - new user name
   * @returns Boolean - if the account was updated 
   */
   async updateName(name: string): Promise<any> {
    return updateProfile(this.afAuth.currentUser!, {displayName: name});
  }

  /**
   * Verifies if the user already verified email
   */
  isEmailVerified() {
    return this.afAuth.currentUser?.emailVerified;
  }

  /**
   * Gets the current user's email
   */
  getCurrentEmail() {
    return this.afAuth.currentUser?.email;
  }

  /**
   * Gets the current user's email
   */
   getUserName() {
    return this.afAuth.currentUser?.displayName;
  }

}
