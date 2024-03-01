import React from "react";
import SSMHeader from "../header/SSMHeader";
import SSMFooter from "../footer/SSMFooter"
import Styles from "./home.module.css";
import { MdOutlineVerified } from "react-icons/md";
// import Products from "../Product/Products";

// import Footer from "../footer/footer";

function SSMHome() {
  return (
    <div>
      <SSMHeader/>
      <div className={Styles.homeCon}>
        <div className={Styles.content}>
          <br/><h1 style={{fontFamily: "Urbanist",color:"white"}}>Driven by Values, Technology & Responsibility</h1><br/>
          <h1 style={{fontFamily: "Urbanist",color:"white"}}>Offer innovative, customized and value-added services to Customers.</h1><br/>
          <h1 style={{fontFamily: "Urbanist",color:"white"}}>Leveraging technology through automations across all departments.</h1>
        </div>
      </div>
      <div className={Styles.data}>
        <div className={Styles.list}>
          <li style={{fontFamily: "Urbanist"}}>Quality Service</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li style={{fontFamily: "Urbanist"}}>Best Market Deals</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li style={{fontFamily: "Urbanist"}}>Free Shipping</li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
        <div className={Styles.list}>
          <li style={{fontFamily: "Urbanist"}}>Authorised Dealer </li>
          <MdOutlineVerified className={Styles.icon} />
        </div>
      </div>
      {/* <Products /> */}
      <div className={Styles.section1head}>
        {/* <h1 style={{fontFamily: "Urbanist"}}>Product Selection Process</h1>
        <br />
        <p style={{fontFamily: "Urbanist"}}>Every building starts with a concept and a design.</p> */}
        <br/>
        <br/>
        <p style={{fontFamily: "Urbanist",display:"flex",color:"black"}}>
        "SSM is one of the largest manufacturers of yarn in terms of installed spindleage capacity. 
        The Company has spinning mills with a total capacity of 10,000 spindles. Together, they produce approximately 
        1,00,000 MT  of cotton yarn per annum of counts ranging from 10s to 40s. 
        Every yarn produced adheres to the highest standards of quality."
        </p>
        <br />
        {/* <h2 style={{fontFamily: "Urbanist"}}>But here we have solution for your confusion</h2> */}
        <br />
      </div>
      <div className={Styles.section2}>
        <div className={Styles.innersec2}>
          <div className={Styles.card}>
            <img
              src="https://image.shutterstock.com/image-photo/spinning-mill-workshop-workers-operating-260nw-337393277.jpg"
              alt=""
              width={300}
            />
            <h2 style={{fontFamily: "Urbanist"}}>Products</h2>
            <p style={{fontFamily: "Urbanist"}}>
                 SSM yarn has a unique identity and stands exceptional in terms of quality and durability.
            </p>
          </div>
          <div className={Styles.card}>
            <img
              src="https://c8.alamy.com/comp/B70FFP/india-indore-spinning-mill-produce-yarn-from-organic-and-fair-trade-B70FFP.jpg"
              alt=""
              width={300}
            />
            <h2 style={{fontFamily: "Urbanist"}}>Quality</h2>
            <p>
            10’s to 40’s Semi Combed & Super Comber of Hosiery Yarn, 
            Weaving, Organic, BCI, ‘S’ Twist and Chessable Dye Cones.
            </p>
          </div>
          <div className={Styles.card}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu66g137OrJjplcU8J5wVmAYFv0EL0CBeBgg&usqp=CAU"
              alt=""
              width={300}
            />
            <h2>Service</h2>
            <p style={{fontFamily: "Urbanist"}}>
            SSM has the latest technology Vortex Spinning machine that creates a new wave of world fashion. It eliminates two major processes thereby saving labour and power besides producing ideal structure of yarn. 
            </p>
          </div>
        </div>
      </div>

      <SSMFooter/>
    </div>
  );
}

export default SSMHome;