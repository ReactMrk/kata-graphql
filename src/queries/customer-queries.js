import { gql } from '@apollo/client';

const customerFragment = gql`
  fragment customerFields on Customer {
    name
    email
    grossSalary
    address
    netSalary
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

export { GET_CUSTOMERS, ADD_CUSTOMER };