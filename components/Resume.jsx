import React from 'react'
import TitleHeader from './TitleHeader'
import { useState } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image,Grid } from '@chakra-ui/react'

import TimelineComponent from './TimelineComponent'
const Resume = ({inputRef}) => {
  return (
    <Container data-aos="fade-up"  mt="20" maxW="container.xl">
    <TitleHeader inputRef={inputRef} title="Resume"/>

  
<Flex mt="5"  flexDirection={['column-reverse','column-reverse','column-reverse','row']}>
    <Flex mt="4" flexBasis={'50%'} flexDirection="column">
    <Text ml={"3"} fontSize={["lg",'3xl']} color="blackAlpha.700" mb="3" fontWeight="bold">Education</Text>

<TimelineComponent
title={'BACHELOR OF MECHANICAL ENGINEERING'}
date={'2015 - 2022'}
workingPlace={'Landmark University'}
location={'Kwara, NG'}
about={`   Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus 
sint sed, deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`}
/>
    

<TimelineComponent
title={'BASIC IN SCIENCE'}
date={'2010 - 2015'}
workingPlace={'ABEC'}
location={'Port Harcourt, NG'}
about={`   Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus 
sint sed, deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`}
/>


<TimelineComponent
title={'PRIMARY EDUCATION '}
date={'2005 - 2010'}
workingPlace={'Bloombreed Montessori School'}
location={'Port Harcourt, NG'}
about={`   Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus 
sint sed, deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`}
/>
    
    </Flex>
    {/********/}
    <Flex mt="4" flexBasis={'50%'} flexDirection="column">

<Text ml="3" fontSize={["lg",'3xl']} color="blackAlpha.700" mb="3" fontWeight="bold">Professional Experience</Text>

<TimelineComponent
title={'FRONTEND DESIGN SPECIALIST'}
date={'2022 - Present'}
workingPlace={'Hallmarts Unlimited'}
location={'Lagos, NG'}
whatyoudid={[`   Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus sint sed, 
deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`,
`  Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus sint sed,
deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`]}
/>
    
    
<TimelineComponent
title={'FULLSTACK DEVELOPER'}
date={'2019 - Present'}
workingPlace={'Daventy Agency'}
location={'Port Harcourt, NG'}
whatyoudid={[`   Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus sint sed, 
deleniti ipsam aperiam, ipsum corrupti consequuntur, assumenda maxime?
`,
`  Lorem ipsum, dolor sit amet consectetur adipisicing elit. o harum maiores doloribus sint sed, deleniti ipsam aperiam, 
ipsum corrupti consequuntur, assumenda maxime?
`]}
/>
    



</Flex>
</Flex>
    </Container>
  )
}

export default Resume