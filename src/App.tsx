import React, {useEffect, useState} from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from "@mui/material/Paper";
import {TCoin} from "./types";
import {Converter, CryptoTable} from "./components";
import useStyles from "./style";



const App = () => {
    // const [coins, setCoins] = useState<TCoin[]>([]);
    const classes = useStyles()

    useEffect(() => {

    }, [])



    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3} className={classes.gridContainer}>
                <CryptoTable classes={classes} />
                <Converter classes={classes} />
            </Grid>
        </Container>
    );
}

export default App;




