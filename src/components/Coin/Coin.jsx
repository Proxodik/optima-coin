import './Coin.css';

const Coin = ({ incrementScore }) => {
    const handleClick = () => {
        incrementScore();
    };

    return (
        <div className="coin" onClick={handleClick}>
            <img src="/img/коин2-removebg-preview.png" alt="coin"/>
        </div>
    );
};

export default Coin;
