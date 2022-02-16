import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React from 'react';
import { CryptoState } from '../CryptoContext';
import { TrendingCoins } from '../config/api';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';


const useStyles = makeStyles((theme) => ({
    carousel:{
        height:"50%",
        display:"flex",
        alignItems:"center",
        
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color:"white",
    }, 
    
}));

export function numberWithCommas(x) {
    // return x.toString().replace(/\B(?=(\d{3}) +(?!\d))/g, ",");
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const Carousel = () => {
const [trending, setTrending] = useState([]);
const classes=useStyles()  
const {currency,symbol}= CryptoState()

const fetchTrendingCoins = async () =>{
    const {data} = await axios.get(TrendingCoins(currency));

    setTrending(data);
};
   
    console.log(trending);
    
    useEffect(() => {
        fetchTrendingCoins();
    },[currency]);

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;

        // console.log(coin.id)
        // console.log(coin?.current_price)
        
        return (
            <Link className = {classes.carouselItem} to={`/coins/${coin.id}`}>
                <img
                    src={coin?.image}
                    alt={coin.name}
                    height='80'
                    style= {{marginBottom: 10}}   
                
                />                
                    
                    <span> 
                        {coin?.symbol}
                        &nbsp;
                        <span
                        style={{
                            color: profit > 0 ? "rgb(14, 203, 129)": "red",
                            fontWeight: 500,
                        }}
                        
                        >
                            {profit && "+"} {coin.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                    </span>

                    <span style={{fontSize:22, fontWeight:500}}>
                        {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                    </span>
            </Link> 
        
        );
    });

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    };

  return <div className={classes.Carousel}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                    disableDotsControls
                    disableButtonsControls
                responsive= {responsive}
                items={items}
                autoPlay
                            
            />
            
         </div>;
};

export default Carousel;
