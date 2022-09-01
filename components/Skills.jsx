import React from 'react'
import TitleHeader from './TitleHeader'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
import Bar from './Bar'
const Skills = ({inputRef}) => {
  return (
    <Container data-aos="fade-up" ref={inputRef} maxW="container.xl" mt="10">
        <TitleHeader title={'Skills'}/>
      

          
    <Grid mt="10" w="100%" templateColumns={[
       "repeat(1,1fr)",
       "repeat(1,1fr)",
       "repeat(2,1fr)",
                          
                              ]} gap="4">
              <Bar percentage={80} title="Reactjs"/>
              <Bar percentage={75} title="Mongodb"/>
              <Bar percentage={70} title="Express"/>
              <Bar percentage={80} title="Nodejs"/>

              <Bar percentage={70} title="Nextjs"/>

              <Bar percentage={80} title="Chakra UI"/>
    
                              </Grid>
    </Container>
  )
}

export default Skills