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

const pageTitle = 'Create Account | Forust';

const emailValidate = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function Signup() {
  const router = useRouter();
  const [alert, setAlert] = useState();
  const [disabled, setDisabled] = useState(false);
  const {
    register, clearErrors, errors, handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    setAlert(undefined);
    try {
      await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
      // 트랜잭션 일관성이 보장되지 않아 회원가입 직후 사용자 정보를 가져오지 못하는 버그 대응 (2020.09.21 이후 재현 불가)
      setTimeout(async () => {
        const user = firebase.auth().currentUser;
        await user.updateProfile({
          displayName: data.displayName,
        });
        router.push('/');
      }, 200);
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
          <h2 className="auth-form-heading">Create your Forust Account</h2>
          {alert && (<Alert type="error">{alert}</Alert>)}
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Name" error={errors.displayName?.message}>
                <TextField
                  type="text"
                  name="displayName"
                  ref={
                    register({
                      required: 'Enter your name.',
                      maxLength: {
                        value: 10,
                        message: 'Use up to 10 characters for your name.',
                      },
                    })
                  }
                />
              </FormField>
            </div>
          </div>
          <div className="grid-row form-row">
            <div className="grid-col">
              <FormField label="Email" error={errors.email?.message}>
                <TextField
                  type="text"
                  inputMode="email"
                  name="email"
                  ref={register({
                    required: 'Enter your email address.',
                    pattern: {
                      value: emailValidate,
                      message: 'Invalid email address.',
                    },
                  })}
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
                  ref={register({
                    required: 'Enter a password.',
                    minLength: {
                      value: 6,
                      message: 'Use 6 characters or more for a password.',
                    },
                  })}
                />
              </FormField>
            </div>
          </div>
          <div className="grid-row auth-form-submit-row">
            <div className="grid-col">
              <Button className="auth-submit" type="submit" disabled={disabled}>Create Account</Button>
            </div>
          </div>
          <div className="grid-row auth-form-desc-row">
            <div className="grid-col">
              Already have an account?
              {' '}
              <Link href="/login"><a>Login.</a></Link>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}

export default Signup;
