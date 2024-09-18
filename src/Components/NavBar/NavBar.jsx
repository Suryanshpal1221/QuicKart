import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../Slices/categorySlice";

function NavBar() {
  const dispatch = useDispatch();
  const [searchedItem, setSearchedItem] = useState("");

  const handleSearch = (text) => {
    dispatch(setSelectedCategory(text));
  };

  return (
    <>
      <div className={styles.main}>
        <Link to="/homepage">
          <div className={styles.appIcon}>QuicKart</div>
        </Link>
        <div className={styles.inputCont}>
          <div className={styles.icon}>
            <IoMdSearch size={20} color="black" />
          </div>
          <input
            type="text"
            className={styles.input}
            placeholder="Search"
            value={searchedItem}
            onChange={(e) => {
              setSearchedItem(e.target.value);
            }}
            onKeyDown={() => handleSearch(searchedItem)}
          />
        </div>
        <div className={styles.iconCont}>
          <Link to="/">
            <FaUser size={20} />
          </Link>
          <Link to="/homepage/cart">
            <FaShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
