import React from "react";
import "./ConfirmOrder.css";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../../more/BottomTab";

const ConfirmOrder = ({ history }) => {
    const dispatch = useDispatch();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const { user } = useSelector((state) => state.user);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    

    function redirect()
{
  const data = {
    subtotal,
    shippingCharges,
    totalPrice,
  };
   if(document.getElementById("paymentCOD").checked == true)
   sessionStorage.setItem("orderInfo", JSON.stringify(data));
   history.push("/cashpay");
          
}

    const subtotal = productPrice ;
      // eslint-disable-next-line
    const shippingCharges = productPrice > 99 ? 0 : 50;
    
    const totalPrice = subtotal + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
      history.push("/process/payment");
    };

    // const redirect = () => {
    //   const data = {
    //     subtotal,
    //     shippingCharges,
    //     totalPrice,
    //   };
    //   if(document.getElementById("paymentCOD").checked == true)
    //   window.location.href = 'http://localhost:3000/success';
    //   dispatch(createOrder(order));
    //   sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
    //   history.push("/process/payment");
    // };
  
    return (
      <>
        <MetaData title="Confirm Order" />
        <CheckoutSteps activeStep={1} />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography style={{fontFamily:"Urbanist"}}>Shipping Info</Typography><br/>
              <div className="confirmshippingAreaBox">
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Name:</p>
                  <span style={{fontFamily:"Urbanist"}}>{user.name}</span><br/>
                </div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Phone:</p>
                  <span style={{fontFamily:"Urbanist"}}>{shippingInfo.phoneNo}</span><br/>
                </div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Address:</p>
                  <span style={{fontFamily:"Urbanist"}}>{address}</span><br/>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <Typography style={{fontFamily:"Urbanist"}}>Your Cart Items:</Typography>


              {cartItems.length === 0 ? 
                <div className="confirmCartItemsContainer">
                   ""
                 </div>
                  :
             <div className="confirmCartItemsContainer">
             {cartItems.map((item) => (
               <div key={item.product}>
                 <img src={item.image} alt="Product" />
                 <Link style={{fontFamily:"Urbanist"}} to={`/product/${item.product}`}>
                   {item.name}
                 </Link>{" "}
                 <span style={{fontFamily:"Urbanist"}}>
                   {item.quantity} X Rs {item.price} ={" "}
                   <b style={{fontFamily:"Urbanist"}}>Rs {item.price * item.quantity}</b>
                 </span>
               </div>
             ))
              }
           </div>
          }
     
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <Typography style={{fontFamily:"Urbanist"}}>Order Summery</Typography>
              <div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Subtotal:</p>
                  <span style={{fontFamily:"Urbanist"}}>Rs {subtotal}</span>
                </div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Shipping Charges:</p>
                  <span style={{fontFamily:"Urbanist"}}>Rs {shippingCharges}</span>
                </div>
                <div>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p style={{fontFamily:"Urbanist"}}>
                  <b style={{fontFamily:"Urbanist"}}>Total:</b>
                </p>
                <span style={{fontFamily:"Urbanist"}}>Rs {totalPrice}</span>
              </div>
              <input style={{fontFamily:"Urbanist"}}type="checkbox" id="paymentCOD" name="paymentCOD" value="paymentCOD" />CASH ON DELIVERY<br/>
              {/* <input style={{fontFamily:"Urbanist"}}type="checkbox" id="payment" name="payment" value="payment" />PAY ONLINE<br/><br/> */}
              <button style={{fontFamily:"Urbanist"}}onClick={redirect}>Place Order</button>
              <button style={{fontFamily:"Urbanist"}} onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
        <BottomTab />
      </>
    );
  };
  
  export default ConfirmOrder;