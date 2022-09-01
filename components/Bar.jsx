import React from 'react'
import { Flex,Box,HStack,Text } from '@chakra-ui/react'
const Bar = ({percentage,title}) => {
    let xsales = Number(percentage)
    let ysales = 100 - xsales

  return (
    <Box fontWeight="bold">
    <HStack mb="2" justifyContent={'space-between'}>
        <Text fontSize="11">{title.toUpperCase()}</Text>
        <Text fontSize="11">{`${xsales}%`}</Text>
    </HStack>

    <Flex h="10px">
        <Box bg="blue.500" flexBasis={`${xsales}%`}/>
        <Box bg="blackAlpha.100" flexBasis={`${ysales}%`}/>
    </Flex>
</Box>
  )
}

export default Bar