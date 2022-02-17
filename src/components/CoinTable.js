import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import {numberWithCommas} from '../Pages/Carousel'
//import {Pagination} from "@material-ui/lab/Pagination";
//import Pagination from "@material-ui/lab/Pagination";

//useHistory react-router-dom v6 дээр өөрчлөгдөж useNavigate болсохн
const CoinTable = () => {

const [coins, setCoins] = useState([]);
const [loading, setLoading] = useState(false);
const [search, setSearch] = useState("")
const nav = useNavigate()
const [page, setPage] = useState(1)
const {currency,symbol} = CryptoState();


    const fetchCoins = async () => {
        setLoading(true);
        const {data} = await axios.get(CoinList(currency))
    
        setCoins(data);
        setLoading(false);
    }
    //  const numberWidthCommas(x) {
    //     // return x.toString().replace(/\B(?=(\d{3}) +(?!\d))/g, ",");
    //     return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    // }
    
    console.log(coins);
    useEffect(() => {
        fetchCoins();

    },[currency])
    
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#FFD700",
                "&:hover": {
                    backgroundColor: "#ffc107",
                    },
            

            },
            type: "dark",
        },
    });

    const handleSearch = () => {
        return coins.filter(
            (coin) => 
                coin.name.toLowerCase().includes(search) ||
                coin.symbol.toLowerCase().includes(search)
        );
    };

    const useStyles = makeStyles(() => ({
        row: {
            backgroundColor: "#16171a",
            cursor: "pointer",
            "&:hover": {
            backgroundColor: "#131111",
            },
            fontFamily: "Montserrat",
            },
         pagination: {
                "& .MuiPaginationItem-root": {
                  color: "black",
                  
                },
            },
        root: {
            
            position:"relative",
            bottom:0,
            zIndex:200,
            backgroundColor:"gold",
           // padding:"0px 20px",
            color: "black",
            width:"100%",
            "&:hover": {
                backgroundColor: "#ffc107",
                },
        },
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black"
        }
    }));

  //  const useStyles = makeStyles(() => ({}));

    const classes = useStyles();

  return ( 
        <ThemeProvider theme= {darkTheme}>
        <Container style={{textAlign: "center"}}>
            <Typography
                variant="h4"
                style={{margin:18, fontFamily:"Montserrat"}}>
                Cryptocurrency-ийн Зах зээлийн үнэлгээ
            </Typography>
            <TextField label= "Crypto хөрөнгийн хайлтийн хэсэг.."
                       variant="outlined"
                       style={{marginBoottom:20, width: "100%"}}
                       onChange={(e) => setSearch(e.target.value)}
            />
            
  <TableContainer>
  { loading ? (
       <LinearProgress style={{backgroundColor:  "gold"}}/>
     ) : (
      <Table>
       <TableHead style = {{backgroundColor: "#EEBC1d"}}>
        <TableRow>
         {["Койн", "Үнэ", "24 цагийн өөрчлөлт ", "Зах зээлийн үнэлгээ"].map((head)=>(
          <TableCell
          style={{
          color:"black",
          fontWeight: "700",
        //   textTransform:"capitalize",
          //fontWeight: "bold",
          fontFamily: "Montserrat",
                }}
           key={head}
           align={head === "Койн" ? "left" : "right"}
          >
           {head}
        </TableCell>
              ))}
          </TableRow>
         </TableHead>
           <TableBody>
              {handleSearch()
              .slice((page - 1)* 10,(page-1) * 10 + 10)
              .map((row) => {
              const profit=row.price_change_percentage_24h > 0;

              return (
                  <TableRow hover
                    onClick={() => nav(`/coins/${row.id}`)}
                    className={classes.row}
                    key= {row.name}
                    >
                     <TableCell 
                     component="th"
                     scope="row"
                     styles={{
                         display:"flex",
                         gap: 15,
                     }}
                     >
                       <img 
                         src={row?.image}
                         alt={row.name}
                         height="50"
                         style={{ marginBottom: 10 }}
                         />
                         <div
                            style={{display: "flex", flexDirection:"column"}}
                         >
                          <span 
                            style={{
                                textTransform:"uppercase",
                                fontSize:22,
                            }}
                            >
                              {row.symbol}
                          </span>
                            <span style={{color:"darkgrey"}}>{row.name}</span>
                            </div>
                     </TableCell>
                     <TableCell align="right">

                        {/* // align="right"
                        // style={{
                        //     color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        //     fontWeight: 500,
                        // }}
                        // >
                        //     {profit && "+"}
                        //     {row.price_change_percentage_24h.toFixed(2)}% */}
                         
                             {symbol}{" "}
                             {numberWithCommas(row.current_price.toFixed(2))}   

                     </TableCell>
                     <TableCell
                        align="right"
                        style={{
                            color: profit > 0 ? "rgb(14,203,129)" : "red",
                            fontWeight: 500,
                        }}
                        >
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                     </TableCell>
                     <TableCell align='right'>
                         {symbol}{" "}
                         {numberWithCommas(
                             row.market_cap.toString().slice(0, -6)
                         )}
                            M
                     </TableCell>
                    </TableRow>
              )
           })}</TableBody>
       </Table>
     )
  }
  </TableContainer>
       <div className={classes.container}>
           <div className={classes.root}>
        <Pagination 
        style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            shape: 'round',
        }}
        variant="outlined"
        shape="rounded"
        color="secondary"
        classes={{ul: classes.pagination }}
        //count={(handleSearch()?.length/10).toFixed(0)}
        count={(handleSearch()?.length/10)}
       onChange={(_, value) => {
           setPage(value);
           window.scroll(0,450);
       }}
        />
        </div>
        </div>

        </Container>
        </ThemeProvider>
  )
  
};

export default CoinTable;
