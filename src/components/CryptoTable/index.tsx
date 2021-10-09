import React from 'react';

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {TCoin} from "../../types";

type ICryptoTable = {
    items: TCoin[];
    classes: any;
}

const CryptoTable: React.FC<ICryptoTable> = ({items, classes}) => {

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
                            {!items.length ? 'Loading...' : items.map((el,id) => (
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
    );
};

export default CryptoTable