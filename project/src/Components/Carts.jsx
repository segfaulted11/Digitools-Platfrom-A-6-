import { ShoppingCart } from "lucide-react";

const Carts =  ({ cartItems, removeFromCart, clearCart }) => {

  // calculate total price of all items in cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price); // ensure price is treated as a number
  }, 0);

  return (
    <div className="mx-auto container bg-gray-300 py-10">
      <h1 className="font-bold text-xl mb-5">Your Carts</h1>

      {
        //  IF CART IS EMPTY → show empty UI
        cartItems.length === 0 ? (
          <div className="flex flex-col gap-5 items-center justify-center">
            <ShoppingCart size={70} color="gray" />
            <p>Your Cart is Empty</p>
          </div>
        ) : (

          //  IF CART HAS ITEMS → show cart items + total
          <div className="flex flex-col gap-5">

            {/*  LIST OF CART ITEMS */}
            {
              cartItems.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white p-5 rounded shadow flex justify-between items-center"
                >

                  {/* product info */}
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p>{item.price}$ /Mo</p>
                  </div>

                  {/*  REMOVE BUTTON */}
                  <button
                    className="btn bg-red-500 text-white"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>
              ))
            }

            {/*  TOTAL PRICE SECTION */}
            <div className="mt-5 text-right font-bold text-xl">
              Total: {totalPrice}$
            </div>

            <button 
            className="btn bg-purple-700 text-white"
            onClick={clearCart}
            >
            Proceed to Checkout
            </button>
          </div>
        )
      }
    </div>
  );
};

export default Carts;