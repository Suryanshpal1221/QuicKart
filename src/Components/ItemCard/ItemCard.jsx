import React from "react";
import styles from "./ItemCard.module.css";

function ItemCard({ id, url, title, price, brand, discount, onClick }) {
  return (
    <div className={styles.container} id={id} onClick={onClick}>
      <div className={styles.image}>
        <img src={url} loading="lazy" />
      </div>
      <div className={styles.details}>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.name}>{title}</span>
        <span className={styles.price}>
          ${price}({discount}% Discount)
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
