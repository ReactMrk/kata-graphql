# **Client management graphql**

Use proper node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

\
**_-- NOTE: this first exercise needs to be completed on the 'graphql-backend' project, linked below --_**

**Exercise 1A.**
A graphQL back end has been added to the project in order to store the clients.
GraphQL backend Github URL is https://github.com/ReactMrk/graphql-backend

Create three new endpoints on the GraphQL backend:

1. getCustomersList should return the full list of customers
2. getCustomer endpoint should return the customer that matches the email passed as a (mandatory) parameter.
3. removeCustomer endpoint should delete the customer that matches the email passed as a parameter.

Use GraphQL playground to test new endpoints.

\
**_-- NOTE: The remaining exercises need to be completed on the 'kata-graphql' project --_**

**Exercise 1B.**

Create the graphQL queries/mutations for each new endpoint in customer-queries.js.

Note: if you are using IntelliJ, your IDE might mark certain parts of this file in red,
as if there were errors. But you can safely ignore them, and it should still work regardless.

**Exercise 2A.**

In CustomerForm.jsx, use a useMutation inside the submitEmployee function in order to add customers using graphQL.

**Exercise 2B.**

In CustomerContext.js use useQuery in order to load the customers stored in graphQL back end.

**Exercise 3.**

Create a new button using ExtraFields.jsx that will trigger a request (using useLazyQuery) to get and display address field only.
Note that a new query should be created on customer-queries.js and the other ones should be modified.


In CustomerSearchAndRemove.jsx, create a new input field which accepts an email address. Implement the logic for the two buttons:

- 4.1. Search - displays the customer with the email address matching the input
- 4.2. Remove - deletes the customer with the email address matching the input

![Demo](https://github.com/ReactMrk/lifecycle-kata/blob/main/src/assets/hooks-kata-solution-kata.gif?raw=true)
