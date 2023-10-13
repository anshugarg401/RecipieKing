import * as React from 'react';

import Carousel from 'react-material-ui-carousel'
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Sidebar from '../Sidebar/Sidebar';
const data = [
  {
    title: 'Italian',
  },
  {
    title: 'Mexican ',
  },
  {
    title: 'Chinese',
  },
  {
    title: 'French  ',
  },
  {
    title: 'Japanese',
  },
  {
    title: 'Greek ',
  },
  {
    title: 'Thai',
  },
  {
    title: 'Lebanese',
  },
  {
    title: 'Brazilian',
  },
  {
    title: 'Korean ',
  },
  {
    title: 'Moroccan ',
  },
  {
    title: 'Turkish ',
  },
  {
    title: 'Vietnamese  ',
  },
  {
    title: 'Russian ',
  },
  {
    title: 'Russian ',
  },

];

var items = [
                          {
                              name: "Random Name #1",
                              description: "Probably the most random thing you have ever seen!"
                          },
                          {
                              name: "Random Name #2",
                              description: "Hello World!"
                          }
                      ]

function Item(props)
{
    return (
        <Paper>
         <a href="/" className="group relative block">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">SIMPLE RECIPES MADE FOR YOU</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
      dicta impedit aperiam ipsum!
    </p>

    <span
      className="mt-3 inline-block bg-red-500 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      WATCH NOW
    </span>
  </div>
</a>
        </Paper>
    )
}

export default function CarouselRatio() {
  return (
    <>
  
    

    <Box
      sx={{
        display: 'flex',
        gap: 1,
        mt:1,
        py: 1,
        overflow: 'auto',
        width: "full",
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
    

     
      {data.map((item) => (
        <Card orientation="horizontal" size="sm" key={item.title} variant="outlined" sx={{borderColor:"red"}}>
      
          <Box sx={{ whiteSpace: 'nowrap', mx: 1}}>
            <Typography level="title-md">{item.title}</Typography>
            {/* <Typography level="body-sm">{item.description}</Typography> */}
          </Box>
        </Card>
      ))}


      
    </Box>
    <Box>
    <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
       <Carousel className='mt-6'
     
     >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
  </Grid>
  <Grid item xs={6} md={4}>
  
      <Sidebar/>
    
  </Grid>

</Grid>


    </Box>
    </>


  );
}
