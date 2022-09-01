import {Drawer,DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter,useDisclosure,DrawerCloseButton,List,ListItem,Divider,Flex,Button} from '@chakra-ui/react'
import React from 'react'
import {Link} from 'next/link'
import DrawerLink from './DrawerLink'






const SimpleDrawer = ({btnColor,onScroll})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    let strokeColor = ''
  
    if(btnColor ==='black') strokeColor = "#000"
    if(btnColor ==='white') strokeColor = "#fff"
    return (
      <>
  

  <Button m="1" ref={btnRef} p="2" bg="blackAlpha.100" onClick={onOpen} _hover={{background:"#f1f1f1f1"}}  w="40px">
  <Flex  colorscheme='teal' >
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 45.796 23">
            <g id="Group_491" data-name="Group 491" transform="translate(-116.542 -28.725)">
              <line id="Line_5" data-name="Line 5" x2="21.796" transform="translate(128.542 30.225)" fill="none" stroke={btnColor} strokeLinecap="round" strokeWidth="3" />
              <line id="Line_6" data-name="Line 6" x2="42.796" transform="translate(118.042 40.225)" fill="none" stroke={btnColor} strokeLinecap="round" strokeWidth="3" />
              <line id="Line_7" data-name="Line 7" x2="21.796" transform="translate(128.542 50.225)" fill="none" stroke={btnColor} strokeLinecap="round" strokeWidth="3" />
            </g>
          </svg>
          
  
        </Flex>
            </Button>


     
        <Drawer
          isOpen={isOpen}
          placement='left'
          size={'sm'}
          onClose={onClose}
          finalFocusRef={btnRef}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader px="10">Menu</DrawerHeader>
  
            <DrawerBody  py="3">
  
              <List  >
              <DrawerLink
              onScroll={onScroll}
              onClose={onClose}
               links = { [{name:'Home',icon:'pi pi-home',active:true},
               {name:'About',icon:'pi pi-user',active:false},
               {name:'Resume',icon:'pi pi-file'},
               {name:'Projects',icon:'pi pi-briefcase',active:false},
               {name:'Contact',icon:'pi pi-envelope',active:false}] }
  
              />
              </List>
  
  
  
            </DrawerBody>
  
          
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  

  export default SimpleDrawer

  //   <DrawerLink/>