import { Play } from 'lucide-react';
import { CircleDotDashed } from 'lucide-react';
import bannerImg from "../assets/banner.png"

const Banner = () => {
    return (
        <>
        <div className="container mx-auto flex">

            <div className="w-6/10 mt-40 ml-20">

            <div className="badge bg-purple-600 text-white border-purple-600 py-4 mb-3">
                  <CircleDotDashed />
                New : AI-Powered Tools Available
        </div>
                <h1 className='font-bold text-5xl mb-3'>
                    Supercharge Your <br></br>Digital Workflow
                </h1>
                <p className='mb-3'>Access premium AI tools, design assets, templates, and productivity <br></br>
                software—all in one place. Start creating faster today.</p>
                <button className='btn bg-purple-700 text-white rounded-full mr-3'>Explore Products</button>
                <button className='btn btn-outline border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full'>
               <Play />
                Watch Demo
               </button>
            </div>
            <div className="w-4/10">
               <img src={bannerImg} className='' alt="" />
            </div>
            </div>

<div className='bg-purple-600 container mx-auto flex justify-around text-white py-10 mb-20'>

        <div>
        <h1 className='text-5xl font-bold'>50k+</h1>
        <p>Active Users</p>
    </div>
    <div>
      <h1 className='text-5xl font-bold'>200+</h1>
        <p>Premium Tools</p>
    </div>
    <div>
      <h1 className='text-5xl font-bold'>4.9</h1>
        <p>Rating</p>
    </div>
</div>


        </>
    );
};

export default Banner;