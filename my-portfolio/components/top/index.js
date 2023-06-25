import { Avatar, Box, Divider, HStack, keyframes, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {AiOutlineDownSquare} from 'react-icons/ai'
import ScrollIndicator from '../core/utils/ScrollIndicator';
import { SectionLayout } from '../core/Layout';

const Top = () => {

    const [displayText, setDisplayText] = useState("");
    const fullText = "Learner. Builder. Innovator."
    const [index,setIndex] = useState(0)

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });


    useEffect(() => {
        if(index > fullText.length - 1) return;
        setTimeout(() => {
            setDisplayText(displayText + fullText[index]);
            setIndex(index + 1)
        },100)
    },[index])



    return (
        <SectionLayout
            id={'top'}
            nextPage={{
                name:'About me',
                page:'about-me'
            }}
            textAlign={'center'}
        >
            <>
                <Avatar src='/saurabh.jpg' size={'2xl'} mb={5}/>
                <Text fontSize={'xl'} fontWeight={'bold'} >Hello there,</Text>
                <Text fontSize={'xl'} fontWeight={'bold'} >{"I'm"}</Text>
                <Text fontSize={'3xl'} py={3} lineHeight="1" color="#F1F1F3" fontWeight={'bold'}>Saurabh Mane</Text>
                <Text fontSize={'4xl'} lineHeight="taller" pt={2}  fontWeight={'bold'}>{displayText}<span className='cursor'></span></Text>
            </>
        </SectionLayout>
    );
};

export default Top;