import React,{ useState, useEffect} from 'react';
// API
import { getCoins } from '../services/api';
// Components
import Coins from './Coins';

// loading animation 
import ReactLoading from 'react-loading';



const Landing = () => {
    // state to store what user entered
    const [inputValue ,setInputValue] = useState("")

    // state to store what api return us - All Coins
    const [coins,setCoins] = useState([])

    // GET Coins and store in State with setCoins 
    useEffect(() => {
        const fetchApi = async () => {
            setCoins(await getCoins());
        }
        fetchApi();
    },[])

    // store coin related to what user entered 
    const serachedCoins = coins.filter(coin => coin.name.toLowerCase().includes(inputValue))

    return (
        <>
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value.toLowerCase())} type="text" placeholder="Search" style={{width:"50%",display: "block",margin:"50px auto",fontSize:"18px",padding: "2px 5px"}} />
            {
                // IF data is available return Coins Component ELSE return loading
                coins.length > 0 ? <Coins coins={serachedCoins}/> : <ReactLoading style={{width:"10%",display: "block",margin:"0 auto"}}  type='spin'/>
            }
        </>
    );
}
 
export default Landing;