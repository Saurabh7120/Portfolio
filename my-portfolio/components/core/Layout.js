import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navigator from './Navigator';

const Layout = ({title,left,right}) => {
    return (
        <Flex w={'100vw'} h={'100vh'} position='relative'>
            <Navigator/>
            <Box className='fadeIn' w={'60%'} p={'35px'}>
                {left}
            </Box>
            <VStack  justifyContent={'center'} w={'40%'}>
                <Box
                    className='fadeIn'
                    overflowY={'auto'} 
                    p={5} 
                    boxShadow={"rgba(100, 100, 111, 0.9) 0px 7px 29px 0px"} 
                    borderRadius={'20px'} 
                    w={'90%'} 
                    h={"90%"} 
                    bg={'brand.700'}
                    color="brand.100"
                >
                    {title && <Text fontSize={'3xl'} fontWeight='bold'>{title}</Text>}
                    {right}
                </Box>
            </VStack>
        </Flex>
    );
};

export default Layout;