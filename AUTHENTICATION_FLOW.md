# Updated Authentication Flow Documentation

## API Changes Made:

- **sendOTP**: Now uses `email` parameter instead of `phone`
- **resendOTP**: Now uses `email` parameter instead of `phone`
- **forgotPassword**: Uses `email` and sends reset link via email
- **resetPassword**: Uses `oldPassword`, `newPassword`, `confirmPassword`
- **Removed verifyOTP**: OTP verification happens during registration

## New Screen Structure:

### Registration Flow:

1. **EmailVerificationScreen** (`/EmailVerification`)

   - User enters email address
   - Sends OTP to email
   - Navigates to CompleteRegistration

2. **CompleteRegistrationScreen** (`/CompleteRegistration`)
   - Shows OTP input (6 digits)
   - Form fields: Name, Phone, Email (read-only), Password
   - Resend OTP functionality with timer
   - OTP validation happens during registration API call

### Login Flow:

1. **LoginScreen** (`/Login`)
   - Phone + Password login (unchanged)
   - Added "Forgot Password?" link

### Forgot Password Flow:

1. **ForgotPasswordScreen** (`/ForgotPassword`)
   - User enters email
   - Sends reset link to email
   - Returns to login screen
   - User follows email link to reset password externally

## Auth State Updates:

```typescript
interface AuthState {
  token: string | null;
  user: UserState | null;
  tempEmail: string | null; // Stores email during registration
  otpSent: boolean; // OTP sent status
  registrationStep: 'email' | 'details' | 'complete';
  resetPasswordStep: 'email' | 'password' | 'complete';
}
```

## Navigation Structure:

- **Login** → Main app or ForgotPassword
- **EmailVerification** → CompleteRegistration
- **CompleteRegistration** → Auto-login to main app
- **ForgotPassword** → Back to Login

## Key Components Created:

- **OTPInput**: 6-digit OTP input with auto-focus
- **ResendTimer**: Countdown timer for OTP resend
- **Enhanced PrimaryButton**: Now supports disabled state

## User Journey:

```
Registration: Email Entry → OTP + Complete Form → Account Created
Login: Phone + Password → Main App
Forgot Password: Email Entry → Email Sent → External Reset
```

The implementation matches the corrected API structure where OTP is email-based and password reset uses the traditional email link approach.
