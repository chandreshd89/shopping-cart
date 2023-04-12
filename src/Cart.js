import { useState } from "react";

function Cart(props) {
  const [show, setShow] = useState(false);

  const handleCheckOut = () => {
    alert(
      `Total Bill is : ${props.cart.map(
        (product) => product.cart * product.price
      )} $`
    );
  };
  return (
    <div className="relative">
      {show ? (
        <>
          <div className="cart-box center">
            <button className="close-btn" onClick={() => setShow(false)}>
              <img
                className="close-tray"
                src="../sprite_delete-icon.png"
                alt="close"
              />
            </button>
          </div>
          <div className="cart-display  overflow">
            <div className="col-75 ">
              <div className="flex center">
                <div className="cart-bag-icon ">
                  {" "}
                  <img src="../bag-icon.png" alt="bag-icon" />
                </div>
                <div className=" cart-bag-count jus-center">
                  {props.cart.reduce((acc, cv) => acc + cv.cart, 0)}
                </div>
              </div>
              {props.cart.map((product) => (
                <div className="checkout-bag flex">
                  <img src={product.img} alt="mens-shirt" />
                  <div className="pad-left">
                    <p> {product.title}</p>
                    <div className="q-block">
                      <span>
                        {product.availableSizes.join(" ,")}| {product.style}
                      </span>
                      <br />
                      <span>Quantity: {product.cart}</span>
                    </div>
                  </div>
                  <div>
                    <img
                      className="close "
                      src="../sprite_delete-icon.png"
                      alt="close"
                      onClick={() => props.removeProduct(product.id)}
                    />
                    <span className="font">
                      ${(product.cart * product.price).toFixed(2)}
                    </span>
                    <div className="flex ">
                      <div
                        className="inc center"
                        onClick={() => props.addToCart(product)}
                      >
                        +
                      </div>
                      <div
                        className="dec center"
                        onClick={() => props.removeFromCart(product.id)}
                      >
                        -
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="checkout ">
              <div className="flex space-between">
                <div>
                  <h3>SUBTOTAL</h3>
                </div>
                <div>
                  <span className="mar-left">
                    $
                    {props.cart
                      .reduce((acc, cv) => acc + cv.cart * cv.price, 0)
                      .toFixed(2)}
                  </span>
                  <br />
                  {/* <span>OR UP TO 12 x $ 2.16</span> */}
                </div>
              </div>
              <button onClick={handleCheckOut}>Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <img
            className="bag-icon "
            src="../bag-icon.png"
            alt="bag-icon"
            onClick={() => setShow(true)}
          />
          <div className="count center ">
            {props.cart.reduce((acc, cv) => acc + cv.cart, 0)}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
