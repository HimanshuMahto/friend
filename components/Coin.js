import React from 'react';
import '../styles/Home.module.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' className='coin-icon' />
          <div className='coin-info'>
            <h1 className='coin-name'>{name}</h1>
            <p className='coin-symbol'>{symbol}</p>
          </div>
        </div>
        <div className='coin-data'>
          <div className='coin-heading'>
            <h2 style={{maxWidth:'10vw'}}>Price</h2>
            <h2 style={{maxWidth:'10vw'}}>Volume</h2>
            <h2 style={{maxWidth:'10vw'}}>Percent Change</h2>
            <h2 style={{maxWidth:'10vw'}}>Mar. Cap</h2>
          </div>
          <div className='coin-details'>
            <p className='coin-price' style={{maxWidth:'10vw'}}>₹{price.toLocaleString()}</p>
            <p className='coin-volume' style={{maxWidth:'10vw'}}>₹{(volume/10000000).toLocaleString()} Cr</p>
            <p className={priceChange < 0 ? 'coin-percent red' : 'coin-percent green'} style={{maxWidth:'10vw'}}>
              {priceChange.toFixed(2)}%
            </p>
            <p className='coin-marketcap' style={{maxWidth:'10vw'}}>₹{marketcap.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .coin-container {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }

          .coin-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            height: 100px;
            border-bottom: 1px solid #d7d7d7;
            width: 1500px; 
            padding: 10px;
          }

          .coin {
            display: flex;
            align-items: center;
          }

          .coin-icon {
            height: 40px;
            width: 40px;
            margin-right: 10px;
          }

          .coin-info {
            width: 200px;
          }

          .coin-name {
            font-size: 16px; /* Decreased font size */
            margin-bottom: 5px;
          }

          .coin-symbol {
            text-transform: uppercase;
            font-size: 12px; /* Decreased font size */
            color: #FF7F11;
          }

          .coin-data {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .coin-heading {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;
          }

          .coin-heading h2 {
            font-size: 18px; 
            color: #B1DDF1; 
            margin-left: 3vw;
            margin-right: 3vw;
            text-align: start;
          }

          .coin-details {
            display: flex;
            justify-content: space-between;
          }

          .coin-price,
          .coin-volume,
          .coin-marketcap,
          .coin-percent {
            font-size: 14px;
            color: #56;
            margin-left: 3vw;
            margin-right: 3vw;
            text-align:start;
          }

          .red {
            color: #f00;
          }

          .green {
            color: #0f0;
          }
        `}
      </style>
    </div>
  );
};

export default Coin;
