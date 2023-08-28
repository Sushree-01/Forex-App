import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Select,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let obj = {
  name: '',
  email: '',
  password: '',
  age: '',
  profession: '',
};

export const SignUp = () => {
  let [data, setData] = useState(obj);
  let navigate = useNavigate();
  const toast = useToast();

  let handleChangeSignUp = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://sushreebackendapi.onrender.com/data`, data)
      .then((res) => {
        console.log('Response:', res.data);

        // Show toast notification for successful signup
        toast({
          title: 'Signup Successful',
          status: 'success',
          duration: 6000,
          isClosable: true,
          position: 'top', 
        });

        setData(obj);
        navigate('/');
      })
      .catch((err) => {
        console.error('Error:', err);

        // Show toast notification for invalid credentials
        toast({
          title: 'Invalid Credentials',
          status: 'error',
          duration: 6000,
          isClosable: true,
          position: 'top', 
        });
      });
  };

  return (
    <Box textAlign="center" p={8}>
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mt={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChangeSignUp}
              required
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChangeSignUp}
              required
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChangeSignUp}
              required
            />
          </FormControl>
          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              name="age"
              value={data.age}
              onChange={handleChangeSignUp}
              required
            />
          </FormControl>
          <FormControl id="profession">
            <FormLabel>Profession</FormLabel>
            <Select
              name="profession"
              value={data.profession}
              onChange={handleChangeSignUp}
              required
            >
              <option value="">---</option>
              <option value="itField">IT Field</option>
              <option value="business">Business</option>
              <option value="student">Student</option>
            </Select>
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
