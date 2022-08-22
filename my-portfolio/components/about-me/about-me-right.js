import { Box, Divider, HStack, keyframes, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import React from 'react';




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

    return <HStack mb={1}>
        <Text w='100px' fontSize={'lg'}>{name}</Text>
        <Box h={'25px'} w={'60%'} bg={'brand.100'} borderRadius='2px'>
            <Box ref={ref} animation={inView && progressAnimation} bg={'brand.500'} w={!inView && '0%'} h={'25px'} borderRadius='2px'></Box>
        </Box>
    </HStack>
}

const AboutMeRight = () => {

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
            percent:85
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
        <Box mt={2}>
            <Text fontSize={'2xl'} fontWeight='bold'>Who am I?</Text>
            <Divider mb={2}/>
            <Text fontSize={'xl'}>I’m <strong>Saurabh</strong>. A <strong>computer science graduate</strong> student and a <strong>passionate developer</strong>. I love <strong>building products</strong> that can have a <strong>great impact</strong> on the community.</Text>
            <Text mt={2} fontSize={'xl'}>I run on <strong>logic</strong>, <strong>design</strong> and <strong>coffee</strong>. <strong>☕️</strong></Text>
            <Text fontSize={'2xl'} fontWeight='bold' mt={3}>My powers</Text>
            <Divider mb={2}/>
            <Tabs variant='soft-rounded' mt={3}>
                <TabList>
                    <Tab color={'white'} fontSize={'sm'} w='fit-content' height={'30px'}>Languages</Tab>
                    <Tab color={'white'} fontSize={'sm'} w='fit-content' height={'30px'}>Technologies</Tab>
                    <Tab color={'white'} fontSize={'sm'} w='fit-content' height={'30px'}>Databases</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {
                            languages.map(i => <SingleSkill key={i.name} {...i}/>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            frameworks.map(i => <SingleSkill key={i.name} {...i}/>)
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            databases.map(i => <SingleSkill key={i.name} {...i}/>)
                        }
                    </TabPanel>
                </TabPanels>
                
            </Tabs>
        </Box>
    );
};

export default AboutMeRight;