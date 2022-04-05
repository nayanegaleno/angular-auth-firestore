import { Injectable } from '@angular/core';
import { Member } from './member-model';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { doc, getDoc } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  collect = this.store.collection('team');

  constructor(private store: AngularFirestore) { }

   listMembers(): Observable<any[]> {
    return this.collect.valueChanges();
  }

  async findMember(id: string): Promise<Boolean>{
    const docRef = this.collect.doc(id);
    if (!docRef.get()) {
      console.log("Member not found!");
      return false;
    }

    return true;
  }

  async addMember(member : Member): Promise<string> {
    const doc = await this.collect.add(member)
    
    return doc.id;
  }

  updateMember(member: Member): void {
    if(!member.id) {
      console.log("Missing id to update member!");
      return;
    }

    const id = member.id 
    delete member.id;
    
    this.collect.doc(id).update(member);
  }

  deleteMember(id: string): void {
    this.collect.doc(id).delete();
  }

}
