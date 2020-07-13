import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import Layout from '@/layouts/auth-layout/auth-layout';
import PropTypes from 'prop-types';
import React from 'react';

export default function Signup({ error }) {
  return (
    <main className="signup">
      <h1 className="visually-hidden">FORUST</h1>
      <Layout />
      <section className="auth-form">
        <h2 className="visually-hidden">Signup</h2>
        <div className="form">
          <div className="form-title">
            <p>Create your Forust Account</p>
          </div>
          <form className="form-contents">
            <div className="form-contents__row form-contents__row--half">
              <FormField label="Name" error={error}><TextField className="form-input" type="text" id="name" placeholder="Name" /></FormField>
            </div>
            <div className="form-contents__row form-contents__row--half">
              <FormField label="Username" error={error}><TextField className="form-input" type="text" id="username" placeholder="Username" /></FormField>
            </div>
            <div className="form-contents__row">
              <FormField label="Email" error={error}><TextField className="form-input" type="text" id="email" placeholder="Email" /></FormField>
            </div>
            <div className="form-contents__row">
              <FormField label="Password" error={error}><TextField className="form-input" type="password" id="password" placeholder="Password" /></FormField>
            </div>
            <div className="form-contents__row form-contents__btn">
              <Button className="form-btn" type="submit">Create Account</Button>
            </div>
            <div className="form-contents__row form-contents__sub">
              Already have an account?
              {' '}
              <a href="/">Sign in.</a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

Signup.propTypes = {
  error: PropTypes.node,
};
