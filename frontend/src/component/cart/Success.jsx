import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";



const Success = () => {
  return (
    <div style={{marginTop:"130px"}}className="orderSuccess">
      <CheckCircleIcon />

      <Typography style={{fontFamily:"Urbanist"}}>Your Order has been Placed successfully </Typography>
      <Link style={{fontFamily:"Urbanist",backgroundColor:"teal"}}to="/orders">View Orders</Link>
     
    </div>
  );
};

export default Success;