import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../models/login-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Handles login form submission.
   * TODO: Navigate to dashboard on success.
   * TODO: Show error toast/message on failure.
   */
  login(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    const request: LoginRequest = this.loginForm.value;

    // TODO: subscribe to authService.login() and handle success/error
    this.authService.login(request).subscribe({
      next: (response) => {
        this.isLoading = false;
        // TODO: store token and navigate to dashboard
      },
      error: (err) => {
        this.isLoading = false;
        // TODO: display error message to user
      },
    });
  }
}
