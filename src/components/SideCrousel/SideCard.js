import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocalDiningIcon from '@mui/icons-material/LocalDining';


export default function GradientCover() {
  return (
    <Card sx={{ minHeight: '200px', width: 330 }}>
      <CardCover>
<img src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 50px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
        Chimichurri Shrimp with Tomatoes
        </Typography>
        <Typography
          startDecorator={<LocalDiningIcon />}
          textColor="neutral.300"
        >
         Vietnamese
        </Typography>
      </CardContent>
    </Card>
  );
}
