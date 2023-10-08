
import './App.css';
import CarouselRatio from "../src/components/Breadcrums/Breadcrum"
import Sidebar from './components/Sidebar/Sidebar';
import Postsection from "./util/Postsection"
function App() {
  return (
<>

<section>
  <div class=" pl-8 py-16">
    <div
      class="grid grid-cols-7 gap-x-4 overflow-y-auto"
    >
<div className = "col-span-5 ">
<CarouselRatio />
<Postsection/>

</div>

      

<div className = "col-span-2 ">
<Sidebar/>
</div>

      
        
    
    </div>
  </div>
  
</section>

</>
  );
}

export default App;