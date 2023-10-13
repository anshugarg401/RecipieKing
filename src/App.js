
import './App.css';
import CarouselRatio from "../src/components/Breadcrums/Breadcrum"
import Sidebar from './components/Sidebar/Sidebar';
import Postsection from "./util/Postsection"
import SideCrousel from './components/SideCrousel/SideCrousel';
import Infinitescroll from './components/infinitescroll/infinitescroll';
import Box from '@mui/material/Box';
function App() {
  return (
<>

<Box paddingX={10} paddingTop={3}>


<div class="flex flex-row items-stretch flex-nowwrap space-x-4 ">

<Box width={1100} sx={{overflowY:"scroll", minHeight:"330"}}>

  <div><Infinitescroll/></div>
  



</Box>
<div className=' content-center'><SideCrousel/></div>

</div>

  
</Box>
    {/* <div
      class="grid grid-cols-2 gap-x-4 overflow-y-auto"
    >
<div className = "col-span-1 ">

<Infinitescroll/>
</div>

      

<div className = "col-span-1 ">
<SideCrousel/>
</div>

      
        
    
    </div> */}

  


</>
  );
}

export default App;