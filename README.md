Create and push a new branch using **git checkout -b kata-2b-your-name** and **git push -u origin kata-2b-your-name**

# **Client management with react and hooks**

The idea of our company is to create a large application to manage clients. Therefore, Client management, from the first session, has been redeveloped using React due to its scalability.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Tips:** commented code is the skeleton to complete the exercises.

**Info:** it's not a problem that clients are lost when website is reloaded because in a future an API will be used to get them.

**Exercise 1.**

Once a client is added to the list, the fields are not cleaned. The principal engineer tells you to fix the issue using useReduce, in order to avoid a set of functions, that modify the state, being triggered in a row.

Principal engineer would like to avoid this bad practise:<br />
**setName(''); <br />
setEmail(''); <br />
setPhone(''); <br />
setAddress(''); <br />**

When state updates are frequent and/or complex, useReducer provides better performance through its centralized update logic, avoiding unnecessary re-renders and excessive state management code.

**Could you also create a clear button?**

