import React from 'react'
import {useState} from 'react'
import { Tabs, TabPanels, TabPanel,Button, TabList, Tab, Box, Flex } from '@chakra-ui/react'
import { Container, Text} from '@chakra-ui/react'
import ShoppingCart from './ShoppingCart'
import BillingInformation from './BillingInformation'
import Completed from './Completed'
const Checkout = () => {
  let screenStyle = { color: 'red.500', borderColor: 'red.500' }
  let [headText,setHeadText] = useState('Shopping Cart')

  
  const [tabIndex, setTabIndex] = useState(0)
    
  const [tabItems, setTabItems] = useState([{name:'Shopping Cart',active:true},
  {name:'Billing Information',active:false},
  {name:'Completed',active:false},])

  let changTabsState = ()=>{
    
  }

  return (

   

    <>
   
    <Flex flexDirection={'column'}>

    <Flex mb="19px" mt="3" py="3" bg="blackAlpha.50">

<Container maxW="container.xl">
  Home / <Box color="blackAlpha.600" as="span">Checkout</Box>
</Container>
</Flex>

      <Container maxW="1100px">
<Text fontSize="3xl" fontWeight="semibold" textAlign="center">{headText}</Text>
       
      <Tabs isDisabled={!tabItems[0].active} onClick={null} index={tabIndex} onChange={(index) => setTabIndex(index)} mt="8" borderColor={'white'} >
            <TabList  w="100%"  flexDirection={['column','column','row']}  >
                <Tab onClick={()=>setHeadText('Shopping Cart')} flexBasis="50%"   mx="2" _selected={screenStyle} >
                  1. Shopping Cart
                  {
                   (tabItems[0].active)  ? (  <Box ml="2" className="pi pi-check"></Box>):""
                  }
                
                  </Tab>
                <Tab isDisabled={!tabItems[1].active} onClick={()=>setHeadText('Billing Information')} flexBasis="50%"   mx="2" _selected={screenStyle} >
                  2. Billing Information
                  {
                    (tabItems[1].active) ? (  <Box ml="2" className="pi pi-check"></Box>):""
                  }
                  </Tab>
                <Tab isDisabled={!tabItems[2].active} onClick={()=>setHeadText('Completed')} flexBasis="50%"   mx="2" _selected={screenStyle} >
                  3. Completed
                  {
                    (tabItems[2].active)  ? (  <Box ml="2" className="pi pi-check"></Box>):""
                  }
                  </Tab>
                 
            </TabList>
            <TabPanels mt="5">
                <TabPanel>
           <ShoppingCart setTabIndex={setTabIndex} changTabsState={changTabsState}/>
                </TabPanel>
                <TabPanel>
                     <BillingInformation setTabIndex={setTabIndex} changTabsState={changTabsState}/>
                </TabPanel>
                <TabPanel>
                    <Completed/>   
                </TabPanel>

                
            </TabPanels>

</Tabs>



      </Container>
    </Flex>
    </>
  )
}

export default Checkout


