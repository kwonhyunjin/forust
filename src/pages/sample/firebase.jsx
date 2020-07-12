import firebase from '@/firebase';
import React, { useCallback, useState } from 'react';

export default function Firebase() {
  const [email, setEmail] = useState('test@firebase.com');
  const [password, setPassword] = useState('123456');

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }, [email, password]);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Email
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
