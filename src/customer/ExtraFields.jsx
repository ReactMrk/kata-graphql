import React from "react";
import { useState } from "react";
import { useLazyQuery } from '@apollo/client';

const ExtraFields = ({ email }) => {
  const [displayExtraFields, setDisplayExtraFields] = useState(false);
  const handleDisplayExtraFieldsClick = () => {
    setDisplayExtraFields(true);
  };
  if (!displayExtraFields) {
    return <button className="show-more-button" onClick={handleDisplayExtraFieldsClick}>Show more...</button>;
  }
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