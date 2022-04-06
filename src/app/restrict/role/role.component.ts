import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  roles =  this.firestoreService.listMembers();

  constructor(public  firestoreService: FirestoreService, public authService: AuthService) { }

  ngOnInit(): void {

  }

}
