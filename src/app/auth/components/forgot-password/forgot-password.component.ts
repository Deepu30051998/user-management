import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;
  isLoading = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /**
   * Sends a password reset link to the provided email.
   * TODO: Call the real reset-password API endpoint.
   * TODO: Show confirmation message after submission.
   */
  sendResetLink(): void {
    if (this.forgotPasswordForm.invalid) return;

    this.isLoading = true;
    const { email } = this.forgotPasswordForm.value;

    // TODO: implement authService.forgotPassword(email) call
    // this.authService.forgotPassword(email).subscribe({ ... });

    this.isLoading = false;
    this.isSubmitted = true;
  }
}
