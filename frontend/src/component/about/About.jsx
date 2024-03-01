import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";


const About = () => {
    const { loading } = useSelector(
        (state) => state.profile
      );
  return (
    <>
    {loading ? <Loading /> : 
    <>
    <MetaData title="About" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
        fontFamily:"Urbanist"
      }}
    >
      <div className="about__page">
        {/* 1st verse */}
        <div className="row flex">
          <div className="col__2">
            <img styel={{width:"500"}} src="https://content.presspage.com/uploads/2110/1920_covid-19-mask-kids-gettyimages.jpg?10000" />
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  fontFamily:"Urbanist",
                  marginLeft:"25px"
                }}
              >
                Welcome to NSK MEDITECH
              </span>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px"}}>
              Established in the year 2020 at Milk Market, Coimbatore, Tamil Nadu, we "NSK Meditech" 
              is a Partnership Firm, as the Manufacturer, Wholesaler, Supplier and Retailer of PPE Kit, 
              Surgeon gown, Isolation gown, Scrub suit, Surgical drapes and many more.Our products are high 
              in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely 
              deliver these products to our clients, through this we have gained a huge clients base in the market.
              </p>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>
                           Why Us ? 
                </p>
              <p style={{fontFamily:"Urbanist", marginLeft:"25px"}}>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Brand You Can Trust</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>3 decades of expertise</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Health & Safety is our priority</li>
                  <li style={{fontFamily:"Urbanist", marginLeft:"25px",color:"#7E7E7E"}}>Ethical Practices</li>
              </p>
            </div>
          </div>
        </div>

        {/* 2nd verse */}
        <div className="second">
          <div className="heading">
            <h2 style={{fontFamily:"Urbanist"}}>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Best Prices & Offers</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Best For Trust & Quality</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Fast Delivery System</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>


            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Easy Returns Service</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>

            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>100% satisfication</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>
            
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px",
                    fontFamily:"Urbanist"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                </div>
              <span style={{fontFamily:"Urbanist"}}>Great Daily Deal</span>
              <p style={{fontFamily:"Urbanist"}}>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form
              </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
 
  </>
    }
    </>
  );
};

export default About;