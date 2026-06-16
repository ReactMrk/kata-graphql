import { gql } from '@apollo/client';

const customerFragment = gql`
  fragment customerFields on Customer {
    name
    email
    grossSalary
    address
  }
`;
const ADD_CUSTOMER = gql`
  mutation AddCustomer($customer: InputCustomer!) {
    addCustomer(customer: $customer) {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const GET_CUSTOMERS_LIST = gql`
  query GetCustomersList {
    getCustomersList {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const GET_CUSTOMER = gql`
  query GetCustomer($email: String!) {
    getCustomer(email: $email) {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const REMOVE_CUSTOMER = gql`
  mutation RemoveCustomer($email: String!) {
    removeCustomer(email: $email) {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const GET_CUSTOMER_EXTRA_FIELDS = gql`
  query GetCustomer($email: String!) {
    getCustomer(email: $email) {
      address
    }
  }
`;

export {
  ADD_CUSTOMER,
  GET_CUSTOMERS_LIST,
  GET_CUSTOMER,
  REMOVE_CUSTOMER,
  GET_CUSTOMER_EXTRA_FIELDS,
};
