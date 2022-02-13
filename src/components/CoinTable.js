import { Container, createTheme, LinearProgress, Table, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from "react";
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinTable = () => {

const [coins, setCoins] = useState([]);
const [loading, setLoading] = useState(false);
const [search, setSearch] = useState()

const {currency} = CryptoState();


    const fetchCoins = async () => {
        setLoading(true);
        const {data} = await axios.get(CoinList(currency))
    
        setCoins(data);
        setLoading(false);
    }
    console.log(coins);
    useEffect(() => {
        fetchCoins();

    },[currency])
    
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: "#fff"

            },
            type: "dark",
        }
    });
  return <ThemeProvider theme= {darkTheme}>
        <Container style={{textAlign: "center"}}>
            <Typography
                variant="h4"
                color=""
                style={{margin:18, fontFamily:"Montserrat"}}>
                Cryptocurrency-ийн Зах зээлийн үнэлгээ
            </Typography>
            <TextField label= "Crypto хөрөнгийн хайлтийн хэсэг"
                       variant='outlined'
                       style={{marginBoottom:20, width: "100%"}}
                       onChange={(e) => setSearch(e.target.value)}
            />
            
            <TableContainer>
                {loading ? (
                        <LinearProgress style={{backgroundColor:  "gold"}}/>
                    ) : (
                        <Table>
                            <TableHead style = {{backgroundColor: "#EEBC1d"}}>
                                <TableRow>
                                    {["Койн","Үнэ","24 цагийн өөрчлөлт ", "Зах зээлийн үнэлгээ"].map((head)=>(
                                        <TableCell
                                            style={{
                                                color:"black",
                                                fontWeight: "700",
                                                textTransform:"capitalize",

                                                //fontWeight: "bold",
                                                fontFamily: "Montserrat",
                                            }}
                                            key={head}
                                            align={head === "Coin" ? "" : "right"}
                                            >
                                                {head}
                                            </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                        </Table>
                    )
                }
            </TableContainer>
        </Container>
        </ThemeProvider>
  
};

export default CoinTable;
