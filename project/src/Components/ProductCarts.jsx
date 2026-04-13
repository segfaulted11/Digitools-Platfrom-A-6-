import { use, useState } from "react";
import Products from "./Products";
import Carts from "./Carts";

const ProductCarts = ({ ProductCartsData }) => {
  let arrayOfObjects = use(ProductCartsData);

  // state to toggle between products & carts
  const [selected, setSelected] = useState("products");

  //  state to store cart items
  const [cartItems, setCartItems] = useState([]);

  // ADD TO CART FUNCTION
  const addToCart = (product) => {
    // prevent duplicate items (optional but nice)
    const alreadyExists = cartItems.find(item => item.id === product.id);

    if (!alreadyExists) {
      // create new array (IMPORTANT: never mutate state directly)
      setCartItems([...cartItems, product]);
    }
  };

  //  REMOVE FROM CART FUNCTION
  const removeFromCart = (id) => {
    // keep everything except the clicked item
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-5xl mb-3">
        Premium Digital Tools
      </h1>
      <p className="text-center text-gray-700">
        Choose from our curated collection of premium digital products designed
        <br></br>to boost your productivity and creativity.
      </p>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-center my-10 gap-3">
        <button
          className={`btn ${selected === "products" ? "bg-purple-700 text-white" : "btn-soft"} rounded-full`}
          onClick={() => setSelected("products")}
        >
          Products
        </button>

        <button
          className={`btn ${selected === "carts" ? "bg-purple-700 text-white" : "btn-soft"} rounded-full`}
          onClick={() => setSelected("carts")}
        >
          Carts
        </button>
      </div>

      {/* CONDITIONAL RENDERING */}
      {
        selected === "products" 
        ? <Products 
            arrayOfObjects={arrayOfObjects} 
            addToCart={addToCart} 
            cartItems={cartItems} // used to check if already added
          />
        : <Carts 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
          />
      }
    </div>
  );
};

export default ProductCarts;