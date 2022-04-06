import { Component, OnInit, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/firestore.service';
import { Member } from './member-model';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  
  team =  this.firestoreService.listMembers();

  constructor(public  firestoreService: FirestoreService) { 
  }
  
  ngOnInit(): void {
    
  }

}
