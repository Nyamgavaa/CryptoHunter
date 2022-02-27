import { 
  Toolbar,
  AppBar,
  MenuItem,
  createTheme,
  Select,
  Container,
  ThemeProvider,
  Typography 
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate} from "react-router-dom"; //In react-router-dom v6 useHistory() is replaced by useNavigate().
//import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles((theme) => ({
  title: {
    flex:1,
    color:"gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },
}));

const Header = () => {
  
  const classes=useStyles();
  const navigate=useNavigate();

  const {currency, setCurrency} =CryptoState();

  console.log(currency);
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main:"#fff",
      },
      type: "dark",
    }
  });

  return <div>
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>  
          <Typography 
          onClick={() => navigate('/')} 
          className={classes.title}>
          Crypto Nomadic  
            </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
              color: 'gold',
              fontWeight: "bold"

            
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}

            >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"JPY"}>JPY</MenuItem>
          </Select>
        </Toolbar>
      </Container>

    </AppBar>
    </ThemeProvider>
  </div>; 
};

export default Header;
