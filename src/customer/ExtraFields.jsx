import React from "react";
import { useState } from "react";
import { useLazyQuery } from '@apollo/client';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const [getClient, { data: getClientResponse }] = useLazyQuery();
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