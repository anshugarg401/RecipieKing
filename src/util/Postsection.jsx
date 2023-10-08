import React from 'react';
import RentalCard from "../components/Post/Post"
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
const Postsection = () => {
    return(
        <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
              
        <Stack spacing={2} sx={{  pt: 2, minHeight: 0  ,p : "2px"}}>

<Stack spacing={2} >
       
        <Box
          component="main"
          sx={{
            gap:2,
            height: 'calc(100vh - 50px)', // 55px is the height of the NavBar
            display: 'grid',
            gridTemplateColumns: { xs: 'auto', md: '48% 48%' },
            gridTemplateRows: 'auto 1fr auto',
            py : "8px"
            
          }}
          
        >
    

              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="Entire apartment rental in Collingwood"
                rareFind
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="Entire apartment rental in Collingwood"
                rareFind
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="Entire apartment rental in Collingwood"
                rareFind
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="Entire apartment rental in Collingwood"
                rareFind
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="Entire apartment rental in Collingwood"
                rareFind
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="Designer NY style loft"
                category="Entire loft in central business district"
                liked
                image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="5 minute walk from University of Melbourne"
                category="Entire rental unit in Carlton"
                image="https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="Magnificent apartment next to public transport"
                category="Entire apartment rental in Collingwood"
                image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="Next to shoppng mall and public transport"
                category="Entire apartment rental in Collingwood"
                image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="Endless ocean view"
                category="A private room in a shared apartment in Docklands"
                image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400"
              />
              <RentalCard
                title="A Stylish Apt, 5 min walk to Queen Victoria Market"
                category="one bedroom apartment in Collingwood"
                image="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=400"
              />
     
  

        </Box>
        </Stack>
          </Stack>
      </CssVarsProvider>
    )

      
    


    
       
}



export default Postsection;