import React from "react";
import Product from "./Product";
import "../css/home.css";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://i.ytimg.com/vi/nMjcTNVIhNw/maxresdefault.jpg"
          alt=""
          srcSet=""
        />
        <div className="home_row">
          <Product
            id="1"
            key="2344"
            title="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)"
            price={52}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={4}
          />
          <Product
            id="2"
            key="234g"
            title="Mobile"
            price={22}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            key="2349"
            id="3"
            title="Mobile"
            price={22}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={3}
          />
          <Product
            key="234ds"
            id="4"
            title="Mobile"
            price={22}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={3}
          />
          <Product
            key="23f4"
            id="5"
            title="Mobile"
            price={22}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={3}
          />
        </div>
        <div className="home_row">
          {/* product1 */}
          <Product
            key="234"
            id="6"
            title="Mobile"
            price={22}
            image="https://static.digit.in/default/cc533e2c683b95c061080240c957c3f76397eca5.jpeg?tr=n-product_detail_leader_thumb"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
