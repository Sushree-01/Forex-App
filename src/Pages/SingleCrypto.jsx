import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Box, Image, Text } from '@chakra-ui/react';

function SingleCrypto({ coinData, isOpen, onClose }) {
    if (!coinData) {
        return null;
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="gray.800" color="white" borderRadius="md">
                <ModalHeader fontSize="xl">{coinData.name} Details</ModalHeader>
                <ModalCloseButton color="white" />
                <ModalBody>
                    <Box display="flex" alignItems="center" marginBottom="4">
                        <Image src={coinData.image} alt={coinData.name} boxSize="50px" marginRight="2" borderRadius="full" />
                        <Text fontWeight="semibold" fontSize="lg">{coinData.name} ({coinData.symbol})</Text>
                    </Box>
                    <Text>Market Cap Rank: {coinData.market_cap_rank}</Text>
                    <Text>Current Price: ${coinData.current_price}</Text>
                    <Text>Price Change (24h): {coinData.price_change_24h}%</Text>
                    <Text>Total Volume: {coinData.total_volume}</Text>
                    <Text>Low (24h): ${coinData.low_24h}</Text>
                    <Text>High (24h): ${coinData.high_24h}</Text>
                    <Text>Total Supply: {coinData.total_supply}</Text>
                    <Text>Max Supply: {coinData.max_supply}</Text>
                    <Text>Circulating Supply: {coinData.circulating_supply}</Text>
                    <Text>All Time High (ATH): ${coinData.ath}</Text>
                    <Text>Last Updated: {new Date(coinData.last_updated * 1000).toLocaleString()}</Text>
                </ModalBody>
                <ModalFooter justifyContent="center">
                    <Text fontSize="sm">Data provided by CoinGecko API</Text>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default SingleCrypto;
