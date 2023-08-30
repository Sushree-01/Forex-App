import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

export const Navbar = () => {
  let userName = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate();
  const handleLogout = () => {
    if(userName){
      localStorage.removeItem("username");
      window.location.reload();
    }else{
        navigate("/signup");
    }
  }
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
          <Button colorScheme="teal" mr="3">
            Dashboard
          </Button>
        </Link>
        <Link to="/trading" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="3">
            Trading
          </Button>
        </Link>
        <Link to="/investment" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="3">
            Investment
          </Button>
        </Link>
        <Link to="/crypto" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="2">
            Crypto
          </Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button colorScheme="teal" mr="3" backgroundColor={"teal.500"} color={"white"}
            _hover={{color:"red"}} w={20}>
          {userName? `Hi ${userName}`:"LogIn"}
          </Button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <Button mr="3"  w={20} _hover={{bg:"none",color:"red",border:"1px solid grey"}}
             backgroundColor={"teal.500"}  color={"white"} colorScheme="teal" 
              onClick={handleLogout}>

          {(JSON.parse(localStorage.getItem("username"))&&"LogOut")||"SignUp"}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};