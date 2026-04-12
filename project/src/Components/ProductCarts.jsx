import { use } from "react";
import { Check } from 'lucide-react';


const ProductCarts = ({ProductCartsData}) => {
    let arrayOfObjects = use(ProductCartsData)


    return (
        <div className="container mx-auto">
            <h1 className="text-center font-bold text-5xl mb-3">Premium Digital Tools</h1>
            <p className="text-center text-gray-700">Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
            <button className="btn bg-purple-700 text-white rounded-full">Products</button>
            <button className="btn btn-soft rounded-full">Carts</button>

<div className="grid grid-cols-3 gap-5">
{
    arrayOfObjects.map(eachObj => <div key={eachObj.id}>

   <div className="card w-96 bg-gray-100  shadow-sm">


   <div className="flex justify-between">

   {eachObj.icon}

  <div className={`badge ${ eachObj.tagType==="popular" ? "badge-primary" : eachObj.tagType==="best seller" ? "badge-warning" : "badge-success"}`}>{eachObj.tagType}</div>

   </div>

<h1 className="text-xl font-bold mb-3">{eachObj.name}</h1>

<p className="text-gray-600 mb-3">{eachObj.description}</p>

<p className="fontbold text-xl mb-3">{eachObj.price}$<span className="text-gray-400 text-sm">/Mo</span></p>

{
    eachObj.features.map(el => <li className="list-none flex gap-2 text-gray-600">
       <Check />
        {el}
        </li>)
}

<button className="btn bg-purple-700 rounded-full text-white">Buy Now</button>

</div>

    </div>
)
}
</div>


        </div>
    );
};

export default ProductCarts;