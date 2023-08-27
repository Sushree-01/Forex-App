import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { TredingCard } from '../Components/TredingCard';
import { Pagination } from '../Components/Pagination';


export const Trading = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 3;
  const fetchData = (currentPage) => {
    axios
      .get(`https://sushreebackendapi.onrender.com/forex?Page=${currentPage}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

 const totalPages = Math.ceil(data.length / coinsPerPage);
  
const handlePageChange = (pageNumber) => {
          setCurrentPage(pageNumber);
      };
  return (
    <Box p="4">
      <SimpleGrid columns={[1, 2, 3]} spacing="4">
        {data.map((ele) => (
          <TredingCard key={ele.id} {...ele} />
        ))}
      </SimpleGrid>
    <Pagination  totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange} />
    </Box>
  );
};
