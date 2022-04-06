import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, getFirestore, getDocs } from "firebase/firestore";  
import { environment } from 'src/environments/environment';
import { Member } from '../member/member-model';


@Injectable({
  providedIn: 'root'
})
/**
 * FirestoreService
 * 
 * This service provides the functions that can be used to do data
 * updates and observable streams of the Cloud Firestore database
 */
export class FirestoreService {

  constructor(/*public afStrore: AngularFirestore*/) { }

  /**
   * Returns a collection of members any time it changes.
   * @returns Observale<Member[]>
   */
  // listMembers(collection: string, subcollection: string) {
  //   try{
  //     return this.afStrore.collectionGroup(collection, subcollection);
  //   } catch (error) {
  //     return false;
  //   }
  // }

  async listMembers(): Promise<Member[]>{
    const members: Member[] = []
    const app = initializeApp(environment.firebase);
    const db = getFirestore(app);
    const team = collection(db, 'team');
    const snapshot = await getDocs(team);
    snapshot.forEach(async (doc) => {
      members.push({
        id: doc.get('id'),
        name: doc.get('name'),
        picture: doc.get('picture'),
        role: doc.get('restricts').role,
        address: doc.get('restricts').address,
        fone: doc.get('restricts').fone
      })
    })
    return members;
  }
  
}
