import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { createOrder, clearErrors } from "../../actions/OrderAction";

const CashPay = ({history}) => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const dispatch = useDispatch();

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error,loading } = useSelector((state) => state.order);
  console.log(cartItems);

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
   try{
    dispatch(createOrder(order));
    history.push("/success");
   }catch{
    toast.error("There's some issue while processing payment ");
   }

  return (
    <div>
      CASH ON DELIVERY
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
    </div>
  )
}

export default CashPay
