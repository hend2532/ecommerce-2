import React from 'react';
import ReactDOM from 'react-dom'; 
import Product from './Product';
import { CartProvider } from './CartContext';
// App Component
export  const App = () => {
  return (
    <CartProvider>
      <Product/>
    </CartProvider>
  );
};
// Get Root Element
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(<App />);
