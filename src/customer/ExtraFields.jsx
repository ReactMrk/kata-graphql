import React from "react";
import { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { GET_CUSTOMER_EXTRA_FIELDS } from '../queries/customer-queries';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const [getCustomer, { data: customerCustomerResponse, loading }] = useLazyQuery(GET_CUSTOMER_EXTRA_FIELDS);
  const customerExtraFields = customerCustomerResponse?.getCustomer;
  const handleDisplayExtraFieldsClick = () => {
    setDisplayExtraFields(true);
    getCustomer({
      variables: { email }
    });
  };
  if (!displayExtraFields) {
    return <button className="show-more-button" onClick={handleDisplayExtraFieldsClick}>Show more...</button>;
  }
  if (loading) return <p style={{ color: 'blue' }}>Loading...</p>
  return (
    <>
      <span>Net Salary: {customerExtraFields?.netSalary}</span>
      <br />
      <span>Address: {customerExtraFields?.address}</span>
      <br />
    </>
  )
};

export default ExtraFields;