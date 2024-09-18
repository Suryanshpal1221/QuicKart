import React, { useState } from "react";
import styles from "./SignupPage.module.css";
import { useNavigate } from "react-router-dom";

function SignupPage({ setSignup }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    setSignup(false);
  };
  const handleSignup = () => {
    if (firstName && lastName && email && password) {
      navigate("/homepage");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.site}>QuicKart</div>
      <div className={styles.main}>
        <div className={styles.card}>
          <div className={styles.inputCont}>
            <span className={styles.title}>Sign Up</span>
            <span className={styles.subtitle}>
              Please enter the details below
            </span>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button onClick={handleSignup}>Sign up</button>
            <div className={styles.signup}>
              Already a user?<u onClick={handleLogin}>Login</u>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
