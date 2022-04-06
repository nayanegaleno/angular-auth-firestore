import { FirestoreService } from './firestore.service';

import { environment } from '../../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { TestBed } from '@angular/core/testing';

describe('FirestoreService', () => {
  let firestoreService: FirestoreService;
  let idUse: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase) ],
      providers: [ FirestoreService ]
    });

    firestoreService = TestBed.inject(FirestoreService);
  });

  it('should be created', () => {
    expect(firestoreService).toBeTruthy();
  });
  
  it('list the members of team', async () => {
    const result = firestoreService.listMembers('team');
    expect(!!result).toEqual(true);
  });

});
