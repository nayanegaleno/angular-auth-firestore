import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { environment } from '../../../../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';


describe('AuthService', () => {
  let service: AuthService;

  const emailTest: string = "test@test.example";
  const passwordTest: string = "password";
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth())
      ],
      providers: [
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('logs user in', async () => {
    const result = await service.loginEmail(emailTest, passwordTest);
      
    expect(!!result).toBe(true);
  });

});
