import React from "react";
import Styles from "./footer.module.css";
import { SiInstagram } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";

function SSMFooter() {
  return (
    <>
      <footer className={Styles.footer}>
        <div className={Styles.details}>
          <h2>Customer Care</h2>
          <div className={Styles.customer}>
            <h4>Contact Us</h4>
            <h4>Products</h4>
          </div>
        </div>
        <div className={Styles.details}>
          <h2>My Account</h2>
          <div className={Styles.myaccount}>
            <h4>SignUp/Register</h4>
            <h4>Login</h4>
          </div>
        </div>
        <div className={Styles.details1}>
          <h2>Social</h2>
          <div className={Styles.social}>
            <div className={Styles.social_icons}>
              <h4>
                <SiInstagram />
              </h4>
              <h4>
                <ImFacebook2 />
              </h4>
              <h4>
                <ImWhatsapp />
              </h4>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SSMFooter;
