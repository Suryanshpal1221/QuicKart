import React, { useEffect, useState } from "react";
import { CartItem, NavBar } from "../../Components";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../../Slices/cartItemSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartItem.cartItems);

  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    setNewItems(items);
  }, [items]);

  const handleRemoveAll = () => {
    dispatch(emptyCart([]));
  };

  const handleRemoveItem = (id) => {
    const newArr = newItems.filter((item) => {
      return item.id !== id;
    });
    setNewItems(newArr);
  };
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            <span>Shopping Cart</span>
            <span onClick={handleRemoveAll}>Remove All</span>
          </div>
          <div>
            {Array.isArray(items) && items.length > 0 ? (
              newItems.map((item, index) => {
                return (
                  <CartItem
                    key={index}
                    url={item.images[0]}
                    title={item.title}
                    price={item.price}
                    onClick={() => handleRemoveItem(item.id)}
                  />
                );
              })
            ) : (
              <div style={{ marginTop: 8 }}>Your cart is empty</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
