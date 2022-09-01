import React from 'react'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image } from '@chakra-ui/react'
import TypeText from './TypeText'
const Banner = ({inputRef}) => {
  return (
    <Box ref={inputRef} position="relative" h="100vh">
<Image display={['none','none','none','block']} src={"Images/me.png"} w="100%" h="100%" objectFit={'cover'}></Image>
<Image display={['block','block','block','none']} src={"Images/zoom.png"} w="100%" h="100%" objectFit={'cover'}></Image>
<Box opacity="0.5" bg="white" position="absolute" w="100%" h="100%" top="0"></Box>
<Flex position="absolute" h="100%" top="0" w="100%">
<Container maxW={"container.xl"}>
<Flex flexDirection="column" justifyContent={'center'} color="blackAlpha.800" h="100%" w="100%">
<Text fontWeight={'bold'} textAlign={["center","center","left"]} fontSize={["2xl","2xl","6xl"]}>Odokuma Ogheneguono</Text>

<Text textAlign={["center","center","left"]} fontSize={["lg","xl","3xl"]} as="div">I'm a <TypeText/></Text>

<Flex justifyContent={['center','center','start']}>
<HStack spacing="5" fontSize={'2xl'} mt="7">
  <Box fontSize={'xl'} className="pi pi-instagram"></Box>
  <Box fontSize={'xl'} className="pi pi-facebook"></Box>
  <Box fontSize={'xl'} className="pi pi-twitter"></Box>
  <Box fontSize={'xl'} className="pi pi-linkedin"></Box>
</HStack>
</Flex>

</Flex>
        </Container>
</Flex>
      </Box>
  )
}

export default Banner