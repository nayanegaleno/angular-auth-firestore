import { ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { Observable } from 'rxjs';


import { MemberComponent } from './member.component';

import { FirestoreService } from '../services/firestore.service';

describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;
 
  beforeEach(async () => {
    const mockMemberService = jasmine.createSpyObj('MemberService',['listMembers']);

    await TestBed.configureTestingModule({
      declarations: [ MemberComponent ],
      providers: [{provide: FirestoreService, useValue: mockMemberService}]
    }).compileComponents();
  });
  
  it('should create', () => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  
});
