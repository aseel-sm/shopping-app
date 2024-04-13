import React, { useReducer } from "react";
import "../css/checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../context/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB$@3492668_.jpg"
          className="checkout_ad"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping basket</h2>
          {/* <CheckoutProduct
            id={1}
            title="5656456"
            rating="5"
            price={56}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1295817_1512524_IN_in_renewed_mobiles_text_revision_adapt_1216785_in_en_3590396_1500x300_en_IN.jpg"
          /> */}

          {basket?.map((item) => (
            // console.log(item);
            <CheckoutProduct
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
