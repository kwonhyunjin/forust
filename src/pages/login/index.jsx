import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import firebase from '@/firebase/index';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const pageTitle = 'Login | Forust';

function Login() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const {
    register, setError, clearErrors, errors, handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });

  const emailValidate = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleFormSubmit = async (data) => {
    setDisabled(true);
    clearErrors();
    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      router.push('/');
    } catch (err) {
      setError('password', {
        type: err.code,
        message: err.message,
      });
    }
    setDisabled(false);
  };

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
        <form className="auth-form" onSubmit={handleSubmit(handleFormSubmit)}>
          <h2 className="auth-form-heading">Login to Forust</h2>
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Email" error={errors.email && errors.email.message}>
                <TextField
                  type="text"
                  inputMode="email"
                  name="email"
                  ref={
                    register({
                      required: 'Enter your email address',
                      pattern: {
                        value: emailValidate,
                        message: 'Invalid email address',
                      },
                    })
                  }
                />
              </FormField>
            </div>
          </div>
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Password" error={errors.password && errors.password.message}>
                <TextField
                  type="password"
                  name="password"
                  ref={
                    register({
                      required: 'Enter your password',
                    })
                  }
                />
              </FormField>
            </div>
          </div>
          <div className="grid-row auth-form-submit-row">
            <div className="grid-col">
              <Button className="auth-submit" type="submit" disabled={disabled}>Login</Button>
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
        </form>
      </AuthLayout>
    </>
  );
}

export default Login;
