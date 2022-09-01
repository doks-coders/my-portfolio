import React from 'react'
import { Text,HStack,Box,Flex } from '@chakra-ui/react'
const TitleHeader = ({inputRef,title}) => {
  return (
    <Flex mt="10" ref={inputRef} justifyContent={'center'} w="100%">
    <Box>
      <Text fontWeight={'bold'} fontSize={["xl","2xl","3xl"]}>{title.toUpperCase()}</Text>
      <HStack spacing="0">
        <Box flexBasis={'50%'} h="3px" bg="blackAlpha.300"></Box>
        <Box flexBasis={'50%'} h="4px" bg="blue.500"></Box>
        <Box flexBasis={'50%'} h="3px" bg="blackAlpha.300"></Box>
      </HStack>
    </Box>
      </Flex>  
  )
}

export default TitleHeader