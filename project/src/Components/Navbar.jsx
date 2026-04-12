import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="container mx-autobg-gray-400 flex justify-around py-5">

<h1 className="text-3xl font-bold text-purple-700">DigiTools</h1>

<ul className='flex gap-3 items-center'>
    <li><a href='#'>Products</a></li>
    <li><a href='#'>Features</a></li>
    <li><a href='#'>Pricing</a></li>
    <li><a href='#'>Testimonials</a></li>
    <li><a href='#'>FAQ</a></li>
</ul>

<div className='flex gap-3'>
<div className='flex gap-2 items-center'><ShoppingCart />
Login
</div>
    <button className="btn bg-purple-700 text-white rounded-full">Get Started</button>
</div>

</div>

    );
};

export default Navbar;