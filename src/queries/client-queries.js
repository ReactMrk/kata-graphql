import { gql } from '@apollo/client';

const clientFragment = gql`
  fragment clientFields on Client {
    name
    email
    grossSalary
    phone
    address
    netSalary
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

export { GET_CLIENTS, ADD_CLIENT };