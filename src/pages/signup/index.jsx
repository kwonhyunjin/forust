import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { NextSeo } from 'next-seo';
import React from 'react';

export default function Signup() {
  return (
    <>
      <NextSeo
        title="Create Account | Forust"
        openGraph={{
          title: 'Create Account | Forust',
        }}
      />
      <h1 className="blind">Forust</h1>
      <AuthLayout>
        <form className="auth-form">
          <h2 className="auth-form-heading">Create your Forust Account</h2>
          <div className="grid-row">
            <div className="grid-col">
              <FormField label="Name">
                <TextField type="text" id="name" />
              </FormField>
            </div>
            <div className="grid-col">
              <FormField label="Username">
                <TextField type="text" id="username" />
              </FormField>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <FormField label="Email">
                <TextField type="text" id="email" />
              </FormField>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-col">
              <FormField label="Password">
                <TextField type="password" id="password" />
              </FormField>
            </div>
          </div>
          <div className="grid-row auth-form-submit-row">
            <div className="grid-col">
              <Button className="auth-submit" type="submit">Create Account</Button>
            </div>
          </div>
          <div className="grid-row auth-form-desc-row">
            <div className="grid-col">
              Already have an account?
              {' '}
              <a href="/login">Login.</a>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
