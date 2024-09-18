import React from "react";
import styles from "./CartItem.module.css";
import Counter from "../Counter/Counter";

function CartItem({ url, title, price, onClick }) {
  return (
    <div className={styles.checkeditem}>
      <div className={styles.img}>
        <img src={url} />
      </div>
      <div className={styles.title}>
        <div>{title}</div>
        <Counter />
      </div>
      <div className={styles.price}>
        <span>$ {price}</span>
        <div onClick={onClick}>Remove</div>
      </div>
    </div>
  );
}

export default CartItem;
