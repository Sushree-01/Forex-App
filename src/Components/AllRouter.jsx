import React from 'react';
import {Route,Routes} from "react-router-dom"


import { Dashboard } from '../Pages/Dashboard';
import { Trading } from '../Pages/Trading';
import { Investment } from '../Pages/Investment';
import { Notfound } from '../Pages/Notfound';
import { Login } from '../Pages/Login';
import { SignUp } from '../Pages/SignUp';
import { Partner } from '../Pages/Partner';
import { Crypto } from '../Pages/Crypto';
import SingleCryto from '../Pages/SingleCrypto';
import PrivateRoute from './privateRout';


export const AllRouter = () => {
  return (
    <Routes>
     <Route exact path="/" element={<Dashboard/>} />
  
     <Route path="/trading" element={
      <PrivateRoute>
        <Trading/>
        </PrivateRoute>
     } />
    
       
        <Route path="/investment" element={<Investment/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>

        <Route path="/partner" element={<Partner/>}/>


<Route path="/crypto" element={
 <PrivateRoute>
<Crypto/>
 </PrivateRoute>

}/>

   
        <Route path="/crypto/:id" element={<SingleCryto/>}/>
        <Route path="*" element={<Notfound/>} />
    </Routes>
  );
};
