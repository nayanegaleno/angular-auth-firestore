import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member-model';
import { MemberService } from './member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  
  team = this.memberService.listMembers() as Observable<Member[]>;
  
  constructor(private memberService: MemberService) { 
  }
  
  ngOnInit(): void {
    
    const teste = this.memberService.listMembers();
    console.log(this.team);
  }

}
