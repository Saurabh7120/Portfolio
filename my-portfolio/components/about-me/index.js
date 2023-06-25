import { Box, Divider, HStack, keyframes, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import ScrollIndicator from '../core/utils/ScrollIndicator';
import { SectionLayout } from '../core/Layout';




const SingleSkill = ({name,percent}) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
    const progress = keyframes`
    from { width: 0%; }
    to { width: ${percent}%; }
    `

    const progressAnimation = `${progress} 1.5s forwards ease-in-out`

    return <VStack mb={2} textAlign='left'>
        <Text w='100%' fontSize={'md'}>{name}</Text>
        <Box h={'5px'} w={'100%'} bg={'brand.300'} borderRadius='2px'>
            <Box ref={ref} animation={inView && progressAnimation} bg={'brand.900'} w={!inView && '0%'} h={'5px'} borderRadius='2px'></Box>
        </Box>
    </VStack>
}

const AboutMe = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    const languages = [
        {
            name:"Javascript",
            percent:100
        },
        {
            name:"Typescript",
            percent:90
        },
        {
            name:"HTML5",
            percent:100
        },
        {
            name:"CSS3",
            percent:100
        },
        {
            name:"JQuery",
            percent:100
        },
        {
            name:"C#",
            percent:50
        },
        {
            name:"Python",
            percent:90
        }
    ]

    const frameworks = [
        {
            name:"ReactJS",
            percent:100
        },
        {
            name:"NextJS",
            percent:100
        },
        {
            name:"NodeJS",
            percent:100
        },
        {
            name:"VueJS",
            percent:60
        },
        {
            name:"ExpressJS",
            percent:100
        },
        {
            name:"Redux",
            percent:100
        },
        {
            name:"GraphQL",
            percent:90
        }
    ]

    const databases = [
        {
            name:"MongoDB",
            percent:100
        },
        {
            name:"MySQL",
            percent:70
        },
        {
            name:"Redis",
            percent:90
        },
        {
            name:"Firebase",
            percent:90
        }
    ]

    return (
        <SectionLayout
            id='about-me'
            prevPage={{
                name:'landing',
                page:'top'
            }}
            nextPage={{
                name:'My skills',
                page:'my-skills'
            }}
        >
            <>
            <Text fontSize={'xl'} wordBreak={'break-all'}>I’m <strong>Saurabh</strong>. A <strong>computer science graduate</strong> student and a <strong>passionate developer</strong>. </Text>
                <Text fontSize={'xl'} wordBreak={'break-all'}>I love <strong>building products</strong> that can have a <strong>great impact</strong> on the community.</Text>
                <Text mt={2} fontSize={'xl'} wordBreak={'break-all'} >I run on,</Text>
                <Text mt={2} fontSize={'xl'} fontWeight={"bold"}>🧠 Logic</Text>
                <Text mt={2} fontSize={'xl'} fontWeight={"bold"}>🎨 Design</Text>
                <Text mt={2} fontSize={'xl'} fontWeight={"bold"}>☕️ Coffee</Text>
                <Text mt={2} fontSize={'xl'} fontWeight={"bold"}>🎵 Music</Text>
                {/* <Text fontSize={'xl'} mb={3} mt={3} wordBreak={'break-all'} >Below are my tools and technologies of choice, </Text>
                    <Box 
                        borderRadius={20}
                        w='100%' 
                        p={5}
                        border='1px solid black'
                        position={'relative'}
                        // boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}  
                    >
                        <Text fontSize={'lg'} fontWeight={'bold'}>Languages</Text>
                        <Divider mb={2}/>
                        <Text>Javascript, Typescript, Python</Text>
                       

                        <Box
                            w='100%'
                            p={2}
                        >
                        {
                            languages.map(i => <SingleSkill key={i.name} {...i}/>)
                        }
                        </Box>
                    </Box>

                            {/* {
                                frameworks.map(i => <SingleSkill key={i.name} {...i}/>)
                            }
                            {
                                databases.map(i => <SingleSkill key={i.name} {...i}/>)
                            } */}

            </>
        </SectionLayout>

    );
};

export default AboutMe;