import { ShoppingCart } from "lucide-react";

const Carts = () => {
    return (
        <div>
            <div className="mx-auto container bg-gray-300 py-10">
<h1 className="font-bold text-xl">Your Carts</h1>
<div className="flex flex-col gap-5 items-center justify-center">
    <ShoppingCart size={70} color="gray"/>
    <p>Your Cart is Empty</p>
</div>
            </div>
        </div>
    );
};

export default Carts;