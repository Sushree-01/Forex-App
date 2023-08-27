import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

let obj = {
 
  email: "",
  password: "",
 
};


export const Login = () => {
  let [data, setData] = useState(obj);
  let navigate = useNavigate();


  let handleChangeLogIn= (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://sushreebackendapi.onrender.com/data`, data)
  .then((res) => {
    console.log("Response:", res.data);
    alert("Login Successful");
    setData(obj);
    navigate("/");
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Invalid Credentials");
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
            name='email'
              type="email"
              value={data.email}
              onChange={handleChangeLogIn}
              required
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
            name='password'
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


