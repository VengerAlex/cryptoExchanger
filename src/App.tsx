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
});

type TCoin = {
    name: string;
    fullName: string;
    imageUrl: string;
    price: number;
    volume24Hour: string;
}

const App = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState<TCoin[] | null>(null);

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
            .then(({data: {Data: data}}) => setCoins(data))
    }, [])

    console.log(coins);


    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">FullName</TableCell>
                                        <TableCell align="left">Name</TableCell>
                                        <TableCell align="left">Price</TableCell>
                                        <TableCell align="left">Volume24Hour</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {coins.map((el) => (
                                        <TableRow key={el.Id}>
                                            {/*<TableCell>123</TableCell>*/}
                                            <TableCell component="th" scope="row">
                                                {el.FullName}</TableCell>
                                            {/*<TableCell align="left">{row.calories}</TableCell>*/}
                                            {/*<TableCell align="left">{row.fat}</TableCell>*/}
                                            {/*<TableCell align="left">{row.carbs}</TableCell>*/}
                                            {/*<TableCell align="left">{row.protein}</TableCell>*/}
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




