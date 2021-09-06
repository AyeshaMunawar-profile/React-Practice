# NOTES:

Sample data got from : [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

## Basics

1) _**Package-lock.json**_ stores all the versions of the dependencies and sub dependencies so if you want to install
   the latest version of the dependencies following the rules set in package.json delete the package-lock.json and
   run `npm install` again
2) If you run npm install without package-lock-json it will update the version to the latest compatable version but of
   you have package-lock.json it will lock it to that version
3) Whenever you return a component _**there should be always one top level element in the component**_ so wrap all the
   jsx elements inside one tag i.e. div or react fragment so that not more than one element is competing to be the top
   level element of the component
4) `React.Fragment` is wrapping tag with no style it is a professional practice to wrap all the jsx element inside a
   react fragment tag `<> </>` . I t alows us to group multiple children elements without adding extra node to the **
   DOM**
5) `React Hooks` are a way of adding dynamic functionality to a React component you don't change the DOM directly now
   you let the React handle it through virtual DOM . A function that gets triggered during the lifecycle of a React
   component and can be used to alter the value of the variable or a state
6) Don't directly call setState method in the onclick it will result in a render loop give a reference to a function
   donot call it there eg. `onClick ={HandleIncrement}` not `onClick ={HandleIncrement()}`. Either create an arrow
   function or reference a function created somewhere else i.e. give address ot it not call it

## Props

1) Prop is a variable that a component can pass to its children components
2) You can use destructuring in the component and can also rename the props name in that component
   eg. `const {name: fullName}= props`
3) You can provide props to a component using spread operator `<component {...props} />`
4) You can use map to loop over an array of elements and return a component for each entry with key passed as a unique
   value to help react identify it in DOM

## Destructuring & Spread Operator Examples

1) `[a,b, ...rest] = [10,20,30,40,50,60]`
2) nested destructuring

`
const { name, id, address: {zone, streetNo, Province},salary}
`

## Maps and loops in JSX

1) Maps are used to return jsx component for all entries of a iterable data structure
2) Map is a pure function as the output is predictable and same of same input
3) Map vs foreach . Foreach has unpredictable output possibility as you cannot return also in certain cases but in map
   you have to return for every entry
4) Map implicit returns an entry for each corresponding entry of an iterable foreach doesn't . map implicitly returns a
   array of result values foreach doesn't. e.g.
   `{employees.map(employee=>{<h1>{employee.name}</h1>})}`
   Map returns a list of employee jsx elements to be added to the DOM foreach doesn't return it

## Spread Operator

1) `...` before array or object
2) concatenation of multiple array arr2= [...arr0,3,...arr1]
3) Using spread operator we can pass attributes of an object to a component instead of the object it
   self `<component {...props} />`

## Conditional Rendering

1) `&&` left part is check right part is returned if left condition is fulfilled
2) use this to check condition for `undefined` and `empty value`
3) You can also use `&&` to assign a value if it exists e.g. `const value = employee && employee[0]`
4) Ternary Operator `{isLoggedIn ? (<component1 />):(<component2 />)}`

## React Lifecycle of a functional component

1) Three stages Mounting , Updating , Unmounting
2) **_Mounting_** : first time the component will be rendered on the screen . It runs once for every time component gets
   rendered on the screen
3) **_Updating_** : Phase run many times depends on the change
    1) Props passed are changed
    2) Component's state changed
4) **_Unmounting_** : No longer want to show a component on the screen page changes or hide the component
5) **_Use Effect Hook_** : useEffect is going to run when ever a component mounts and rerender and even before
   unmounting based on its design . It runs once the component mounts and then when ever it rerender , and even before
   unmounting based on the arguments provided to it
6) By default, it runs on mounting and on every update not on unmounting
7) To run useEffect on mounting use `useEffect(()=>{console.log("use effect ran)},[])`
8) for component unmount use return a function
   i.e. `useEffect(()=>{console.log("use effect ran) return ()=>{console.log("The component has unmounted")}},[])`
9) For update just pass the states in the second argument of the use effect so if that state or states change the use effect will run `useEffect(()=>{console.log("use effect ran)},[state1,state2])`

## UseEffect  & UseEffect with API requests
1) Use effect can act like all the three component life cycle methods componentDidMount , componentDidUpdate, componentWillUnmount
2) It's a professional practice t always have the second argument because absence of which will result in running the effect on every possible render and rerender
3) for a useEffect that return a function but in case of a specific state or states in second argument now it doesn't behaves like a componentWillUnmount but a cleanup function for that specific state or states 
   i.e. `useEffect(()=>{console.log("use effect ran) return ()=>{console.log("The component has unmounted")}},[state1])` now componentWillUnmount will run everytime sate1 changes. Its will act as a cleanup function it will run right before the state updates and then the update will run again so component updates then cleanup then update again . cleanup function also rus before the component unmounts

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
