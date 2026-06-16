import React, { useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS_LIST } from '../queries/customer-queries';

const CustomerContext = createContext();

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useQuery(GET_CUSTOMERS_LIST, {
    onCompleted: (data) => {
      setCustomers(data?.getCustomersList);
    },
  });

  return (
    <CustomerContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};

export { CustomerContext, CustomerProvider };
