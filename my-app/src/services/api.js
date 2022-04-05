// use axios package so import it first
import axios from 'axios';
const Base_Url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"

const getCoins = async () => {
    const response = await axios.get(Base_Url)
    return response.data
}

export { getCoins };