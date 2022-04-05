import React from 'react';
import styles from './Coin.module.css';
const Coin = (props) => {
    return (
        // excute what we want to use from info
        <div className={styles.container}>
            <img className={styles.image} src={props.info.image} alt="coin_image" />
            <p>{props.info.symbol.toUpperCase()}</p>
            <p>{props.info.current_price.toLocaleString()}</p>
            <p className={Number(props.info.market_cap_change_percentage_24h) >0 ? "green" : "red"}>{Number(props.info.market_cap_change_percentage_24h)}</p>
            <p>{props.info.market_cap.toLocaleString()}</p>
        </div>
    );
}
 
export default Coin;