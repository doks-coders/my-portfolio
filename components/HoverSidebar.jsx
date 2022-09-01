import React from 'react'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image } from '@chakra-ui/react'

const HoverSidebar = ({onScroll}) => {
  return (
    <Flex display={['none','none','flex']} zIndex="4" position={'fixed'} h="100vh"  justifyContent={'center'} alignItems="center" flexDirection={'column'}>
    <Stack px="2" spacing="3">
<SideBarMenu onScroll={onScroll}/>
    </Stack>
  </Flex>
  )
}

export default HoverSidebar





const SideBarMenu = ({onScroll})=>{
    let [sidebaritems, setSideBarMenu] = useState([{name:'Home',icon:'pi pi-home',active:true},
    {name:'About',icon:'pi pi-user',active:false},
    {name:'Resume',icon:'pi pi-file'},
    {name:'Projects',icon:'pi pi-briefcase',active:false},
    {name:'Contact',icon:'pi pi-envelope',active:false}])
  
      let clickItem = (index)=>{
  let oldObject  = [...sidebaritems]
  oldObject.map((val)=>{return val.active =false })
  oldObject[index].active = !oldObject[index].active
        setSideBarMenu(oldObject)
      }
  
   
    return(
      <>
      {
        sidebaritems.map((val,index)=>(
          <Box   h="60px" w="100%">
          <HStack cursor="pointer" onClick={()=>{clickItem(index);onScroll(index)}} className='sideButtonContainer' 
          _hover={{background:'blue.500',color:'white'}} 
          style={{transition:'.2s ease'}}
          bg={val.active?"blue.500":"gray.100"}
          color={val.active?"white":"black"}
          
          p="3" borderRadius={'full'}>
            <Box ml="1.5" py="1.5" className={val.icon} fontSize="md">
            </Box>
            <Box>
              <Text className='sideButtonText'>{val.name}</Text>
            </Box>
          </HStack>
        </Box>
        ))
      }
      </>
    )
  }