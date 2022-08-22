import { Avatar, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const AboutMeLeft = () => {

    const [displayText, setDisplayText] = useState("");
    const [fullText, setFullText] = useState("Learner. Builder. Innovator.")
    const [index,setIndex] = useState(0)

    useEffect(() => {
        if(index > fullText.length - 1) return;
        setTimeout(() => {
            setDisplayText(displayText + fullText[index]);
            setIndex(index + 1)
        },100)
    },[index])

    return (
        <VStack marginTop={'30%'} justifyContent={'center'} spacing={1}>
            <Avatar src='/saurabh.jpg' m='auto' size={'2xl'} mb={5}/>
            <Text fontSize={'xl'} fontWeight={'bold'}>Hello there, I am</Text>
            <Text fontSize={'3xl'} lineHeight="1" color="brand.700" fontWeight={'bold'}>Saurabh Mane</Text>
            <Text fontSize={'4xl'} lineHeight="taller"  fontWeight={'bold'}>{displayText}<span className='cursor'></span></Text>
        </VStack>
    );
};

export default AboutMeLeft;