import React from 'react';
import { Spinner, Flex, Text } from '@chakra-ui/react';

const LoadingIndicator = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      <Text ml={4} fontSize="xl">
        Loading...
      </Text>
    </Flex>
  );
};

export default LoadingIndicator;
