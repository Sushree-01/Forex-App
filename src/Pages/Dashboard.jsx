import React from 'react';
import { Box, Flex, Link as ChakraLink, Text,Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import Footer from "../Components/Footer";



export const Dashboard = () => {
  return (
    <>
      <Box w="100%" border="0px solid red" justifyContent="space-evenly" p={4}>
        <Flex justifyContent="space-around">
          <ChakraLink as={Link} to="/trading">Partnership</ChakraLink>
          <ChakraLink as={Link} to="/investment">Investing</ChakraLink>
          <ChakraLink as={Link} to="/crypto">Promotions</ChakraLink>
          <ChakraLink as={Link} to="/treding">Start Trading</ChakraLink>
          <ChakraLink as={Link} to="/investment">Trading Platforms</ChakraLink>
        
          <ChakraLink as={Link} to="*">About us</ChakraLink>
        </Flex>
      </Box>

      <Box
        w="100%"
        h="auto"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        p={8}
        borderRadius={8}
        mt={4}
      >
        <Flex alignItems="center">
          <Box flex="1">
            <Text fontSize="50px" fontWeight="bold" color="white" mb={4}>
              Get 200% off on your first Deposit
            </Text>
            <Button mt="40px" size="md" colorScheme="blue">
              Get My Bonus
            </Button>
          </Box>
          <Box flex="1" ml={8} alignContent={"center"}>
            <img
              src="https://photos.peopleimages.com/picture/202212/2573359-success-woman-and-stock-market-trading-celebration-and-winner-of-digital-forex-economy-growth-or-financial-deal.-happy-trader-laptop-and-celebrate-finance-investment-crypto-sale-and-fintech-data-fit_400_400.jpg"
              alt="Celebration"
              width="100%"
            />
          </Box>
        </Flex>
      </Box>
      <br />
    <Box  bg= "rgb(122,122,224)"
background= "linear-gradient(90deg, rgba(122,122,224,1) 37%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)" p="20px" pb="30px">
    <Text mt={4} fontSize="xl" textAlign="center">
       Forex Vision
      </Text>
      <Text mt={4} fontSize="xl" textAlign="center" >
        "Successful forex trading is not about being right all the time, but
        about managing your losses and capitalizing on your wins." - Mark
        Minervini
      </Text>
    </Box>
      
   
      <Box mt="30px" bg="skyBlue" border="1px solid black" p="10px">
  <Flex justifyContent="space-around">
    <Box>
      <Text color="black">Instant deposit with 0 fees</Text>
    </Box>
    <Box>
      <Text fontSize="xl" color="black">M.PRO</Text>
      <Text color="black">Industry best trading conditions</Text>
    </Box>
    <Box>
      <Text fontSize="xl" color="black">60%</Text>
      <Text color="black">Up to 60% Rev. Share for IB's</Text>
    </Box>
    <Box>
      <Text fontSize="xl" color="black">600%</Text>
      <Text color="black">Credit bonus up to 200%</Text>
    </Box>
    <Box>
      <Text color="black">Mobile friendly and handy</Text>
    </Box>
  </Flex>
</Box>


     
      <br />
      <br />
      <Box mt="30px">
        <Flex justifyContent="space-between" align="center">
          <Flex align="center">
            <Box
              border="1px solid skyBlue"
              w="40px"
              h="40px"
              bgColor="skyBlue"
              rounded="full"
              p={4}
              mr={4}
            ></Box>
            <Box>
              <Text fontSize="xl">FIND INVESTORS</Text>
              <Text>
                Pick traders that suit you. Don't worry, we will help you pick
                the best.
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box
              border="1px solid skyBlue"
              w="40px"
              h="40px"
              bgColor="skyBlue"
              rounded="full"
              p={4}
              mr={4}
            ></Box>
            <Box>
              <Text fontSize="xl">DEPOSIT NOW</Text>
              <Text>
                Discover thousands of experienced traders and copy their trades.
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box
              border="1px solid skyBlue"
              w="40px"
              h="40px"
              bgColor="skyBlue"
              rounded="full"
              p={4}
              mr={4}
            ></Box>
            <Box>
              <Text fontSize="xl">SUBSCRIBE</Text>
              <Text>
                Discover thousands of experienced traders and copy their trades.
              </Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Box
              border="1px solid skyBlue"
              w="40px"
              h="40px"
              bgColor="skyBlue"
              rounded="full"
              p={4}
              mr={4}
            ></Box>
            <Box>
              <Text fontSize="xl">Get Money</Text>
              <Text>Relax and get Profit!</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box mt={6} mb={2}display={"grid"} justifyContent={"center"}>
        <img
          width="100%"
          src="https://thumbs.dreamstime.com/z/business-people-economic-recovery-business-concept-business-people-economic-recovery-business-concept-105799035.jpg?w=992"
          alt="err"
        />
      </Box>

      <Button width="200px" bg="purple" color="white" rounded="full" mt={4}>
        START TRADING
      </Button>

      <Box p={4}>
        <Text fontSize="4xl">Deposit and Withdraw</Text>
        <Text>
          Team up with one of the most trusted brokers. Earn weekly commission
          and grow your passive earnings!
        </Text>
      </Box>

      <Flex align="center" p={4} justifyContent="space-around">
  <Box textAlign="center" bg="purple.400" p={4} borderRadius="md" boxShadow="md">
    <Text fontSize="xl" color="white">MasterCard Visa</Text>
    <Text  color="black.400">Communication 0.2%</Text>
    <Text  color="black.400">Withdraw 1.5%</Text>
  </Box>
  
  <Box textAlign="center" bg="teal.400" p={4} borderRadius="md" boxShadow="md">
    <Text fontSize="xl" color="white">Rupay Card</Text>
    <Text color="black.400">Communication 0%</Text>
    <Text color="black.400">Withdraw 0%</Text>
  </Box>
  
  <Box textAlign="center" bg="blue.400" p={4} borderRadius="md" boxShadow="md">
    <Text fontSize="xl" color="white">VisaCard</Text>
    <Text  color="black.400">Communication 0.8%</Text>
    <Text  color="black.400">Withdraw 2.1%</Text>
  </Box>
</Flex>


      <Footer />
     
    </>
  );
};
