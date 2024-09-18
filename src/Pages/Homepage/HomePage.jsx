import React, { useEffect, useCallback, useState } from "react";
import { NavBar, ItemCard, CategoryBar } from "../../Components";
import styles from "./HomePage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDetails } from "../../Slices/itemDetailsSlice";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );
  const [data, setData] = useState(null);
  const [newdata, setNewData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      setData(data?.products);
      setNewData(data?.products);
    } catch (error) {
      setError(true);
      setData(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filterData = () => {
    const result = data?.filter((item, index) => {
      if (selectedCategory === "all") {
        return true;
      } else {
        return item.category === selectedCategory;
      }
    });
    setNewData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [selectedCategory]);

  const handleItem = (item) => {
    dispatch(setDetails(item));
    navigate("/homepage/item");
  };

  return (
    <>
      <NavBar />
      <CategoryBar />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          {newdata?.map((item, index) => {
            return (
              <ItemCard
                key={index}
                title={item.title}
                brand={item.brand}
                price={item.price}
                url={item.images[0]}
                id={item.id}
                discount={item.discountPercentage}
                onClick={() => handleItem(item)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomePage;
