import React from 'react';
import Coin from './Coin'
const Coins = (props) => {
    return (
        // return CoinComponent for EACH coin is availabe in serachedCoins - pass EACH object as props to use their info in CoinComponents 
        <div className="coins-container">
            {props.coins.map((coin) => <Coin info={coin} key={coin.id}/>)}
        </div>
    );
}
 
export default Coins;