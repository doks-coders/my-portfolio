import React from 'react'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'

const TimelineComponent = ({title,date,workingPlace,location,whatyoudid,about}) => {
  return (
    <Flex w="100%">
    <Flex flexBasis={'7%'}  alignItems={'center'} flexDirection="column">
     <Box borderWidth={2} borderColor="blue.500"  mt="1"  h="15px" w="15px" borderRadius={'full'} ></Box>
<Box h="100%" w="2px" bg="blue.500" ></Box>
   </Flex>

   <Flex flexBasis={'93%'} ml="2" flexDirection="column"> 
     <Text fontWeight={'bold'} fontSize={["sm",'xl']} color="blue.500" mt="0">{title.toUpperCase()}</Text>
     <Box my="2">
     <Box as="span" px="2" bg="blackAlpha.50" fontWeight={'bold'} py="1">{date}</Box>
     </Box>
    <Text mb="3" fontStyle={'italic'}>
    {workingPlace}, {location}
    </Text>

    <Box pl={["0","0","0","4"]}>
      <Text>{about}</Text>
    </Box>
    <Box pb="10" pl="4">
    <ul>
        {
            whatyoudid && whatyoudid.map((val,index)=>(
                <li style={{marginBottom:'5px'}} key={index}>
            {val}
             </li>
            ))
        }
  </ul>
    </Box>


   </Flex>
<Flex>

</Flex>
    </Flex>

  )
}

export default TimelineComponent