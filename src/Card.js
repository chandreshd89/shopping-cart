import data from "./data.json";

function Card(props) {
  const { selectedSize, cart, setCart } = props;

  const getData = () => {
    if (selectedSize.length > 0) {
      return data.products.filter((product) =>
        product.availableSizes.some((size) => selectedSize.includes(size))
      );
    }
    return data.products;
  };

  const addToCart = (product) => {
    const index = cart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const info = { ...cart[index] };
      info.cart += 1;
      const clonedCart = [...cart];
      clonedCart[index] = info;
      setCart(clonedCart);
    } else {
      setCart([...cart, { ...product, cart: 1 }]);
    }
  };

  const product = getData();

  return (
    <>
      <div>
        <div className="products">
          <h3>{product.length} product(s) found</h3>
        </div>

        <div className="flex wrap">
          {product.map((product) => {
            return (
              <div className="card">
                <img src={product.img} alt={product.img} />
                <div className="free-ship">
                  {product.isFreeShipping === true ? "Free Shipping" : ""}
                </div>
                <div className="Card-wrapper col center">
                  <h2>{product.title}</h2>
                  <div className="line"></div>
                  <span>${product.price}</span>
                  <small>or {product.installments}x $1.21</small>
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
