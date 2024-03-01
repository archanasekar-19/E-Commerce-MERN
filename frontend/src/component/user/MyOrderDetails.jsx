import React, { useEffect } from "react";
import "./orderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/OrderAction";
import { useAlert } from "react-alert";
import Loading from "../../more/Loader";
import BottomTab from "../../more/BottomTab";

const MyOrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.myOrderDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography style={{fontFamily:"Urbanist",color:"teal"}} component="h1">
                Order #{order && order._id}
              </Typography>
              <Typography style={{fontFamily:"Urbanist"}}>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Name:</p>
                  <span style={{fontFamily:"Urbanist"}}>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Phone:</p>
                  <span style={{fontFamily:"Urbanist"}}>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p style={{fontFamily:"Urbanist"}}>Address:</p>
                  <span style={{fontFamily:"Urbanist"}}>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.state}`}
                  </span>
                </div>
              </div>
              <Typography style={{fontFamily:"Urbanist"}}>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p style={{fontFamily:"Urbanist"}}
                    className={
                      order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >                  
                  </p>
                  <p style={{
                      color:"teal",
                      fontFamily:"Urbanist"
                  }}>
                  PENDING
                  </p>
                </div>

                <div>
                  <p style={{fontFamily:"Urbanist"}}>Amount:</p>
                  <span style={{fontFamily:"Urbanist"}}>Rs {order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography style={{fontFamily:"Urbanist"}}>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p style={{fontFamily:"Urbanist"}}
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography style={{fontFamily:"Urbanist"}}>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">

                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.Offer}>
                      <img src={item.image} alt="Product" />
                      <Link style={{fontFamily:"Urbanist"}} to={`/product/${item.Offer}`}>
                        {item.name}
                      </Link>{" "}
                      <span style={{fontFamily:"Urbanist"}}>
                        {item.quantity} X Rs {item.price} ={" "}
                        <b style={{fontFamily:"Urbanist"}}>Rs {item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}


              </div>
            </div>
          </div>
        </>
      )}
      <BottomTab />
    </>
  );
};

export default MyOrderDetails;