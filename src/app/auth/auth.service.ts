// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  // Simulate user login, typically an API call
  login(username: string, password: string): void {
    // make an API call to authenticate the user obtain a token
    // Store the token in a secure way (e.g., in local storage or cookies)
    if(username === 'demo' && password === 'password'){
      this.token = 'your_jwt_token_here'; // Store the token securely, e.g., in local storage or cookies.
    }
  }

  // Log the user out and clear the token
  logout(): void {
    // Clear the token and perform any necessary cleanup
    this.token = null;
  }

  // Retrieve the user's token
  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean{
    // Check if the user is authenticated (e.g., token is valid)
    return !!this.token;
  }
}
