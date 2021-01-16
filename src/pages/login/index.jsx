import Alert from '@/components/alert/alert';
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

const emailValidate = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Login() {
  const router = useRouter();
  const [alert, setAlert] = useState();
  const [disabled, setDisabled] = useState(false);
  const {
    register, clearErrors, errors, handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    setAlert(undefined);
    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      router.push('/');
    } catch (err) {
      setAlert(err.message);
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
          {alert && (<Alert type="error">{alert}</Alert>)}
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Email" error={errors.email?.message}>
                <TextField
                  type="text"
                  inputMode="email"
                  name="email"
                  ref={
                    register({
                      required: 'Enter your email address.',
                      pattern: {
                        value: emailValidate,
                        message: 'Invalid email address.',
                      },
                    })
                  }
                  onChange={() => {
                    clearErrors('email');
                  }}
                />
              </FormField>
            </div>
          </div>
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Password" error={errors.password?.message}>
                <TextField
                  type="password"
                  name="password"
                  ref={
                    register({
                      required: 'Enter your password.',
                    })
                  }
                  onChange={() => {
                    clearErrors('password');
                  }}
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
