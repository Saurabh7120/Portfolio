import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineDownSquare, AiOutlineUpSquare } from 'react-icons/ai';

const ScrollIndicator = ({
    text,
    direction,
    to
}) => {
    return (
        <Box
            className='fadeIn'
            display={'flex'}
            flexWrap='wrap'
            justifyContent='center'
            w='100%'
            position={'absolute'}
            bottom={direction === 'down' ? '3%' : '93%'}
        >
            <Text 
                w={'100%'} 
                textAlign='center'
                position={'absolute'}
                bottom={direction === 'up' ? -6 : 9}
            >
                    {text}
            </Text>
            <a 
                href={`#${to}`}
                style={{
                    position:'absolute',
                    bottom:'0px'
                }}
                className='vibrate'
            >
                {direction === 'down' ? 
                <AiOutlineDownSquare
                    fontSize={'30px'}
                    cursor='pointer'
                />
                :
                <AiOutlineUpSquare
                    fontSize={'30px'}
                    cursor='pointer'
                />
                }
            </a>
        </Box>
    );
};

export default ScrollIndicator;