import { Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {useRouter} from "next/router"


const Nav = ({num,name,route}) => {
    const router = useRouter()
    return <Flex justifyContent={'flex-start'} w='100px' onClick={() => router.push(`${route}`)}>
        <Text
            px={2} 
            py={3}
            fontSize='lg' 
            bg="brand.700" 
            color="brand.50"
            cursor={'pointer'}
            borderRadius='0 5px 5px 0'
            data={`${name.split("")[0]}`}
            attribute={`${name}`}
            className="nav-link"            
        />
    </Flex> 
    
    
}

const Navigator = () => {

    const links = [
        {
            num:1,
            name: 'About Me',
            route: '/'
        },
        {
            num:2,
            name: 'My Projects',
            route: "projects"
        },
        {
            num:3,
            name: 'Contact Me',
            route:"contact"
        },
    ]

    return (
        <VStack 
            spacing={0} 
            mt={2}
            position='absolute'
            top={'38%'}
            zIndex={5}
        >
            {links.map((i) => <Nav key={i.num} {...i}/>)}
        </VStack>
    );
};

export default Navigator;