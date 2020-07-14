import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import React from 'react';

export default function Signup() {
  return (
    <AuthLayout>
      <h1 className="visually-hidden">FORUST</h1>
      <div className="auth-container">
        <div className="form">
          <div className="form-title">
            <h2>Create your Forust Account</h2>
          </div>
          <form className="form-contents">
            <div className="form-contents__row form-contents__row--half">
              <FormField label="Name"><TextField className="form-input" type="text" id="name" /></FormField>
            </div>
            <div className="form-contents__row form-contents__row--half">
              <FormField label="Username"><TextField className="form-input" type="text" id="username" /></FormField>
            </div>
            <div className="form-contents__row">
              <FormField label="Email"><TextField className="form-input" type="text" id="email" /></FormField>
            </div>
            <div className="form-contents__row">
              <FormField label="Password"><TextField className="form-input" type="password" id="password" /></FormField>
            </div>
            <div className="form-contents__row form-contents__btn">
              <Button className="form-btn" type="submit">Create Account</Button>
            </div>
            <div className="form-contents__row form-contents__sub">
              Already have an account?
              {' '}
              <a href="/login">Login.</a>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
