import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemPrice, setItemPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);

    const newPrice = parseFloat(itemPrice) + parseFloat(product.price);
    setItemPrice(newPrice);

    const newTax = parseFloat((newPrice * 5) / 100).toFixed(2);
    setTax(newTax);

    const newTotal = parseFloat(newPrice) + parseFloat(newTax);
    setTotal(newTotal.toFixed(2));
  };

  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <h4>Order Summary</h4>
          <p>
            <strong>Items Ordered:</strong> {cart.length}
          </p>
          <p>
            <strong>Item Price: </strong> ${itemPrice}
          </p>
          <p>
            <strong>Tax: </strong> ${tax}
          </p>

          <p>
            <strong>Total price: </strong> ${total}
          </p>
        </div>
      </div>
    </>
  );
};

export default Shop;
