import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Heading,
  Stack,
  useToast,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

let obj = {
  email: '',
  password: '',
  name: '',
};

export const Login = () => {
  let [data, setData] = useState(obj);
  let navigate = useNavigate();
  const { loginUser, authState } = useContext(AuthContext);
  const toast = useToast();

  let handleChangeLogIn = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(`https://sushreebackendapi.onrender.com/data`, data)
    .then((res) => {
      console.log('Response:', res.data);

      // Extract name from the API response
      const { name } = res.data;

      // Show toast notification for successful login
      toast({
        title: 'Login Successful',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });

      // Update authentication state here
      loginUser();

      setData(obj);
      console.log(name); // Debug: Check if name is present and correct
      localStorage.setItem('username', JSON.stringify(name)); // Store name in local storage
      navigate('/');
    })
    .catch((err) => {
      console.error('Error:', err);

      // Show toast notification for invalid credentials
      toast({
        title: 'Invalid Credentials',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    });
  };

  return (
    <Box textAlign="center" p={8}>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mt={4}>
       
       < FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              type="name"
              value={data.name}
              onChange={handleChangeLogIn}
              required
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={data.email}
              onChange={handleChangeLogIn}
              required
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              value={data.password}
              onChange={handleChangeLogIn}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
          <Text mt={2} textAlign="center" fontSize="md" color="black.500">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};