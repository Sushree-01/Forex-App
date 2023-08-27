import React from 'react';
import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';

export const Investment = () => {
  return (
    <Box p={8}>
      <Heading as="h2" size="xl" mb={4}>
        Investment Opportunities
      </Heading>
      <Text fontSize="lg" mb={6}>
        Explore various investment opportunities in the forex market and cryptocurrencies.
      </Text>
      <Flex align="center" justify="space-between" mb={6}>
        <Box flex="1" mr={4}>
          <Image src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-163069-Cropped-scaled.jpg" alt="Forex Investment" borderRadius="md" />
        </Box>
        <Box flex="1">
          <Heading as="h3" size="lg" mb={2}>
            Forex Trading
          </Heading>
          <Text>
            Participate in the exciting world of forex trading and take advantage of global currency fluctuations.
          </Text>
          <Button mt={4} colorScheme="blue">
            Learn More
          </Button>
        </Box>
      </Flex>
      <Flex align="center" justify="space-between">
        <Box flex="1" mr={4} w="1010px">
          <Image src="https://as1.ftcdn.net/v2/jpg/02/04/19/58/1000_F_204195834_M0hoFPniJml5EOogv93hMDM3KuNyqmF2.jpg" alt="Crypto Investment" borderRadius="md" />
        </Box>
        <Box flex="1">
          <Heading as="h3" size="lg" mb={2}>
            Cryptocurrency Investments
          </Heading>
          <Text>
            Invest in a diverse range of cryptocurrencies and capitalize on the potential for high returns.
          </Text>
          <Button mt={4} colorScheme="blue">
            Learn More
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
