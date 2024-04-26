import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../components/Coin";
import Header from "../components/Header";

const ChartPage = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en")
                // timeout: 5000 // 5 seconds timeout)
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching crypto data:", error);
            });
    }, []);

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Current Market Status</h1>
                <form>
                    <input type="text" placeholder='Search <Crypto>' className="coin-input" onChange={handleChange}/>
                </form>
            </div>
            {filteredCoins.map((coin) => {
                return(
                    <Coin 
                        key={coin.id} 
                        name={coin.name} 
                        image={coin.image} 
                        symbol={coin.symbol}
                        price={coin.current_price}
                        volume={coin.total_volume}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap}
                    />
                )
            })}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                    font-family: 'Montserrat', sans-serif;
                }

                body {
                    background-color: #1a1a1c;
                    color: #fff;
                }

                .coin-app {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 64px;
                    color: #fff;
                }

                .coin-search {
                    margin-bottom: 64px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .coin-text {
                    margin-bottom: 32px;
                    font-size: 2rem;
                    font-weight: 900;
                }

                .coin-input {
                    padding: 12px;
                    width: 300px;
                    height: 40px;
                    border-radius: 20px;
                    border: none;
                    background-color: #fff;
                    color: #000;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .coin-input::placeholder {
                    color: #666;
                    text-align: center;
                }

                .coin-input:focus {
                    outline: none;
                    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
                }

                .coin-list {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                    justify-items: center;
                }`}
            </style>
        </div>
    );
};

export default ChartPage;
