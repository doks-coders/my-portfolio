import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, VStack, HStack, Box, Text,Textarea,Input, Heading,Button, Container, Flex, Image, Grid } from '@chakra-ui/react'
import TitleHeader from './TitleHeader'

const Contact = ({inputRef}) => {
    let contactInformation = [{icon:'pi pi-home',key:'Location',value:'Adams Street'},
{icon:'pi pi-envelope',key:'Email',value:'guonnie@gmail.com'},
{icon:'pi pi-phone',key:'Call',value:'081409324'}]

  return (
  <>
  <Container data-aos="fade-up" mt="20" maxW="container.xl">
    <TitleHeader inputRef={inputRef} title={'Contact'}/>

    <Flex w="100%" flexDirection={['column','column','row']} >
        <Flex mt="10" flexBasis="30%" >
            <Stack spacing="10">
                {
                    contactInformation.map((val,index)=>(
                        <HStack key={index}>
                        <Box borderRadius="full" color="blue.500" p="3" fontSize="30" bg="blue.50" className={val.icon}/>
                        <Stack spacing="0">
                            <Text  fontSize={['sm','lg','3xl']}  fontWeight="bold">{val.key}:</Text>
                            <Text  fontSize="sm">{val.value}</Text>
                        </Stack>
                    </HStack>

                    ))
                }
                


               
            </Stack>
        </Flex>
        <Flex mt="10" flexDir="column" h="100%" flexBasis="70%">
        <Flex  h="100%" flexDirection={['column','column','row']} w="100%" flexWrap="wrap">
            <Box  m="1" flexBasis={["50%","50%","49%","48.5%"]}>
            <Input   placeholder='Your Name' />
            </Box>
            <Box  m="1" flexBasis={["50%","50%","49%","48.5%"]}>
            <Input  placeholder='Your Email' />
            </Box>

            <Box m="1" flexBasis={["100%","100%","99%","98.5%"]}>
            <Input   placeholder='Subject' />
            </Box>

            <Box m="1" flexBasis={["100%","100%","99%","98.5%"]}>
            <Textarea   height={'120px'} placeholder='Message' />
            </Box>
        </Flex>

        <VStack mt="5">
            <Button colorScheme="blue" rounded="full">Send Message</Button>
        </VStack>
        </Flex>
      
        
    </Flex>
    

  </Container>
  </>
  )
}

export default Contact