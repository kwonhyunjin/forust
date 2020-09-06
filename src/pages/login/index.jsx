import Button from '@/components/button/button';
import Checkbox from '@/components/checkbox/checkbox';
import FormField from '@/components/form-field/form-field';
import Label from '@/components/label/label';
import TextField from '@/components/text-field/text-field';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

const pageTitle = 'Login | Forust';

export default function Login() {
  return (
    <>
      <NextSeo
        title={pageTitle}
        openGraph={{
          title: pageTitle,
        }}
      />
      <h1 className="blind">Forust</h1>
      <AuthLayout>
        <div className="auth-form">
          <h2 className="auth-form-heading">Login to Forust</h2>
          <div className="grid-row">
            <div className="grid-col">
              <FormField label="Username or Email">
                <TextField type="text" id="username" />
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
          <div className="grid-row">
            <div className="grid-col">
              <label className="keep-auth">
                <Label input={<Checkbox />}>
                  Keep me logged in.
                </Label>
              </label>
            </div>
          </div>
          <div className="grid-row auth-form-submit-row">
            <div className="grid-col">
              <Button className="auth-submit" type="submit">Login</Button>
            </div>
          </div>
          <div className="grid-row auth-form-desc-row">
            <div className="grid-col">
              Not a member?
              {' '}
              <Link href="/signup">
                <a>Create account now!</a>
              </Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
