import React, {useEffect, useState} from 'react';
import axios from 'axios'

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from '@mui/styles';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const useStyles = makeStyles({
    root: {
        border: 0,
        borderRadius: 3,
        color: 'white',
    },
    paper: {
        padding: '10px',
    },
    gridContainer: {
        padding: '30px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    cryptoInput: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
    coinImg: {
        width: '40px',
        height: '20px',
    },
    tableRow: {
        transition: 'all 50ms ease-in',
        '&:hover': {
            background: "#93cec0",
        },
    }
});

type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: number;
}

const App = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState<TCoin[]>([]);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data: {Data}}:any) => {
                const coins = Data.map((el: any) => {
                    const obj: TCoin = {
                        name: el.CoinInfo.Name,
                        fullName: el.CoinInfo.FullName,
                        imageUrl: `https://www.cryptocompare.com${el.CoinInfo.ImageUrl}`,
                        price: parseInt(el.RAW.USD.PRICE),
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
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <TableContainer component={Paper}>
                            <Table sx={{maxWidth: 900}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left"></TableCell>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">FullName</TableCell>
                                        <TableCell align="left">Price</TableCell>
                                        <TableCell align="left">Volume24Hour</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {coins.map((el,id) => (
                                        <TableRow className={classes.tableRow} key={el.name}>
                                            <TableCell align="left">
                                                <img
                                                    className={classes.coinImg}
                                                    src={el.imageUrl}
                                                    alt='Coin Icon'
                                                />
                                            </TableCell>
                                            <TableCell align="left">{el.name}</TableCell>
                                            <TableCell align="left">{el.fullName}</TableCell>
                                            <TableCell align="left">$ {el.price}</TableCell>
                                            <TableCell align="left">{el.volume24Hour}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.cryptoInput}>
                            <FormControl>
                                <TextField
                                    fullWidth
                                    label="Summ"
                                />
                            </FormControl>
                            <FormControl>
                                <Select
                                    value={10}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.cryptoInput}>
                            <FormControl>
                                <TextField
                                    fullWidth
                                    label="Summ"
                                />
                            </FormControl>
                            <FormControl>
                                <Select
                                    value={10}
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Typography variant="h5" component='h1'>21.12 American USD</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;




