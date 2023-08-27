import React from 'react';
import { Box, Image, Text, Heading, Badge, VStack } from '@chakra-ui/react';

export const TredingCard = ({
  id,
  image,
  name,
  current_price,
  market_cap,
  market_cap_rank,
  high_24h,
  low_24h,
  price_change_24h,
  market_cap_change_24h,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="md"
      maxW="sm"
    >
      <Image src={image} alt={id} />
      <VStack spacing="2" align="start" mt="3">
        <Heading size="md">{name}</Heading>
        <Text fontSize="xl" fontWeight="semibold">
          {current_price}
        </Text>
        <Text color="gray.500">{market_cap}</Text>
        <Badge colorScheme="green">{`Rank ${market_cap_rank}`}</Badge>
        <Text>{`High 24h: ${high_24h}`}</Text>
        <Text>{`Low 24h: ${low_24h}`}</Text>
        <Text>{`Price Change 24h: ${price_change_24h}`}</Text>
        <Text>{`Market Cap Change 24h: ${market_cap_change_24h}`}</Text>
      </VStack>
    </Box>
  );
};
