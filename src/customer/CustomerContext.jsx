import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/client-queries';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useQuery(GET_CLIENTS, { onCompleted: data => {
    setCustomers(data?.getClients);
  }});

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };