import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request.model';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // TODO: Replace with the real API base URL (from environment config)
  private readonly apiUrl = '/api/auth';

  constructor(private http: HttpClient) {}

  /**
   * Sends login credentials to the API and returns a token response.
   * TODO: Store the token in localStorage / sessionStorage after login.
   */
  login(request: LoginRequest): Observable<LoginResponse> {
    // TODO: implement real API call
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, request);
  }

  /**
   * Sends registration data to the API.
   * TODO: define a RegisterRequest model once the API contract is known.
   */
  register(request: any): Observable<any> {
    // TODO: implement real API call
    return this.http.post(`${this.apiUrl}/register`, request);
  }

  /**
   * Clears local session/token data and navigates to login.
   * TODO: clear stored token and redirect user.
   */
  logout(): void {
    // TODO: remove token from storage
    // TODO: navigate to /auth/login
  }

  /**
   * Returns true if a valid auth token exists in storage.
   * TODO: implement token presence / expiry check.
   */
  isAuthenticated(): boolean {
    // TODO: check token from localStorage
    return false;
  }
}
