import React, {useEffect} from 'react';

import {observer, inject} from "mobx-react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {TCoin} from "../../types";
import CurrencyStore from "../../stores/currencyStore";

type ICryptoTable = {
    classes: any;
    currencyStore?: CurrencyStore;
}

const CryptoTable = inject('currencyStore')(
        observer(({classes, currencyStore}: ICryptoTable) => {
            const items:TCoin[] = currencyStore!.getItems

            useEffect(() => {
                if(currencyStore){
                    currencyStore?.fetchCoins()
                }
            }, [])


            return (
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
                                    {items &&  items.map((el, id) => (
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
                                            <TableCell style={{backgroundColor: 'rosybrown'}} align="left">$ {el.price}</TableCell>
                                            <TableCell align="left">{el.volume24Hour}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            );
        })
)

export default CryptoTable