# **Client management graphql**

A graphQL back end has been added to the project in order to store the clients.
GraphQL back end Github URL is https://github.com/ReactMrk/graphql-backend

Use proper node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Exercise 1A.**

Create two new endpoints on graphQL back end app.

- getClient endpoint should return the client that matches the email passed as a parameter.
- removeClient endpoint should delete the client that matches the email passed as a parameter.

Use GraphQL playground to test new endpoints.

**Exercise 1B.**

In Client type, add a calculated field called netSalary as a Float. In order to calculate it, the following algorithm is needed.

await new Promise((resolver) => {
setTimeout(() => resolver(client.grossSalary / 2), 2000);
});

As you notice, it takes somes time to calculate this field, in forder to save times, this field should be only calculate when is requested.

Use GraphQL playground to test new endpoints.

**Exercise 2A.**
In CustomerForm.jsx, use useMutation in change function submitEmployee in order to add customers using graphQL.

**Exercise 2B.**
In CustomerContext.js use useQuery in order to load the clients stored in graphQL back end.

**Exercise 3.**
How you already notice, the app is too slow, we know that fields address and netSalary don't need to be displayed when app is loaded, could the app be faster?
Create a new button using ExtraFields.jsx that will trigger a request (using useLazyQuery) to get and display address and netSalary fields.
Notice that a new query should be create on client-queries.js and the other ones should be modified.

**Extra**
The request to get address and netSalary fields takes a lot of time, the string "Loading..." should be displayed instead of "Show more..." button while request is in progress.
