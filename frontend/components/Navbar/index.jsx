import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Chakra App</Heading>
      </Box>

      <Spacer />

      <ButtonGroup gap="2">
        <NextLink href="/register">
          <Button colorScheme="teal">Sign Up</Button>
        </NextLink>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Navbar;