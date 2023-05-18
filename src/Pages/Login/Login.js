import classes from "./Login.module.css";
import React, { useState } from "react";

const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = event => {
        event.preventDefault();

        // validation

        setLoggedIn(true)
        return;

    }



  return (
    <div className={classes.login__container}>
      <h1 className={classes.login__title}>Login</h1>

      <form className={classes.login__form__container} onSubmit={loginHandler}>
        <label htmlFor="username">Username</label>
        <input className={classes.login__form__username} id="username" />
        <label htmlFor="password">Password</label>
        <input className={classes.login__form__password} id="password" />
        <button className={classes.login_button} >Login</button>
      </form>
    </div>
  );
};

export default Login;
