import React from 'react';
import { Flex, Box, Heading, Spacer, Button } from "@chakra-ui/react";

interface AppbarProps {

}

export const Appbar: React.FC<AppbarProps> = ({}) =>{
        return (
            <Flex>
                <Box p="2">
                    <Heading size="md">osu!Boards</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button color="black" mr="4">
                        Sign Up
                    </Button>
                    <Button color="black" mr="4">
                        Sign In
                    </Button>
                </Box>
            </Flex>
        );
}