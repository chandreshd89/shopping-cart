import React, { useState } from "react";
import Header from "./Header.js";
import Cart from "./Cart.js";
import Card from "./Card";
import Sidebar from "./Sidebar";
import "./styles.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex((p) => p.id === product.id);
    console.log(index);
    if (index === -1) {
      setCart([...cart, { ...product, cart: 1 }]);
    } else {
      const info = { ...cart[index] };
      info.cart += 1;
      const clonedCart = [...cart];
      clonedCart[index] = info;
      setCart(clonedCart);
    }
  };

  const removeProduct = (id) => {
    const index = cart.findIndex((p) => p.id === id);

    if (index !== -1) {
      const cloneCart = [...cart];
      cloneCart.splice(index, 1);
      setCart(cloneCart);
    }
  };

  const removeFromCart = (id) => {
    const index = cart.findIndex((p) => p.id === id);
    if (index !== -1) {
      const info = { ...cart[index] };
      if (info.cart === 1) {
        removeProduct(id);
        return;
      } else {
        info.cart -= 1;
        const clonedCart = [...cart];
        clonedCart[index] = info;
        setCart(clonedCart);
      }
    } else {
      alert("No item found");
    }
  };
  return (
    <>
      <Header />
      <div className="flex">
        <div className="col-25">
          <Sidebar
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
        <div className="col-75 ">
          <Card
            selectedSize={selectedSize}
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
          />
        </div>
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeProduct={removeProduct}
        />
      </div>
    </>
  );
}

export default App;
