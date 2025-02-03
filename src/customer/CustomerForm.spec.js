import React, { useContext } from "react";
import { render, screen, waitFor } from "@testing-library/react";  
import { useMutation } from '@apollo/client';
import userEvent from '@testing-library/user-event';
import { ADD_CLIENT } from '../queries/client-queries';
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
const client = {
  name: 'John',
  address: 'Diagonal 45',
  email: 'john@sky.uk',
  phone: '0777777777',
  grossSalary: 500000
} 

const setCustomers = jest.fn();

const fillClientInputs = async () => {
  userEvent.type(screen.getByPlaceholderText('Name'), 'John');
  await waitFor(() => expect(screen.getByPlaceholderText('Name')).toHaveValue('John'));
  userEvent.type(screen.getByPlaceholderText('Email'), 'john@sky.uk');
  await waitFor(() => expect(screen.getByPlaceholderText('Email')).toHaveValue('john@sky.uk'));
  userEvent.type(screen.getByPlaceholderText('Phone'), '0777777777');
  await waitFor(() => expect(screen.getByPlaceholderText('Phone')).toHaveValue('0777777777'));
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
  it.skip('should update clients variable from context when a new client is added and onCompleted is defined when useMutation is defined', async () => {
    const addClient = jest.fn();
    useMutation.mockImplementation((_, { onCompleted }) => {
      onCompleted({addClient: client });
      return [addClient];
    });

    renderComponent();

    expect(useMutation).toHaveBeenCalledWith(ADD_CLIENT, { onCompleted: expect.any(Function) });
    await fillClientInputs();

    userEvent.click(screen.getByRole('button', { name: 'Add customer' }));

    await waitFor(() => {
      expect(addClient).toHaveBeenCalledWith({
        variables: {
          client
        }
      });
    });
    expect(setCustomers).toHaveBeenCalledWith(client);
  });

  it('should update clients variable from context when a new client is added and onCompleted is defined when request addClient is triggered', async () => {
    const addClient = jest.fn().mockImplementation(({ onCompleted }) => {
      onCompleted({ addClient: client });
    });
    useMutation.mockReturnValue([addClient]);
    
    renderComponent();
    expect(useMutation).toHaveBeenCalledWith(ADD_CLIENT);

    await fillClientInputs();
    userEvent.click(screen.getByRole('button', { name: 'Add customer' }));

    await waitFor(() => {
      expect(addClient).toHaveBeenCalledWith({ variables: { client }, onCompleted: expect.any(Function)})
      expect(setCustomers).toHaveBeenCalledWith(client);
    });
  });
});