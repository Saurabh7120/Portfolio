import { Flex } from '@chakra-ui/react';
import React from 'react';
import ComingSoon from '../components/core/comingSoon';
import Navigator from '../components/core/Navigator';

const Projects = () => {
    return (
        <Flex w={'100vw'} h={'100vh'} position='relative'>
            <Navigator/>
            <ComingSoon/>
        </Flex>
    );
};

export default Projects;