import React, { useContext } from "react";
import { render, screen, waitFor } from "@testing-library/react";  
import { useMutation } from '@apollo/client';
import userEvent from '@testing-library/user-event';
import { ADD_CUSTOMER } from '../queries/customer-queries';
import CustomerForm from "./CustomerForm";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn()
}));

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: jest.fn()
}));

const renderComponent = () => render(<CustomerForm />);
const customer = {
  name: 'John',
  address: 'Diagonal 45',
  email: 'john@sky.uk',
  grossSalary: 500000
} 

const setCustomers = jest.fn();

const fillCustomerInputs = async () => {
  userEvent.type(screen.getByPlaceholderText('Name'), 'John');
  await waitFor(() => expect(screen.getByPlaceholderText('Name')).toHaveValue('John'));
  userEvent.type(screen.getByPlaceholderText('Email'), 'john@sky.uk');
  await waitFor(() => expect(screen.getByPlaceholderText('Email')).toHaveValue('john@sky.uk'));
  userEvent.type(screen.getByPlaceholderText('Address'), 'Diagonal 45');
  await waitFor(() => expect(screen.getByPlaceholderText('Address')).toHaveValue('Diagonal 45'));
  userEvent.type(screen.getByPlaceholderText('Gross Salary'), '500000');
  await waitFor(() => expect(screen.getByPlaceholderText('Gross Salary')).toHaveValue(500000), { timeout: 3000 });
}

describe('CustomerForm', () => {
  beforeEach(() => {
    useContext.mockReturnValue({ setCustomers });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it.skip('should update customers variable from context when a new customer is added and onCompleted is defined when useMutation is defined', async () => {
    const addCustomer = jest.fn();
    useMutation.mockImplementation((_, { onCompleted }) => {
      onCompleted({addCustomer: customer });
      return [addCustomer];
    });

    renderComponent();

    expect(useMutation).toHaveBeenCalledWith(ADD_CUSTOMER, { onCompleted: expect.any(Function) });
    await fillCustomerInputs();

    userEvent.click(screen.getByRole('button', { name: 'Add customer' }));

    await waitFor(() => {
      expect(addCustomer).toHaveBeenCalledWith({
        variables: {
          customer
        }
      });
    });
    expect(setCustomers).toHaveBeenCalledWith(customer);
  });

  it('should update customers variable from context when a new customer is added and onCompleted is defined when request addCustomer is triggered', async () => {
    const addCustomer = jest.fn().mockImplementation(({ onCompleted }) => {
      onCompleted({ addCustomer: customer });
    });
    useMutation.mockReturnValue([addCustomer]);
    
    renderComponent();
    expect(useMutation).toHaveBeenCalledWith(ADD_CUSTOMER);

    await fillCustomerInputs();
    userEvent.click(screen.getByRole('button', { name: 'Add customer' }));

    await waitFor(() => {
      expect(addCustomer).toHaveBeenCalledWith({ variables: { customer }, onCompleted: expect.any(Function)})
      expect(setCustomers).toHaveBeenCalledWith(customer);
    });
  });
});