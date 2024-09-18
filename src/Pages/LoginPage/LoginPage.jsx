import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import SignupPage from "../SignupPage/SignupPage";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };
  const handleSignin = () => {
    if (email && password) {
      navigate("/homepage");
    }
  };
  return (
    <>
      {signup && <SignupPage setSignup={setSignup} />}

      <div className={styles.container}>
        <div className={styles.quickart}>
          <img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg" />
        </div>
        <div className={styles.card}>
          <div className={styles.sitename}>QuicKart</div>
          <div className={styles.inputCont}>
            <span className={styles.title}>Welcome Back!</span>
            <span className={styles.subtitle}>
              Please enter login details below
            </span>
            <input
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <span className={styles.forgotpass}>Forgot password?</span>
            <button onClick={handleSignin}>Sign in</button>
            <div className={styles.signup}>
              Don't have an account?<u onClick={handleSignup}>Sign up</u>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
