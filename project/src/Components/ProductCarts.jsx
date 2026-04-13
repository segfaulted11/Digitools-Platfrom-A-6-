import { use, useState } from "react";
import Products from "./Products";
import Carts from "./Carts";

const ProductCarts = ({ProductCartsData}) => {
    let arrayOfObjects = use(ProductCartsData)

    //state 
    const [selected, setSelected] = useState(true);
    function handleSelected(){
        setSelected(!selected)
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-5xl mb-3">Premium Digital Tools</h1>
            <p className="text-center text-gray-700">Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
            <div className="flex justify-center my-10 gap-3">

            <button className={`btn ${selected ? "bg-purple-700 text-white" : "btn-soft"}   rounded-full`} onClick={handleSelected}>Products</button>

            <button className={`btn ${selected ? "btn-soft" : "bg-purple-700 text-white"}  rounded-full`} onClick={handleSelected}>Carts</button>
            </div>

{selected ? <Products arrayOfObjects={arrayOfObjects}></Products> : <Carts/>}



        </div>
    );
};

export default ProductCarts;