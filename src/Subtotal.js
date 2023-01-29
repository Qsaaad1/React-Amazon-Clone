import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
           
          </>
        )}
        value={getCartTotal(cart)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button className="LkaButton">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
