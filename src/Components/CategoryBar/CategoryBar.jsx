import React, { useState } from "react";
import styles from "./CategoryBar.module.css";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../Slices/categorySlice";
import { FiAlignJustify } from "react-icons/fi";

function CategoryBar({}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const categories = [
    "All",
    "Beauty",
    "Fragrances",
    "Groceries",
    "Home-Decoration",
    "Kitchen-Accessories",
    "Mens-Shirts",
    "Mens-Shoes",
    "Womens-watches",
    "Womens-shoes",
  ];

  const handleClick = (item) => {
    dispatch(setSelectedCategory(item));
    setShow(false);
  };

  const handleToggle = () => {
    console.log("hello");
    setShow(!show);
  };

  return (
    <div className={styles.container}>
      <div className={styles.icon} onClick={handleToggle}>
        <FiAlignJustify size={28} />
      </div>
      <div className={styles.title}>Categories </div>
      {show && (
        <div className={styles.list}>
          {categories.map((item, index) => {
            return (
              <div
                className={styles.items}
                key={index}
                onClick={() => handleClick(item.toLowerCase())}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
      {categories.map((item, index) => {
        return (
          <div
            className={styles.itemss}
            key={index}
            onClick={() => handleClick(item.toLowerCase())}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default CategoryBar;
