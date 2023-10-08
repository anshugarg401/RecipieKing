import React from "react";

import SideCard from "./SideCard";

var items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

function Item(props) {
  return <SideCard />;
}

const SideCrousel = () => {
  return (
    <div>
      <section>
        
      <h1 className="ml-10 mb-2">Recipe Videos</h1>
      
        <div className=" flex flex-col content-center items-center justify-center gap-2">
          
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </div>
    
      </section>
    </div>
  );
};

export default SideCrousel;
