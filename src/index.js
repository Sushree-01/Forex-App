import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ChakraProvider } from '@chakra-ui/react'; // Import ChakraProvider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter> 
      <ChakraProvider>
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </ChakraProvider>
    </BrowserRouter>

);

reportWebVitals();




