import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'
import SimpleDrawer from '../Drawer/SimpleDrawer'
import Banner from '../Banner'
import HoverSidebar from '../HoverSidebar'
import About from '../About'
import Facts from '../Facts'
import Skills from '../Skills'
import Resume from '../Resume'
import Portfolio from '../Portfolio'
import Testimonials from '../Testimonials'
import Contact from '../Contact'
import Footer from '../Footer'

import AOS from "aos";
import "aos/dist/aos.css";


const Homepage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const bannerRef = React.useRef(null)
 
  const categoriesRef = React.useRef(null)

  const [scrollRefs,setScrollRefs] = useState([
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null),
    React.useRef(null)
  ]) 

  const scrollToElement = (index)=>scrollRefs[index].current.scrollIntoView({behavior: 'smooth' })




  return (
    <>
   
    <Box fontSize="12">
    <HoverSidebar onScroll={scrollToElement} />

    </Box>

    <Flex zIndex="5" display={['flex','flex','none']} justifyContent="flex-end" position="fixed"   width="100%" >
    <SimpleDrawer  onScroll={scrollToElement}  btnColor={'black'}/>
    </Flex>


      <Flex fontSize={["12",'md']} color="blackAlpha.800" position="relative"  pl={["0","0","20"]} pb="20" flexDirection="column" >

      

      <Banner inputRef={scrollRefs[0]}  />
      <About inputRef={scrollRefs[1]}/>
      <Facts/>
      <Skills />
      <Resume inputRef={scrollRefs[2]} />
      <Portfolio inputRef={scrollRefs[3]}/>
      <Testimonials/>
      <Contact inputRef={scrollRefs[4]}/>
      </Flex>
      
      <Footer/>
    </>
  )
}

export default Homepage

//make list
//loop through


