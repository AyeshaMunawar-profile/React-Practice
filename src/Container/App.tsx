import React from 'react';
import './App.css';
import Counter from "../components/Counter/Counter"
import Posts from "../components/Posts/Posts";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                {/*<Counter />*/}
                <Posts appName={"Facebook"}/>
            </header>
        </div>
    );
}

export default App;
