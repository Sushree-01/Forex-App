import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Select
} from '@chakra-ui/react';
import axios from 'axios';
// {
//   "name": "Payal",
//   "email": "payal@gmail.com",
//   "password": "121345",
//   "age": "23",
//   "profression": "student"
//   }
let obj = {
  name: "",
  email: "",
  password: "",
  age: "",
  profression: ""  
};

export const SignUp = () => {
  let [data, setData] = useState(obj);

  let handleChangeSignUp = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://sushreebackendapi.onrender.com/data`, data)
  .then((res) => {
    console.log("Response:", res.data);
    alert("Signup Successful");
    setData(obj);
  })
  .catch((err) => {
    console.error("Error:", err);
    alert("Invalid Credentials");
  });
  };

  return (
    <Box textAlign="center" p={8}>
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} mt={4}>

        <FormControl id="name">
            <FormLabel>name</FormLabel>
            <Input
              type="name"
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
          <FormControl id="profression">
            <FormLabel>Profession</FormLabel>
            <Select
              name="profression"  
              value={data.profression}
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
