import React from 'react'
import TitleHeader from './TitleHeader'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
import OverLayElement from './OverLayElement'
const Portfolio = ({inputRef}) => {
  return (
    <>

<Container data-aos="fade-up" ref={inputRef}  maxW="container.xl" mt="10">

      <TitleHeader  title="Projects" />

<Grid mt="5" w="100%" templateColumns={[
       "repeat(1,1fr)",
       "repeat(1,1fr)",
       "repeat(2,1fr)",
       "repeat(3,1fr)",
                          
                              ]} gap="4">
                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/img (4).png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Shopping Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/img (2).png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Booking Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/img (1).png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Company Website'}/>
                            </Box>
                        </Box>

                        <Box w="100%" className="layoutFade" h="300px" position="relative" >
                            <Image h="inherit" w="inherit" objectFit="cover" src="Images/img (9).png"></Image>
                            <Box w="100%"  className="fadeElement">
                            <OverLayElement title={'Portfolio Website'}/>
                            </Box>
                            </Box>
                            
    
                              </Grid>

    </Container>
    </>
    
  )
}

export default Portfolio