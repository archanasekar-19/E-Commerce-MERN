import React from "react";
import Styles from "./header.module.css";
// import img from "../../images/Sivamtraders.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function SSMHeader() {
  const [change, setchange] = useState(false);
  const scrollevent = () => {
    if (window.scrollY >= 70) {
      setchange(true);
    } else {
      setchange(false);
    }
  };
  window.addEventListener("scroll", scrollevent);
  return (
    <React.Fragment>
      <div
        className={
          change ? `${Styles.notNavbar} ${Styles.Navbar}` : Styles.Navbar
        }
      >
        <div className={Styles.brand}>
          {/* <img src={} alt="" /> */}
        </div>
        <div className={Styles.header}>
          <div className={Styles.home}>
            <h1>
              <Link className="link" to="/ssm">
                Home
              </Link>
            </h1>
          </div>
          <div className={Styles.aboutus}>
            <Link className="link" to="/ssm/about">
              <h1>Aboutus</h1>
            </Link>
          </div>
          <div className={Styles.contactUs}>
            <Link className="link" to="/ssm/contact">
              <h1>ContactUs</h1>
            </Link>
          </div>
          {/* <div className={Styles.login}>
            <h1>
              <Link className="link" to="/login">
                Login
              </Link>
            </h1>
          </div>
          <div className={Styles.signup}>
            <h1>
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </h1>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SSMHeader;
