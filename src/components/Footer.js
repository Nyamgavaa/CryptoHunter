import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'




const Footer = () => {

    
    

return <div>
           <footer>
               <Box 
               px={{xs:3, sm: 10}}
               py={{xs:5, sm: 10}}
               bgcolor='black' 
               color='#FFD700'>
                <Container maxWidth='lg'>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={5}>Social Холбоос</Box>
                            <Box m={1} pt={1}>
                                <Link href='https://twitter.com/cryptoMongolia2' color='inherit'>
                                    Twitter хаяг
                                </Link>
                            </Box>
                            <Box m={1} pt={1}>
                                <Link href='https://github.com/Nyamgavaa' color= 'inherit' target="popup" onClick="window.open('https://www.youtube.com/watch?v=HCsFwwolXZw','name','width=600,height=400')">
                                    Github холбоос
                                </Link>
                            </Box>
                            <Box m={1} pt={1}>
                                <Link href='https://www.youtube.com/watch?v=HCsFwwolXZw' color= 'inherit' target="popup" onClick="window.open('https://www.youtube.com/watch?v=HCsFwwolXZw','name','width=600,height=400')">
                                    Youtube Суваг
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={5}>WEB3-ын article</Box>
                            <Box m={1} pt={1}>
                                <Link href='https://medium.com/@decent.nomad.crypto' color='inherit' target="popup" onClick="window.open('https://medium.com/@decent.nomad.crypto','name','width=600,height=400')">
                                    Medium холбоос
                                </Link>
                            </Box>
                            <Box m={1} pt={1}>
                                <Link href='https://github.com/Nyamgavaa' color= 'inherit' target="popup" onClick="window.open('https://github.com/Nyamgavaa','name','width=600,height=400')">
                                    Хувийн блог
                                </Link>
                            </Box>
                            <Box  m={1} pt={1}>
                                <Link href='https://www.youtube.com/watch?v=HCsFwwolXZw' color= 'inherit' target="popup" onClick="window.open('https://www.youtube.com/watch?v=HCsFwwolXZw','name','width=600,height=400')">
                                    Portofilio сайт
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={5}>Хэрэг болох суваг</Box>
                            <Box m={1} pt={1}>
                                <Link  href="https://www.youtube.com/c/CryptoPuujin" color='inherit'  target="popup" onClick="window.open('https://www.youtube.com/c/CryptoPuujin ','name','width=600,height=400')">
                                {/* <a href="https://www.youtube.com/c/CryptoPuujin" target="popup" onclick="window.open('https://www.youtube.com/c/CryptoPuujin','name','width=600,height=400')">
                                Crypto Пуужин Youtube cуваг

                                </a> */}
                                Crypto Пуужин Youtube cуваг

                                </Link>
                            </Box>
                            <Box m={1} pt={1}>
                                <Link href='https://www.youtube.com/c/ChicoCrypto' color= 'inherit'>
                                    Chico crypto суваг
                                </Link>
                            </Box>
                            <Box m={1} pt={1}>
                                <Link href='https://www.youtube.com/c/HashLipsNFT' color= 'inherit'>
                                    NFT Хөгжүүлэгчдийн суваг
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                  <Box textAlign='center' pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                        Crypto Nomadic-ын Бүтээл &reg; {new Date().getFullYear()}
                  </Box>
                </Container>
               </Box>
           </footer>
           
           
           </div>;
};
export default Footer;

