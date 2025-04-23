import { gql } from '@apollo/client';

const customerFragment = gql`
  fragment customerFields on Customer {
    name
    email
    grossSalary
    phone
  }
`;

const GET_CUSTOMERS = gql`
  query Query {
    getCustomers {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const ADD_CUSTOMER = gql`
  mutation AddCustomer($customer: InputCustomer) {
    addCustomer(customer: $customer) {
      ...customerFields
    }
  }
  ${customerFragment}
`;

const GET_CUSTOMER_EXTRA_FIELDS = gql`
  query GetCustomer($email: String) {
    getCustomer(email: $email) {
      address
      netSalary
    }
  }
`;

export { GET_CUSTOMERS, ADD_CUSTOMER, GET_CUSTOMER_EXTRA_FIELDS };