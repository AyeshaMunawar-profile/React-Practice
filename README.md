# NOTES:
## Basics
1) _**Package-lock.json**_ stores all the versions of the dependencies and sub dependencies so if you want to install the latest version of the dependencies following the rules set in package.json delete the package-lock.json and run `npm install` again 
2) If you run npm install without package-lock-json it will update the version to the latest compatable version but of you have package-lock.json it will lock it to that version 
3) Whenever you return a component _**there should be always one top level element in the component**_ so wrap all the jsx elements inside one tag i.e. div or react fragment so that not more than one element is competing to be the top level element of the component 
4) `React.Fragment` is wrapping tag with no style it is a professional practice to wrap all the jsx element inside a react fragment tag `<> </>` . I t alows us to group multiple children elements without adding extra node to the **DOM**
5) `React Hooks` are a way of adding dynamic functionality to a React component you don't change the DOM directly now you let the React handle it through virtual DOM . A function that gets triggered during the lifecycle of a React component and can be used to alter the value of the variable or a state 
   



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
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
