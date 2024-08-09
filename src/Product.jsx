import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useCart } from "./CartContext";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [showOrder,setShowOrder]=useState(false);
  const {removeFromCart ,data,removeAll} =useCart();
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  const handelRemoveAll=()=>{
    removeAll();
    setShowOrder(true);
  }
  return (
    <div className="parent">
   <div className="products">
       <h1>Desserts</h1>
     <div className="product">
           {product.map((item) => {
             return <Card key={item.id} name={item.name} category={item.category} price ={item.price} img={item.image.desktop}/>; // passing item as a prop to Card component
           })}
     </div>
   </div>
   <div className="cart">
           <h2>Your Cart ({data.length})</h2>
           {
            data.length >0? (
              <div>
                {data.map((item,index) => (
                  <div className="removeItem" key={item.id}>   
                    <h3 className="cardName">{item.name}</h3>
                    <p className="cardPrice">${item.price} </p>
                    <button className="remove" onClick={() => removeFromCart(item)}>X</button>
                  </div>
                ))}
                <div>
                  <h3 className="total">Total &nbsp;: <span>&nbsp; $ {data.reduce((acc, curr) => acc + curr.price, 0)}</span> </h3>
                  <button  className="confirmOrder" onClick={() => handelRemoveAll()}>Confirm Order</button>
                </div>
              </div>
            ):(
           <div className="cartProduct">
            <img src="./assets/images/illustration-empty-cart.svg" alt="empty cart" />
            <p>Your added items will appear here </p>
           </div>
            )
           }
   </div>
    </div>
  );
};

export default Product;
