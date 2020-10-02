import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import firebase from '@/firebase/index';
import AuthLayout from '@/layouts/auth-layout/auth-layout';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

const pageTitle = 'Login | Forust';

const Login = () => {
  const router = useRouter();
  const {
    register, setError, errors, handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const handleFormSubmit = async (data) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      router.push('/');
    } catch (err) {
      setError('password', {
        type: err.code,
        message: err.message,
      });
    }
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
                  name="email"
                  ref={
                    register({
                      required: 'this is required',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
                      required: 'this is required',
                      minLength: {
                        value: 6,
                        message: 'Min length is 6',
                      },
                    })
                  }
                />
              </FormField>
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
        </form>
      </AuthLayout>
    </>
  );
};

export default Login;
