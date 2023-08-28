import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  useToast, // Import the useToast hook
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

let obj = {
  email: '',
  password: '',
};

export const Login = () => {
  let [data, setData] = useState(obj);
  let navigate = useNavigate();
  const { loginUser, authState } = useContext(AuthContext);
  const toast = useToast(); // Initialize the useToast hook

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
        </Stack>
      </form>
    </Box>
  );
};
