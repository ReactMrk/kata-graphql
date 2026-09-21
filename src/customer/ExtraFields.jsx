import React from 'react';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CUSTOMER_EXTRA_FIELDS } from '../queries/customer-queries';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const [getCustomerExtraFields, { data: customerExtraFieldsResponse }] =
    useLazyQuery(GET_CUSTOMER_EXTRA_FIELDS);
  const handleDisplayExtraFieldsClick = () => {
    setDisplayExtraFields(true);
    getCustomerExtraFields({
      variables: { email },
    });
  };
  if (!displayExtraFields) {
    return (
      <button className='show-more-button' onClick={handleDisplayExtraFieldsClick}>
        Show more...
      </button>
    );
  }
  return (
    <>
      <span>Address: {customerExtraFieldsResponse?.getCustomer?.address}</span>
    </>
  );
};

export default ExtraFields;
