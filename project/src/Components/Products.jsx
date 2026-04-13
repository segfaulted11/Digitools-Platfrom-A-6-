import { Check } from 'lucide-react';

const Products = ({ arrayOfObjects, addToCart, cartItems }) => {

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {
          arrayOfObjects.map(eachObj => {

            // check if item is already in cart
            const isInCart = cartItems.some(item => item.id === eachObj.id);

            return (
              <div key={eachObj.id}>
                <div className="card w-96 bg-gray-100 shadow-sm">

                  <div className="flex justify-between">
                    {eachObj.icon}

                    <div className={`badge ${
                      eachObj.tagType === "popular"
                        ? "badge-primary"
                        : eachObj.tagType === "best seller"
                        ? "badge-warning"
                        : "badge-success"
                    }`}>
                      {eachObj.tagType}
                    </div>
                  </div>

                  <h1 className="text-xl font-bold mb-3">{eachObj.name}</h1>

                  <p className="text-gray-600 mb-3">{eachObj.description}</p>

                  <p className="fontbold text-xl mb-3">
                    {eachObj.price}$<span className="text-gray-400 text-sm">/Mo</span>
                  </p>

                  {
                    eachObj.features.map((el, index) => (
                      <li key={index} className="list-none flex gap-2 text-gray-600">
                        <Check />
                        {el}
                      </li>
                    ))
                  }

                  {/* BUY BUTTON */}
                  <button
                    className={`btn ${isInCart ? "bg-green-500" : "bg-purple-700"} rounded-full text-white`}
                    onClick={() => addToCart(eachObj)} 
                  >
                    {isInCart ? "Added To Cart" : "Buy Now"}
                  </button>

                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
};

export default Products;