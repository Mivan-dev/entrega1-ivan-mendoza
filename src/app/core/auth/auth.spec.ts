import { TestBed } from '@angular/core/testing';
import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should login with valid credentials', () => {
    const result = service.logIn('admin', 'admin123');
    expect(result).toBe(true);
  });

  it('should not login with invalid credentials', () => {
    const result = service.logIn('admin', 'asdASDFSADFSDAF');
    expect(result).toBe(false);
  });

  it('should return current user after login', () => {
    service.logIn('admin', 'admin123');
    const currentUser = service.getCurrentUser();
    expect(currentUser?.username).toBe('admin');
    expect(currentUser?.role).toBe('admin');
  });

  it('should detect admin role correctly', () => {
    service.logIn('admin', 'admin123');
    expect(service.isAdmin()).toBe(true);
  });

  it('should detect non-admin role correctly', () => {
    service.logIn('user', 'user123');
    expect(service.isAdmin()).toBe(false);
  });
});
