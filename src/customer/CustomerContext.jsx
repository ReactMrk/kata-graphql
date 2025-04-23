import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };