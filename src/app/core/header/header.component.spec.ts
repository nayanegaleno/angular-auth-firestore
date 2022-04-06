import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

import { HeaderComponent } from './header.component';

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp } from '@angular/fire/app';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports:[
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth())
      ],
      providers: [
        HeaderComponent, {provide:Router, useValue: router}
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = TestBed.inject(HeaderComponent);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
