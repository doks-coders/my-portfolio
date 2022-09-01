import {Drawer,DrawerOverlay, 
  DrawerContent,Box, DrawerHeader, DrawerBody, DrawerFooter,useDisclosure,DrawerCloseButton,List,ListItem,Divider,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

const DrawerLink = ({links,onClose,onScroll}) => {
    let runProcess = (index)=>{
      setTimeout(()=>{
        onClose()
      },800)
      onScroll(index);
    }
    return (
    <>
       {links.map((val,index)=>(
        <Box key={index}  >
    
        <ListItem  background= "blackAlpha.100" mb="2" onClick={()=>{runProcess(index)}} rounded={50}  cursor={'pointer'}   p="5"  _hover={{
      background: "blue.500",
      color: "white",
      transition:'background 0.5s',
   
      
    }}>
  <Box mr="2" className={val.icon}></Box>
      {val.name}
    
    </ListItem>
 
    
    <Divider />
        </Box>
      ))}
    </>
  )
}

export default DrawerLink

