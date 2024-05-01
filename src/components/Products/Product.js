import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props.product);

  const { img, name, price, seller, ratings } = props.product;
  const handleAddCart = props.handleAddCart;
  return (
    <>
      <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
          <h6 className="product-name">{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Stars</p>
        </div>
        <button
          className="btn-cart"
          onClick={() => {
            handleAddCart(props.product);
          }}
        >
          Add to Cart
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </>
  );
};

export default Product;
