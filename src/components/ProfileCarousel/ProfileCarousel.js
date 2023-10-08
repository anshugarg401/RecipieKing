import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import arrowb from "../../images/arrow_back_ios_black_24dp.svg"
import arrowf from "../../images/arrow_forward_ios_black_24dp.svg"
import YouTube from "./ProfileCarouselcard"
import YouTube1 from "./ProfileCarouselcard1"

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

// function Item(props)
// {
// return (
// //     <Paper>
// //     <a href="#" className="group relative block">
// // <div className="relative h-[200px]">
// // <img
// //  src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
// //  alt=""
// //  className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
// // />


// // </div>

// // <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
// // <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

// // <p className="mt-1.5 max-w-[40ch] text-xs text-white">
// //  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
// //  dicta impedit aperiam ipsum!
// // </p>

// // <span
// //  className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
// // >
// //  Shop Now
// // </span>
// // </div>
// // </a>
// //    </Paper>

// )
// }


const ProfileCarousel = () => {
  return (
    <section className="">
   {/* <Carousel
      animation="slide"
      navButtonsAlwaysVisible 
      autoPlay={false}
      indicators = {false}
     >
     
             <Item  />
      
        </Carousel> */}
        <YouTube/>
        <YouTube1/>

    </section>
  );
};

export default ProfileCarousel;
