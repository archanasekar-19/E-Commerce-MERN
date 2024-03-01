import React from "react";
import Styles from "../contact/contact.module.css";
import SSMHeader from "../header/SSMHeader";
import SSMFooter from "../footer/SSMFooter"
const SSMContact = () => {
  return (
    <>
      <SSMHeader />
      <div className={Styles.content}>
        <div className={Styles.map}></div>
       

        <div className={Styles.mainHolder}>
          <div className={Styles.main}>
            <div className={Styles.heading}>
              <h1>Reach us!</h1>
            </div>
            <div className={Styles.gst}>
              <h1 style={{fontFamily: "Urbanist"}}>( GSTIN ) - 33AAGCS9231A1ZQ</h1>
            </div>
            <div className={Styles.boxes}>
              <div className={Styles.box1}>
                <div className={Styles.boxHead}>Registered Office</div>
                <div className={Styles.address}>
                    411,Thiyagaraya New Street
                  <br /> Coimbatore.{" "}
                  <br /> Tamil Nadu, India
                </div>
              </div>

              <div className={Styles.box1}>
                <div className={Styles.boxHead}>Registered Office</div>
                <div className={Styles.address}>
                  Sathy Main Road,
                  <br /> Behind SRC School,Nallur Village{" "}
                  <br /> Puliampatty - 638459,Erode 
                </div>
              </div>

              {/* <div className={Styles.box1}>
                <div className={Styles.boxHead}>Registered Office</div>
                <div className={Styles.address}>
                  Dhun Building, No: 827,
                  <br /> 4th Floor, Mount Road, Anna Salai, Chennai - 600 002.{" "}
                  <br /> Tamil Nadu, India
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className={Styles.formHold}>
          <div className={Styles.form}>
            <div className={Styles.formHead}>
              <h1 style={{fontFamily: "Urbanist"}}>Leave a Message</h1>
            </div>
            <div className={Styles.row}>
              <input style={{fontFamily: "Urbanist"}}type="text" name="" id="" placeholder="Your Name" />
              <input style={{fontFamily: "Urbanist"}}type="text" name="" id="" placeholder="Phone Number" />
            </div>
            <div className={Styles.row}>
              <input type="text" name="" id="" placeholder="E-mail" />
              <input type="text" name="" id="" placeholder="Company" />
            </div>
            <div className={Styles.row}>
              <input type="text" name="" id="" placeholder="Subject" />
            </div>
            <div className={Styles.row}>
              <textarea
                name=""
                id=""
                cols="80"
                rows="10"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className={Styles.row}>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SSMContact;
