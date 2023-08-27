import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Input,
  Select,Flex,Text,
} from '@chakra-ui/react';
import { Box, Stack, Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import SingleCrypto from './SingleCrypto';
import { Pagination } from '../Components/Pagination';


const LoadingIndicator = () => {
  return (
    <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Stack spacing={4}>
        <Skeleton height="20px" width="200px" />
        <Skeleton height="20px" width="150px" />
        <Skeleton height="20px" width="100px" />
      </Stack>
    </Box>
  );
};

export const Crypto = () => {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [Currency, setCurrency] = useState('INR');
  const coinsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const getCoinsData = () => {
      const params = search ? { coin: search } : {};
      const currencyParam = Currency ? `&vs_currency=${Currency}` : '';
      setIsLoading(true); 
      axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${Currency}${currencyParam}`, {
          params,
        })
        .then((res) => {
          setData(res.data);
          setIsLoading(false); 
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false); 
        });
    };

    getCoinsData();
  }, [search, Currency]);

  useEffect(() => {
    if (order) {
      const sortedData = [...data];
      if (order === 'SortByAsc') {
        sortedData.sort((a, b) => a.current_price - b.current_price);
      } else if (order === 'SortByDesc') {
        sortedData.sort((a, b) => b.current_price - a.current_price);
      }
      setData(sortedData);
    }
  }, [order]);

  const totalPages = Math.ceil(data.length / coinsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ background: '#f7f7f7', padding: '10px' }}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Sorting By Price
          </Text>
          <Select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            bg="white"
            border="1px solid #ccc"
            borderRadius="md"
          >
            <option value="">--------</option>
            <option value="SortByAsc">Sort by Asc</option>
            <option value="SortByDesc">Sort by Desc</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Select Your Favorite Currency
          </Text>
          <Select
            value={Currency}
            onChange={(e) => setCurrency(e.target.value)}
            bg="white"
            border="1px solid #ccc"
            borderRadius="md"
            w="150px"
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <Text fontSize="xl" fontWeight="bold" mr={2}>
            Search Data
          </Text>
          <Input
            className="searchAddress"
            placeholder="Search Data"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            bg="white"
            border="1px solid #ccc"
            borderRadius="md"
          />
        </Flex>
      </Flex>
      {isLoading ? ( 
        <LoadingIndicator />
      ) : (
        <>
          <TableContainer>
            <Table className="table">
              <Thead>
                <Tr>
                  <Th>Coins</Th>
                  <Th>Price</Th>
                  <Th>24 hour Change</Th>
                  <Th>Market Cap</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.slice((currentPage - 1) * coinsPerPage, currentPage * coinsPerPage).map((coin) => (
                  <Tr className="Coinsid" key={coin.id}>
                    <Td className="Coins">
                      <Image
                        src={coin.image}
                        onClick={() => setSelectedCoin(coin)}
                        style={{ cursor: 'pointer', border: '1px solid #ccc', borderRadius: '50%' }}
                        alt={coin.name}
                        boxSize="50px"
                        marginRight={4}
                      />
                      {coin.name}
                    </Td>
                    <Td className="Price" onClick={() => setSelectedCoin(coin)} style={{ cursor: 'pointer' }}>
                      {coin.current_price}
                    </Td>
                    <Td className="24-hour-Change" onClick={() => setSelectedCoin(coin)} style={{ cursor: 'pointer' }}>
                      {coin.price_change_percentage_24h}
                    </Td>
                    <Td className="Market-Cap" onClick={() => setSelectedCoin(coin)} style={{ cursor: 'pointer' }}>
                      {coin.market_cap}
                    </Td>
                    <Td className="delete" style={{ cursor: 'pointer', color: 'red' }}>
                      Delete
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          <SingleCrypto coinData={selectedCoin} isOpen={selectedCoin !== null} onClose={() => setSelectedCoin(null)} />
        </>
      )}
    </div>
  );
};
