import { User } from "lucide-react";
import { Package } from 'lucide-react';
import { Rocket } from 'lucide-react';


const GetStarted = () => {
    return (
        <div className="container mx-auto mt-15">
            <h2 className="font-bold text-4xl text-center mb-4">Get Started In 3 Steps</h2>
            <p className="text-center mb-5">Start Using Premium digital tools in minutes, not hours.</p>


<div className="grid grid-cols-3 gap-7 mb-15">
    <div className="card bg-gray-100 shadow-sm flex items-center justify-center py-15">
        <User size={100} color="purple"></User>
        <h1 className="font-bold text-2xl">Create Account</h1>
        <p>Sign Up for free in seconds. No credit card <br></br>required to get started.</p>
    </div>
    <div className="card bg-gray-100  shadow-sm flex items-center justify-center py-15">
        <Package size={100} color="purple"></Package>
        <h1 className="font-bold text-2xl">Choose Products</h1>
        <p>Browse our catalog and select the tools <br></br> that fit your needs.</p>
    </div>
    <div className="card bg-gray-100  shadow-sm flex items-center justify-center py-15">
        <Rocket size={100} color="purple"></Rocket>
        <h1 className="font-bold text-2xl">Start Creating</h1>
        <p>Download and start using your premium <br></br> tools immediately.</p>
    </div>



</div>

        </div>
    );
};

export default GetStarted;