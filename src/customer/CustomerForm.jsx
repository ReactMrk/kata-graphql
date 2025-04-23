import React, { useReducer, useContext } from 'react';
import { ADD_CUSTOMER } from '../queries/customer-queries';
import { CustomerContext } from './CustomerContext';
import { useMutation } from '@apollo/client';

const initalFormValue = {
    name: '',
    email: '',
    phone: '',
    address: '',
    grossSalary: ''
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.value
      }
    }
    case 'SET_EMAIL': {
      return {
        ...state,
        email: action.value
      }
    }
    case 'SET_PHONE': {
      return {
        ...state,
        phone: action.value
      }
    }
    case 'SET_ADDRESS': {
      return {
        ...state,
        address: action.value
      }
    }
    case 'SET_GROSS_SALARY': {
      return {
        ...state,
        grossSalary: action.value
      }
    }
    case 'CLEAR' : {
      return initalFormValue;
    }
  }
};

const CustomerForm = () => {
  const [form, dispatchForm] = useReducer(reducer, initalFormValue);
  const { setCustomers } = useContext(CustomerContext);
  // const [addCustomer] = useMutation(ADD_CUSTOMER, { onCompleted: data => setCustomers(data?.addCustomer) });
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const submitEmployee = () => {
    addCustomer(
      { 
        variables: {
          customer: { 
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            grossSalary: parseInt(form.grossSalary) || 0
          }
        },
        onCompleted: data => setCustomers(data?.addCustomer)
      }
    )
    dispatchForm({ type: 'CLEAR' });
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => dispatchForm({ type: 'SET_NAME', value: value.target.value})} value={form.name} />
      <input type="email" placeholder="Email" onChange={value => dispatchForm({ type: 'SET_EMAIL', value: value.target.value})} value={form.email} />
      <input type="tel" placeholder="Phone" onChange={value => dispatchForm({ type: 'SET_PHONE', value: value.target.value})} value={form.phone} />
      <input type="text" placeholder="Address" onChange={value => dispatchForm({ type: 'SET_ADDRESS', value: value.target.value})} value={form.address} />
      <input type="number" placeholder="Gross Salary" onChange={value => dispatchForm({ type: 'SET_GROSS_SALARY', value: value.target.value})} value={form.grossSalary} />
      <div style={{ marginTop: "10px", width: "100%" }}>
        <button onClick={() => submitEmployee()}>Add customer</button>
        <button onClick={() => dispatchForm({ type: 'CLEAR' })}>Clear</button>
      </div>
    </div>
  )
}

export default CustomerForm;