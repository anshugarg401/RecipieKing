import React from 'react';
import SideCrousel from '../SideCrousel/SideCrousel';
import food from "../../images/dinner.png"
import ProfileCarousel from '../ProfileCarousel/ProfileCarousel';
const Sidebar = () => {
    return <>
    
 
        <div className="group  block h-60 my-5 mt-0 sticky">
  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

  <div
    className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
  >
    <div
      className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8"
    >
        <img src={food} height={60} width={70} alt="" />
        
     

      <h2 className="mt-4 text-xl font-medium sm:text-2xl">Want more recipes ?</h2>
    </div>

    <div
      className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
    >
      <h3 className="mt-3 text-xl font-medium sm:text-2xl">SUBSCRIBE NOW</h3>

      <p className="mt-2 font-bold">
      Liked our recipe collection?</p>

      <p className="my-6  text-base">
      Subscribe to receive easy recipes in your inbox
       
      </p>

      <a
  class="group relative inline-block focus:outline-none focus:ring"
  href="/download"
>
  <span
    class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-red-400 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75"
  >
    Download
  </span>
</a>



    </div>
  </div>
</div>
        
            
<SideCrousel/>
    <ProfileCarousel/>

  

</>
}



export default Sidebar;