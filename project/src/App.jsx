import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import ProductCarts from './Components/ProductCarts';
import GetStarted from './Components/GetStarted';


let fetchProductCartsData = fetch("/ProductCartsData.json").then(res => res.json());

function App() {

  return (
    <>

<Navbar/>

<Banner/>

<Suspense fallback={"data is loading...."}>
<ProductCarts ProductCartsData={fetchProductCartsData}/>
</Suspense>

<GetStarted/>

<Pricing/>

<Footer/>
    </>
  )
}

export default App;