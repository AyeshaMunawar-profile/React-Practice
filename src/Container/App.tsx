import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "../components/Counter/Counter"
import Posts from "../components/Posts/Posts";

const App = () => {
    const [showCounter, setShowCounter] = useState(false);
    const buttonStyling = {
        padding: "10px 30px",
        backgroundColor: "lavender",
        fontSize: "20px",
        maxWidth: "200px",
        minWidth: "150px",
        borderRadius: "30px"
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => {
                    setShowCounter(!showCounter)
                }} style={buttonStyling}>ToggleCounter
                </button>
                {showCounter && <Counter/>}
                {/*<Posts appName={"Facebook"}/>*/}
            </header>
        </div>
    );
}

export default App;
