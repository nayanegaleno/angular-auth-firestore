import { MemberService } from './member.service';

import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { TestBed } from '@angular/core/testing';

describe('MemberService', () => {
  let memberService: MemberService;
  let idUse: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AngularFireModule.initializeApp(environment.firebase) ],
      providers: [ MemberService]
    });

    memberService = TestBed.inject(MemberService);
  });

  it('should be created', () => {
    expect(memberService).toBeTruthy();
  });
  
  it('creates a member', async () => {
    idUse = await memberService.addMember({name: 'Loren', picture: 'ipson'});
    const result = await memberService.findMember(idUse);
    expect(result).toBe(true);
  });

  afterEach(() =>{
    memberService.deleteMember(idUse);
  });

});
