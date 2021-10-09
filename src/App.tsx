import React, {useEffect, useState} from 'react';
import axios from 'axios'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import {TCoin} from "./types";
import {Converter, CryptoTable} from "./components";
import useStyles from "./style";



const App = () => {
    const [coins, setCoins] = useState<TCoin[]>([]);
    const classes = useStyles()

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data: {Data}}:any) => {
                const coins = Data.map((el: any) => {
                    const obj: TCoin = {
                        name: el.CoinInfo.Name,
                        fullName: el.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com${el.CoinInfo.ImageUrl}`,
                        price: (el.RAW.USD.PRICE).toFixed(2),
                        volume24Hour: parseInt(el.RAW.USD.VOLUME24HOUR),
                    }

                    return obj
                })

                setCoins(coins)
            })
    }, [])

    console.log(coins);


    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3} className={classes.gridContainer}>
                <CryptoTable classes={classes} items={coins}/>
                <Converter classes={classes}/>
            </Grid>
        </Container>
    );
}

export default App;




