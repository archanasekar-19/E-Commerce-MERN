import React from "react";
import Styles from "./about.module.css";
import SSMHeader from "../header/SSMHeader";
import SSMFooter from "../footer/SSMFooter"

function SSMAbout() {
  return (
    <>
      <SSMHeader/>
      <div className={Styles.abouthead}>
        <div className={Styles.aboutCon}>
          <span>TRANSCENDING</span> boundaries,
          <br />
          <span>BRIDGING </span>the nation &
          <br />
          <span>EMPOWERING </span>the people.
          <br />
          <button>Contact</button>
        </div>
      </div>
      <div className={Styles.section2}>
        <h1>Quality Consulting</h1>
        <h3>What make us different from others</h3>
      </div>
      <div className={Styles.section3}>
        <div className={Styles.inle}>
          <h2>1</h2>
          <div className={Styles.overlay}>
            <h1>Customer Service</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>2</h2>
          <div className={Styles.overlay}>
            <h1>Assured Delivery</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>3</h2>
          <div className={Styles.overlay}>
            <h1>Quality Product</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>4</h2>
          <div className={Styles.overlay}>
            <h1>Best Deal in Market</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>5</h2>
          <div className={Styles.overlay}>
            <h1>High rated Service</h1>
          </div>
        </div>
        <div className={Styles.inle}>
          <h2>6</h2>
          <div className={Styles.overlay}>
            <h1>Customer Satifictions</h1>
          </div>
        </div>
      </div>
      <div className={Styles.section4}>
        <div className={Styles.section4head}>Our Product Brands</div>
        <br />
        <h1>Spun Polyester Yarn</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={"https://images.jdmagicbox.com/quickquotes/images_main/polyester-spun-yarn-355794885-eprzd.jpg"} width={300} alt="TATA" />
          </div>
          <div className={Styles.image}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0UCv5yWqAhGrwJjRKu8xD2Srnn0C32TYrHw&usqp=CAU"} width={300} alt="JSW" />
          </div>
          <div className={Styles.image}>
            <img src={"https://www.thaipolyester.com/assets/images/spun-yarn/desktop/Picture-Desktop-3.webp"} width={300} alt="ZINDAL" />
          </div>
        </div>

        <h1>Machineries</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={"https://img1.exportersindia.com/product_images/bc-full/dir_122/3648011/autoconer-winding-machine-1515566946-3569960.jpg"} width={300} alt="ULTRATECH" />
          </div>
          <div className={Styles.image}>
            <img src={"https://img1.exportersindia.com/product_images/bc-full/dir_122/3648011/autoconer-1515567030-3569971.jpg"} width={400} alt="ACC" />
          </div>
          <div className={Styles.image}>
            <img src={"https://static.fibre2fashion.com/Newsresource/images/280/shutterstock-1080750416_292457.jpg"} width={300} alt="RAMCO" />
          </div>
        </div>

        {/* <h1>Pipes</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={finolex} width={230} alt="FINOLEX" />
          </div>
          <div className={Styles.image}>
            <img src={astral} width={230} alt="ASTRAL" />
          </div>
          <div className={Styles.image}>
            <img src={ashirvad} width={230} alt="ASHIRVAD" />
          </div>
        </div>
        <h1>Wires</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={havels} width={230} alt="HAVELS" />
          </div>
          <div className={Styles.image}>
            <img src={legrand} width={230} alt="LEGRAND" />
          </div>
          <div className={Styles.image}>
            <img src={polycab} width={230} alt="POLYCAB" />
          </div>
        </div>
        <h1>LimeStone</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={indiana} width={230} alt="INDIANA" />
          </div>
        </div>
        <h1>Paints</h1>
        <div className={Styles.imgcon}>
          <div className={Styles.image}>
            <img src={asian} width={230} alt="Asian" />
          </div>
          <div className={Styles.image}>
            <img src={dulux} width={230} alt="Ultra Delux" />
          </div>
          <div className={Styles.image}>
            <img src={nippon} width={230} alt="Nippon" />
          </div>
        </div> */}
      </div>
      <SSMFooter />
    </>
  );
}

export default SSMAbout;
