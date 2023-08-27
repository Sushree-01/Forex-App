import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p="4" bg="blue.500" color="white">
      <Box>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text fontSize="lg" fontWeight="bold">
          Forex App
        </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            Dashboard
          </Button>
        </Link>
        <Link to="/trading" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            Trading
          </Button>
        </Link>
        <Link to="/investment" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            Investment
          </Button>
        </Link>
        <Link to="/crypto" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            Crypto
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            LogIn
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal">
       SignUp
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
