import React, { useState,useCallback,useRef } from 'react';
import useBookhook from '../../util/useBookhook';
import Card from "../Post/Post"
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';


export default function Infinitescroll(){
    const [query,setquery] = useState('');
    const [pageNumber,setpageNumber] = useState(1);

    const {loading,Recipies,error,hasMore} = useBookhook(query,pageNumber);

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            setpageNumber(pageNumber => pageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    }, [loading, hasMore])
  
  

    function handleSearch(e){
        setquery(e.target.value);
        setpageNumber(pageNumber);
        console.log(Recipies)

    }
    
    
    return <>
            <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <input type="text" onChange={handleSearch} value={query} /> 
              
        <Stack spacing={2} sx={{  pt: 2, minHeight: 0  ,p : "2px"}}>

<Stack spacing={2} >
  THE CONTENT API IS CLOSED
  INFINITESCROLL
       
        <Box
          component="main"
          sx={{
            overflowAnchor:"auto",
            gap:2,
            height: 'calc(100vh - 50px)', // 55px is the height of the NavBar
            display: 'grid',
            gridTemplateColumns: { xs: 'auto', md: '48% 48%' },
            gridTemplateRows: 'auto 1fr auto',
            py : "8px"
            
          }}
          
        >
     
   
    {Recipies.map((recipie, index) => {
        if (Recipies.length === index + 1) {
          return <div ref={lastBookElementRef}><Card  key={recipie[0]} title= {recipie[1]} image={recipie[3]} discription={recipie[4]} slug = {recipie[2]}/></div> 
        } else {
          return <Card  key={recipie[0]} title= {recipie[1]} image={recipie[3]} description={recipie[4]} slug = {recipie[2]}/>
        }
      })}


    {/* {
       
        Recipies.map( recipie => {
            
            return <Card ref={lastBookElementRef} key={recipie[0]} title= {recipie[1]} image={recipie[3]} discription={recipie[4]} slug = {recipie[2]}/>
     } )
    } */}
   
    <div>{loading && "Loading....."}</div>
    <div>{error && "Error...."}</div>
    </Box>
        </Stack>
          </Stack>
      </CssVarsProvider>
   
    </>
}


