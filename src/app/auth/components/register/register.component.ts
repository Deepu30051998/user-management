import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  /**
   * Handles new user registration form submission.
   * TODO: Add custom validator to check confirmPassword matches password.
   * TODO: Navigate to login (or auto-login) on success.
   * TODO: Show error message on failure.
   */
  register(): void {
    if (this.registerForm.invalid) return;

    this.isLoading = true;
    const { name, email, password } = this.registerForm.value;

    // TODO: define RegisterRequest model and call authService.register()
    this.authService.register({ name, email, password }).subscribe({
      next: (response) => {
        this.isLoading = false;
        // TODO: navigate to /auth/login or dashboard
      },
      error: (err) => {
        this.isLoading = false;
        // TODO: display error message to user
      },
    });
  }
}
