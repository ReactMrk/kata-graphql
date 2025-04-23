import React from "react";
import { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { GET_CLIENT_EXTRA_FIELDS } from '../queries/client-queries';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const [getClient, { data: getClientResponse, loading }] = useLazyQuery(GET_CLIENT_EXTRA_FIELDS);
  const clientExtraFields = getClientResponse?.getClient;
  const handleDisplayExtraFieldsClick = () => {
    setDisplayExtraFields(true);
    getClient({
      variables: { email }
    });
  };
  if (!displayExtraFields) {
    return <button className="show-more-button" onClick={handleDisplayExtraFieldsClick}>Show more...</button>;
  }
  if (loading) return <p style={{ color: 'blue' }}>Loading...</p>
  return (
    <>
      <span>Net Salary: {clientExtraFields?.netSalary}</span>
      <br />
      <span>Address: {clientExtraFields?.address}</span>
      <br />
    </>
  )
};

export default ExtraFields;