import React, { useEffect, useState } from 'react' 
import   './style.css';
import { useCart } from './CartContext';

const Card = (props) => {
  let [count,setCount]=useState(1)
  const {addToCart,data}=useCart();
  const [add,setAdd]=useState(true)
  
  useEffect(()=>{
    const itemInCart=data.some(item=>item.name===props.name && item.category === props.category);
    setAdd(!itemInCart);

  },[data,props.name,props.category])
  let quantity=count;
  let handleAddToCart=()=>{
    addToCart({name:props.name,price:props.price, category: props.category , quantity: count  });
    setAdd(false);
  }
  
  let increment=()=>{
    setCount(prev=>prev+1);
  }
  let decrement=()=>{
    setCount(prev=>prev>0 ? prev-1 : 0);
  }
  return (
    <div className='card'>
   <div className='image'>
     <img className='cardImg' src={props.img} alt="" />
     { add ? <div>
     <button onClick={handleAddToCart} className='addToCart'>
      <img src="./assets/images/icon-add-to-cart.svg" alt="" />
      Add to Cart
     </button>
     </div>
     :
    //   <div className='increment'>
    //   <img onClick={decrement} src="./assets/images/icon-decrement-quantity.svg" alt="" />
    //     {count}
    //   <img onClick={increment} src="./assets/images/icon-increment-quantity.svg" alt="" />
    //  </div>
    null
     }
   </div>
    <p className='cardCategory'> {props.category}</p>
    <h2 className='cardName'> {props.name}</h2>
    <h3 className='cardPrice'> $ {props.price} </h3>
    
    </div>
  )
}
export default Card