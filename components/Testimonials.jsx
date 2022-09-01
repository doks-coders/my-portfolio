import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex, Image, Grid } from '@chakra-ui/react'
import TitleHeader from './TitleHeader'
const Testimonials = () => {

      

  const [imageindex, setImageIndex] = useState(0);
  const [enterAnimation,setEnterAnimation] = useState(true)
  const [leaveAnimation,setLeaveAnimation] = useState(false)
let testimonials = [
    {name:"Daniel Odokuma ",
         image:"Images/blog-1.jpg",
         occupation:"CEO @ Hallmarts", 
        information:`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda,
        voluptatibus ab explicabo nihil rerum ut temporibus quae odit accusantium, itaque 
        quas sapiente officiis. Aliquid dolores unde obcaecati. Maiores, nostrum?`
    },
    {name:"Father Odokuma ",
    image:"Images/blog-1.jpg",
    occupation:"CEO @ Hallmarts", 
   information:`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda,
   voluptatibus ab explicabo nihil rerum ut temporibus quae odit accusantium, itaque 
   quas sapiente officiis. Aliquid dolores unde obcaecati. Maiores, nostrum?`
},
{name:"Mother Odokuma ",
image:"Images/blog-1.jpg",
occupation:"CEO @ Hallmarts", 
information:`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda,
voluptatibus ab explicabo nihil rerum ut temporibus quae odit accusantium, itaque 
quas sapiente officiis. Aliquid dolores unde obcaecati. Maiores, nostrum?`
},
]
  useEffect(() => {
    const interval = setInterval(() => {
    
      setImageIndex((imageindex) => {
        /***
 * Set the image index to the next one after beginning
 */
         if(imageindex == (testimonials.length-1)) return 0
        else return imageindex + 1
        });


 setTimeout(()=>{
    setEnterAnimation(false)
  },500)
  setEnterAnimation(true)

  setTimeout(()=>{
    setLeaveAnimation(true)
  },7000)
  setLeaveAnimation(false)

    }, 7500);
    return () => clearInterval(interval);
  }, []);


let nextImage = (val)=>{
  if(val == (images.length-1)) return 0
  else return val + 1
}


    return (
        <Container data-aos="fade-up" position="relative" mt="20" overflowX={'hidden'} maxW="container.xl" >
            <TitleHeader title="Testimonials" />
{/**The offset was fixed*/}



            <VStack  className={((enterAnimation)?"testimonialEnter":"") +' '+((leaveAnimation)?"testimonialLeave":"") } position="relative"    mt="30" w="100%">
                <Image
                    src={testimonials[imageindex].image}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="full"></Image> 
                <Text fontSize="20px" fontWeight="bold">{testimonials[imageindex].name}</Text>
                <Text fontSize="sm" fontWeight="light">{testimonials[imageindex].occupation}</Text>

                <Flex>
                    <Text fontSize="50px" color="blue.500" as="span">
                        "
                    </Text>
                    <Text maxW="900" px="2" textAlign="center">
                    {testimonials[imageindex].information}
                    </Text>
                    <Text fontSize="50px" color="blue.500" as="span">
                        "
                    </Text>
                </Flex>


            </VStack>
            
        </Container>
    )
}

export default Testimonials