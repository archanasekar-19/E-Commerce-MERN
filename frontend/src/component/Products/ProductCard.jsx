import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({product}) => {
    const options = {
        value : product.ratings,
        readOnly : true,
        precision : 0.5
    };
  
    return (
        <>
          <Link  className="ProductCard" to={`/product/${product._id}`}>
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="ProductImg"
                />
                <p style={{fontFamily:"Urbanist"}}className="productName">{product.name}</p>
                <div>
                {/* <Rating {...options} /> */}
                  <span style={{fontFamily:"Urbanist"}}>({product.numOfReviews} Reviews)</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="offerPriceBox">
                    <h1
                      className="discountPrice"
                      style={{
                        paddingLeft: "2.5vmax",
                        fontSize: ".9vmax",
                        paddingBottom: "0",
                        fontFamily: 'Urbanist'
                      }}
                    >55
                    </h1>
                    <span  style={{fontFamily:"Urbanist"}}className="p__Price">{`Rs ${product.price}`}</span>
                  </div>
                </div>
              </Link>
            </>
      );
}

export default ProductCard
