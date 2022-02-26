import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from "react";
import {useParams} from "react-router-dom";
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { numberWithCommas } from './Carousel';


const CoinPage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState();

  const {currency, symbol} = CryptoState();
  const fetchCoin = async () => {
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log(data);
    const  names =data.description.en.split(", ")[0]
    console.log(names);

  };


  useEffect(() =>{
    fetchCoin()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);  

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]:{
        flexDirection: "column",
        alignItems: "center",
     
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]:{
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight:  "2px solid grey",
    },
    heading:{
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop:0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      //* Энд Responsive болгож байна
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start"
      }
    }

  }));

  const classes = useStyles();

  if(!coin) return <LinearProgress style={{backgroundColor: "gold"}}/>
 

  return (

    
  <div className={classes.container}>

    <div className={classes.sidebar}>
      <img
        src={coin?.image.large}
        alt= {coin?.name}
        height= "200"
        style={{marginBottom: 20}}
      />
      <Typography variant='h3' className={classes.heading}>
        {coin?.name}

      </Typography>
      <Typography variant='subtitle1' className={classes.description}>
       <div dangerouslySetInnerHTML={{__html: coin?.description.en.split(",")[0]  }}/>
      {/* {coin?.description.en}. */}
      </Typography>
      <div className={classes.marketData}>
        <span style={{display: "flex"}}>
          <Typography variant="h5" className={classes.heading}>
            Зэрэглэл:
          </Typography>
          &nbsp; &nbsp;
          <Typography
          variant='h5'
          style={{
            fontFamily: "Montserrat",
          }}
          >
            {coin?.market_cap_rank}
          </Typography>
        </span>
        <span style={{display: "flex"}}>
          <Typography variant="h5" className={classes.heading}>
            Одоогийн Ханш
          </Typography>
          &nbsp; &nbsp;
          <Typography
          variant='h5'
          style={{
            fontFamily: "Montserrat",
          }}
          >
            {symbol}{" "}
            {numberWithCommas(
              coin?.market_data.current_price[currency.toLowerCase()]
            )}
          </Typography>
        </span><span style={{display: "flex"}}>
          <Typography variant="h5" className={classes.heading}>
            Зах Зээлийн үнэлгээ: {" "}
          </Typography>
          &nbsp; &nbsp;
          <Typography
          variant='h5'
          style={{
            fontFamily: "Montserrat",
          }}
          >
            {symbol}{" "}
            {numberWithCommas( 
              coin?.market_data.market_cap[currency.toLowerCase()]
              .toString()
              .slice(0, -6)
            )}
          </Typography>
        </span>
      </div>

    </div>

    {/* Chart хэсэг */}
    <CoinInfo coin={coin}/>
  </div>)
    

};

export default CoinPage;
