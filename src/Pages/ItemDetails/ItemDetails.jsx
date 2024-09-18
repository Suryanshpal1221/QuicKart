import React, { useState } from "react";
import { NavBar } from "../../Components";
import styles from "./ItemDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../Slices/cartItemSlice";

function ItemDetails() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.itemDetails.details);
  const [btn, setBtn] = useState(false);

  const handleAddtoCart = (item) => {
    setBtn(true);
    dispatch(addCartItem(item));
  };
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.image}>
            <img src={item.images} />
          </div>
          <div className={styles.details}>
            <h1>{item.title}</h1>
            <h2>{item.brand}</h2>
            <h4>{item.description}</h4>
            <span className={styles.price}>$ {item.price}</span>
            <div className={styles.availability}>
              <span>Availability : </span>
              <span>{item.availabilityStatus}</span>
            </div>
            <h5>About this Item:</h5>
            <ul>
              <li>{item.warrantyInformation}</li>
              <li>{item.shippingInformation}</li>
              <li>{item.returnPolicy}</li>
            </ul>
            <button
              className={styles.btn}
              onClick={() => handleAddtoCart(item)}
            >
              {btn ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;
