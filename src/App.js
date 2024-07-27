import './App.css';
import {useEffect, useState} from "react";
import Coin from "./components/Coin/Coin.jsx";

const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready()
    }, [])

    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1);
    };

    return (
        <div className="App">
            <h1>Click the Coin!</h1>
            <h2>Score: {score}</h2>
            <Coin incrementScore={incrementScore} />
        </div>
    );
}

export default App;
