import * as React from 'react';

import Carousel from 'react-material-ui-carousel'
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { Paper } from '@mui/material'
const data = [
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: '4.21M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '4.74M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountaivn view',
    description: '3.98M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'vMountain vievw',
    description: '3.98M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountavin vievw',
    description: '3.98M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mouvntain vievw',
    description: '3.98M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Movuntain view',
    description: '3.98M views',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountavin view',
    description: '3.98M views',
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
      src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
    <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
      dicta impedit aperiam ipsum!
    </p>

    <span
      className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
    >
      Shop Now
    </span>
  </div>
</a>
        </Paper>
    )
}

export default function CarouselRatio() {
  return (
    <div
    className='container '>

    <Box
      sx={{
        display: 'flex',
        gap: 1,
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
        <Card orientation="horizontal" size="sm" key={item.title} variant="outlined">
      
          <Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
            <Typography level="title-md">{item.title}</Typography>
            {/* <Typography level="body-sm">{item.description}</Typography> */}
          </Box>
        </Card>
      ))}


      
    </Box>
    <Box>
      <Carousel
     
     >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    </Box>
    </div>

  );
}
