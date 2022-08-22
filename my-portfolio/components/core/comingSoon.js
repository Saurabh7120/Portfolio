import { Container, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ComingSoon = () => {
    return (
        <Container>
            <VStack className='fadeIn' justifyContent={'center'} h={'100vh'} spacing={3}>
                <img width={'400px'} src='/coming-soon.svg' alt='coming soon'/>
                <Text fontWeight={'bold'} fontSize={'xl'}>Work in progress!</Text>
            </VStack>
        </Container>
    );
};

export default ComingSoon;