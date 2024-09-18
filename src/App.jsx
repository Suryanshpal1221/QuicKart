import { useState } from "react";
import { HomePage, LoginPage, Cart, ItemDetails } from "./Pages";
import styles from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/homepage/cart" element={<Cart />} />
            <Route path="/homepage/item" element={<ItemDetails />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
