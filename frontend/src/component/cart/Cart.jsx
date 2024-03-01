import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/CartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard.js";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ history }) => {
  
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  let Price = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  let totalPrice = Price;

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return toast.error("Product Stock Limited");
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />
          <Typography style={{fontFamily:"Urbanist"}}>No Items In Cart</Typography>
          <Link  style={{fontFamily:"Urbanist"}} to="/products">View Products</Link>
          <BottomTab />
        </div>
      ) : (
        <>
          <div className="cartPage">
            <div className="cartHeader">
              <p style={{fontFamily:"Urbanist",fontSize:"22px"}}>Product</p>
              <p style={{fontFamily:"Urbanist",fontSize:"22px"}}>Quantity</p>
              <p style={{fontFamily:"Urbanist",fontSize:"22px"}}>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div style={{fontFamily:"Urbanist"}}className="cartContainer" key={item.product}>
                  <CartItemCard style={{fontFamily:"Urbanist"}}item={item} deleteCartItems={deleteCartItems} />
                  <div style={{fontFamily:"Urbanist"}}className="cartInput">
                    <button
                    style={{fontFamily:"Urbanist"}}
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      -
                    </button>
                    <input style={{fontFamily:"Urbanist"}}type="number" readOnly value={item.quantity} />
                    <button
                    style={{fontFamily:"Urbanist"}}
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <h2 style={{fontFamily:"Urbanist"}}className="cartSubtotal">{`Rs ${
                    item.price * item.quantity
                  }`}</h2>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p style={{fontFamily:"Urbanist"}}>Price Total</p>
                <p style={{fontFamily:"Urbanist"}}>Rs {totalPrice}</p>
              </div>
              <div></div>
              <div style={{fontFamily:"Urbanist"}} className="checkOutBtn">
                <button style={{fontFamily:"Urbanist"}} onClick={checkoutHandler}>CHECK OUT</button>
              </div>
            </div>
          </div>
          <ToastContainer
          style={{fontFamily:"Urbanist"}}
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Cart;