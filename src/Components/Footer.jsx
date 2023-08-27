import React from 'react';
import { Box, Flex, Text, Link, Divider } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={6}>
      <Divider borderColor="gray.600" />
      <Flex justifyContent="space-between" alignItems="center" px={6}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Forex App
          </Text>
          <Text fontSize="sm" mt={2}>
            A comprehensive platform for tracking cryptocurrencies and forex rates.
          </Text>
        </Box>
        <Box>
          <Text fontSize="md" mb={2}>
            Contact Us
          </Text>
          <Text fontSize="sm">Email: info@forexapp.com</Text>
          <Text fontSize="sm">Phone: +1 (123) 456-7890</Text>
        </Box>
        <Box>
          <Text fontSize="md" mb={2}>
            Follow Us
          </Text>
          <Flex>
            <Link href="#" mr={2}>
              Facebook
            </Link>
            <Link href="#" mr={2}>
              Twitter
            </Link>
            <Link href="#" mr={2}>
              Instagram
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Divider borderColor="gray.600" mt={6} />
      <Text textAlign="center" mt={4}>
        © 2023 Forex App. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
