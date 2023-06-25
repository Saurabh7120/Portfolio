import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navigator from './Navigator';
import { useInView } from 'react-intersection-observer';
import ScrollIndicator from './utils/ScrollIndicator';

const Layout = ({children}) => {
    return (
        <Flex w={'100vw'} h={'100vh'} position='relative' bg={'transparent'}>
            <Box maxW={'99%'} display='flex' justifyContent={'center'}>
                <Box className='fadeIn' w={'100%'} p={'35px 20px'}>
                    {children}
                </Box>
            </Box>
            
        </Flex>
    );
};

const SectionLayout = ({children, prevPage, nextPage, id, textAlign}) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });

    return (<VStack 
        as={'section'}
        minH={'100vh'} 
        justifyContent={'center'} 
        spacing={1} 
        id={id}
        position={'relative'}
    >
        {inView && prevPage &&
            <ScrollIndicator
                text={prevPage.name}
                direction={'up'}
                to={prevPage.page}
            />
        }
        <Box ref={ref} mt={2} >
        </Box>
        <Box
            className='glass-background'
            textAlign={textAlign}
            py={8}
            px={3}
            rounded={'md'}
        >
            {children}
        </Box>
        {inView && nextPage &&
            <ScrollIndicator
                text={nextPage.name}
                direction={'down'}
                to={nextPage.page}
            />
        }
    </VStack>)
}

export default Layout;
export {SectionLayout};