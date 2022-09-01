import React from 'react'
import { useState } from 'react'
import TitleHeader from './TitleHeader'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'

const About = ({inputRef}) => {
  return (
    <Container data-aos="fade-up" ref={inputRef} maxW="container.xl">
   <TitleHeader title={'About'}/>
    
          
        <Flex mt="10" flexDir={['column','column','column','row']}>
          <Flex justifyContent="center" mt="20px" flexBasis="30%" mr="4">
            <Image w="100%" maxH={'500px'} maxW="500px" objectFit="cover" src="Images/zoom2.png"></Image>
          </Flex>
          <Box mt="20px" flexBasis="70%">
            <Text fontSize={["lg",'xl','3xl']} color="blackAlpha.700" fontWeight="bold">
    SEO Expert {'&'} Web Developer.</Text>
    
    <Text  fontStyle={'italic'}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, reprehenderit similique exercitationem quod, quisquam 
    </Text>
    
    
    <Box w="100%" my="15px"> 
    <DataTable/>
    </Box>
    
    
    <Text  >
     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla temporibus eum, nam earum ratione neque alias 
     quae corporis vero quaerat provident, ipsam repellendus! Obcaecati nemo tempora illo nulla. Blanditiis, dolores.
    </Text>
          </Box>
        </Flex>
            </Container>
  )
}

export default About



const DataTable = ()=>{
    let details = [
      {key:'Alias',value:'Doks Coders'},
      {key:'Birthday',value:'1 May, 1999'},
    {key:'Age',value:'23'},
  
    {key:'Degree',value:'BSc'},
    {key:'Phone',value:'+234902653315'},
    {key:'Email',value:'guonnie@gmail.com'},
    {key:'City',value:'Port Harcourt, Nigeria'},
    {key:'Freelance',value:'Available'},]
    return (
      <>
      <Grid  w="100%" templateColumns={[
                            "repeat(1,1fr)",
                            "repeat(1,1fr)",
                            "repeat(2,1fr)",
                      
                          ]} gap="4">
                            {
                              details.map(val=>(
                                <HStack mb="5px">
                                <Box color="blue.300" className="pi pi-chevron-right"></Box>
                                <Text fontWeight="bold" mr="3">{val.key}:</Text>
                                <Text >{val.value}</Text>
                                </HStack>
                              ))
                            }
                          
                          
                             
                            
                          </Grid>
      
      </>
    )
  }