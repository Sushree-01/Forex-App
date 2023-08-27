import React from 'react';
import { Button } from '@chakra-ui/react'; 

function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

export const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
    const pages = createArrayOfSize(totalPages).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <Button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
            variant={pageNumber === currentPage ? 'solid' : 'outline'} 
            colorScheme={pageNumber === currentPage ? 'blue' : 'gray'}
            size="sm"
            marginRight="1"
            
          >
            {pageNumber}
          </Button>
        );
      });
    
      return <div>{pages}</div>;
}
