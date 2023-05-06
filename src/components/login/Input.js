import React, { useState } from 'react';
import styles from './LoginPage.module.css';

function LoginPage({setIsLogin}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    if(email.includes('@') && password.length > 5){
      setIsLogin((pre) => !pre);
    }else if(email.includes('@')){
      alert("Password size should be greater than 5");
    }else{
      alert("Worng Email");
    }
  }

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
          required
        />
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
