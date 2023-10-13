import * as React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AspectRatio from '@mui/joy/AspectRatio';

const data = [
  {
    src: 'https://www.chefspencil.com/wp-content/uploads/Guy-Fieri.jpg.webp',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://www.chefspencil.com/wp-content/uploads/Jamie-Oliver.jpg.webp',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://www.chefspencil.com/wp-content/uploads/Giada-De-Laurentiis.jpg.webp',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
  {
    src: 'https://www.chefspencil.com/wp-content/uploads/Rachael-Ray-scaled.jpg.webp',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

function Media() {
  

  return (
    <Grid container wrap="nowrap">
      { data.map((item, index) => (
        <Box key={index} sx={{ width: 210, height:200, marginRight: 0.5, my: 2 }}>
          
          <AspectRatio
                 ratio="1"
                 maxHeight={80}
                 
               
                sx={{ flex: 1, maxWidth: 80,  borderRadius: '100%',
            paddingY:2 }}
              >
                <img
                  src={item.src}
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
          

          
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
           
            </Box>
          
        </Box>
      ))}
    </Grid>
  );
}



export default function YouTube() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}