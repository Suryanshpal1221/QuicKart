import React, { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.counter}>
      <div className={styles.countbtn} onClick={handleDecrement}>
        -
      </div>
      <div className={styles.value}>{count}</div>
      <div className={styles.countbtn} onClick={handleIncrement}>
        +
      </div>
    </div>
  );
}

export default Counter;
