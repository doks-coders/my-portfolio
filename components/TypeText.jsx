import React from 'react'
import { useState,useEffect } from 'react'
import { Stack, VStack, HStack, Box, Text, Heading, Container, Flex,Image } from '@chakra-ui/react'






const TypeText = () => {

    let [listOfText,setListOfText]= useState(['Software Developer   ','SEO Expert','Content Writer']); 
    let [chosenText,setChosenText] = useState(0); 
    let [indexOfLetter,setIndexOfLetter] = useState(0)


useEffect(() => {
  const interval = setInterval(() => {
      setIndexOfLetter((indexOfLetter) => {
        if((listOfText[chosenText].length -1 <= indexOfLetter)){
          setChosenText((chosenText) => {
            if((listOfText.length -1 == chosenText)){
              return 0
            }
            if((listOfText[chosenText].length -1 <= indexOfLetter)){
              return chosenText + 1
            }});
            return chosenText
        }else{
          return indexOfLetter + 1
        }
        });
  }, 200);
  return () => clearInterval(interval);
}, []);

  return (
    <>
    <Box as="span" color="blue.500">{listOfText[chosenText].slice(0,indexOfLetter)}</Box> 
    </>
  
  )
}

export default TypeText