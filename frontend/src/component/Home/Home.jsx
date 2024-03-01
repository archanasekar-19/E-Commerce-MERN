import React, { useEffect }  from 'react'
import Carousel from "react-material-ui-carousel";
import ProductCard from '../Products/ProductCard';
import "./Home.css"
import  {useDispatch, useSelector} from "react-redux"
import { clearErrors,getProduct } from "../../actions/ProductActions";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import MetaData from '../../more/Metadata';
import Footer from '../../Footer';

const Home = () => {
  const dispatch = useDispatch();
  const { products,error} = useSelector(
    (state) => state.products
  );
  
  useEffect(() => {
    if(error){ 
      alert.error(error);
      dispatch(clearErrors);
 }
  dispatch(getProduct());
   }, [dispatch,error])

  return (
    <>
    <MetaData title="HOME"/>
    <Header/>
        {/* Carousel */}
        
        <div className="banner">
               <Carousel>
                 <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2020_23/1575506/face-masks-give-back-kr-2x1-tease-200602.jpg" className="bgImg" alt=""/>
                 <img src="https://thelogicalindian.com/h-upload/2020/08/31/180630-ppeweb.jpg" alt="" className="bgImg"/>
                 <img src="https://cdn.aarp.net/content/dam/aarp/health/conditions_treatments/2020/07/1140-family-distanced-in-park.imgcache.rev.web.1740.1000.jpg" className="bgImg" alt=""/>
               </Carousel> 
             {/* <div className="home__content">
               <div style={{
                 display:"flex",
                 alignItems:"center",
               }}>
               <h2 style={{
                 fontFamily: "Urbanist",
                 fontSize: "3em",
                 fontWeight:"800"
               }}>Buy 2 Get</h2>
               <span style={{
                 padding:"10px",
                 backgroundColor:"#fff",
                 margin:"0px 10px",
                 textAlign:"center",
                 width:"150px",
                 height:"40px",
                 color: "#26c",
                 fontFamily: "Urbanist",
                 fontSize: "2.4em",
                 display:"flex",
                 justifyContent:"center",
                 lineHeight:".7",
                 alignItems:"center"
               }}>1 Free</span>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontFamily:"Urbanist",
                   color:"#fff",
                 }}>Fashionable</h2>
               </div>
               <div>
                 <h2 style={{
                   fontSize:"4.5em",
                   fontWeight:"400",
                   fontFamily:"Urbanist",
                   color:"#fff",
                   lineHeight:".7"
                 }}>Collection</h2>
               </div>
               <div>
                 <h2
                 style={{
                   fontWeight:"400",
                   fontFamily:"Urbanist",
                   color:"#fff",
                   fontSize:"24px",
                   paddingTop:"10px"
                 }}
                 >
                 Get Free Shipping on all orders over $99.00
                 </h2>
               </div>
               <div>
                 <a href="#container">
                 <button type="submit" style={{
                   width:"170px",
                   height:"50px",
                   border:"none",
                   background:"#3BB77E",
                   margin:"10px 0",
                   fontSize:"1.2vmax",
                   color:"#fff",
                   cursor:"pointer"
                 }}
                 className="Home__button"
                 >SHOP NOW</button>
                 </a>
               </div>
             </div> */}
         </div>
         <h2  style={{fontFamily:"Urbanist"}}className="homeHeading">Featured Products</h2>
         <div className="container" id="container">
          {products && products.map((product) =>(
            <ProductCard key={product.id} product={product}/>
          ))}
         </div>
         <Footer/>
      </>    
)};
export default Home
