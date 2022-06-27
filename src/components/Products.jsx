import { useState } from "react";
import "./Products.css";

const Products = (props) => {
  const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState({}); //{"id": 1}

  const updateCount = (productId, inc, dec) => {
    if (itemCount[productId]) {
      let countObj = inc ? itemCount[productId] + 1 : itemCount[productId] - 1;
      setItemCount({ ...itemCount, [productId]:  countObj});
    } else {
      if (!dec) {
        setItemCount({ ...itemCount, [productId]: 1 });
      }
    }
  };

//   {
//       "dddf-deddfd-erfd": 1,
//       "asdasd-erdsd-3ewe": 5,
//       "dsdsdd-eww-wewe": 4
//   }

//updateCarTotal
//fromItemCOunt objec get total

  return (
    <div className="products-wrapper">
      {props.products.map((product) => {
        return (
          <div className="product-details" key={product.id}>
            <h4>{product.title}</h4>
            <img src={product.image} width="200px" height="250px" />
            <div className="cart-details">
              <div>
                <p>Price: {product.price}</p>
                <p>Rating: {product.rating.rate}</p>
              </div>
              <div>
                <button
                  className="cart-button"
                  onClick={() =>
                    updateCount(product.id + product.title, false, true)
                  }
                >
                  -
                </button>
                <button className="cart-button">
                  Add: {itemCount[product.id + product.title] || 0}
                </button>
                <button
                  className="cart-button"
                  onClick={() =>
                    updateCount(product.id + product.title, true, false)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
