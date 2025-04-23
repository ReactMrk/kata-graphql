import { gql } from '@apollo/client';

const clientFragment = gql`
  fragment clientFields on Client {
    name
    email
    grossSalary
    phone
  }
`;

const GET_CLIENTS = gql`
  query Query {
    getClients {
      ...clientFields
    }
  }
  ${clientFragment}
`;

const ADD_CLIENT = gql`
  mutation AddClient($client: InputClient) {
    addClient(client: $client) {
      ...clientFields
    }
  }
  ${clientFragment}
`;

const GET_CLIENT_EXTRA_FIELDS = gql`
  query GetClient($email: String) {
    getClient(email: $email) {
      address
      netSalary
    }
  }
`;

export { GET_CLIENTS, ADD_CLIENT, GET_CLIENT_EXTRA_FIELDS };