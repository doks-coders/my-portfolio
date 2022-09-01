import React from 'react'
import TitleHeader from './TitleHeader'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
const Facts = ({inputRef}) => {
    let facts = [{number:'232',key:'Happy Clients',icon:'pi pi-users'},
    {number:'55',key:'Projects',icon:'pi pi-chart-line'},
    {number:'10',key:'Websites',icon:'pi pi-dollar'},
    {number:'4',key:'Awards',icon:'pi pi-moon'},]
    
  return (
    <Container data-aos="fade-up" ref={inputRef} mt="10" maxW="container.xl">
    <TitleHeader  title="Facts"/>
  
    <Grid mt="5" w="100%" templateColumns={[
       "repeat(1,1fr)",
       "repeat(1,1fr)",
       "repeat(4,1fr)",
                          
                              ]} gap="4">
                                {

facts.map((val)=>(
<VStack mt="10" spacing="1">
                                <Box className={val.icon} bg="blue.500" color="white" fontSize="md" borderRadius={'full'} p="4"></Box>
                                <Text fontSize="4xl" fontWeight="bold">{val.number}</Text>
                                <Text>{val.key}</Text>
                              </VStack>
))
                                }
                              
                            
    
                              </Grid>
          </Container>
  )
}

export default Facts