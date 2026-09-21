import React from 'react';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const handleDisplayExtraFieldsClick = () => {
    setDisplayExtraFields(true);
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
