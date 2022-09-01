import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, VStack, HStack, Box, Text,Textarea,Input, Heading,Button, Container, Flex, Image, Grid } from '@chakra-ui/react'
import TitleHeader from './TitleHeader'

const Footer = () => {
  return (
    <VStack spacing="4" py="4">
        <Text fontSize={["md","lg","2xl"]} fontWeight="semibold">Odokuma Ogheneguono</Text>
        <Text fontStyle="italic" fontSize={["11","sm","md"]}  textAlign={'center'}  maxW="900px">
             fugiat explicabo obcaecati esse sint sequi quae cumque minima, cupiditate ex accusantium ratione, impedit perferendis odio. Temporibus.
        </Text>

        <HStack>
            <Box  borderRadius={50} color="white" className="pi pi-instagram" p="4" bg="blue.500"> </Box>
            <Box  borderRadius={50} color="white" className="pi pi-facebook" p="4" bg="blue.500"> </Box>
            <Box  borderRadius={50} color="white" className="pi pi-linkedin" p="4" bg="blue.500"> </Box>
            <Box  borderRadius={50} color="white"className="pi pi-twitter" p="4" bg="blue.500"> </Box>
        </HStack>
        <Box fontSize={["11","sm","md"]} >
        <Text textAlign="center">
            @ Copyright My Resume, All rights reserved
        </Text>
        <Text textAlign="center">
            Designed by <Text color="green" as="span">Daventy,</Text> 
        </Text>
        </Box>

    </VStack>
  )
}

export default Footer