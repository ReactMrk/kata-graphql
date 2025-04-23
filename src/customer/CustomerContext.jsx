import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../queries/customer-queries';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useQuery(GET_CUSTOMERS, { onCompleted: data => {
    setCustomers(data?.getCustomers);
  }});

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };