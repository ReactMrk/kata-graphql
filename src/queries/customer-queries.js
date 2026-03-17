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
const ADD_CUSTOMER = gql`
  mutation AddCustomer($customer: InputCustomer) {
    addCustomer(customer: $customer) {
      ...customerFields
    }
  }
  ${customerFragment}
`;

export { ADD_CUSTOMER };
