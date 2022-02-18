import { makeStyles } from "@material-ui/core/styles";
import Homepage from "./Pages/Homepage";
import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {

 const useStyles = makeStyles(() => ({
   App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
   },
 }));


 const classes = useStyles();
  return (
  <BrowserRouter>
    <div className={classes.App}>  
    <Header/>
    

      <Routes>
      
        <Route  exact path="/" element={<Homepage />}/>
        <Route  exact path="/coins/:id" element={<CoinPage />}/>
      
      </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
    
  );
}

//Test

export default App;
