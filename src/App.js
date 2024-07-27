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
            <h1>Optima Coin</h1>
            <Coin incrementScore={incrementScore} />
            <h2 className={'Score'}>Score: {score}</h2>
        </div>
    );
}

export default App;
