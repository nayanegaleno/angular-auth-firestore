import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { Router } from '@angular/router'

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  compileAndCreate();

  function compileAndCreate() {
    beforeEach(waitForAsync(() => {
      const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
      TestBed
          .configureTestingModule({
            providers: [
              {provide: Router, useValue: routerSpy}
            ]
          })
          .compileComponents()
          .then(() => {
            fixture = TestBed.createComponent(AuthComponent);
            component = fixture.componentInstance;
          });
    }));
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
