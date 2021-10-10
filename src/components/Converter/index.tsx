import React from 'react';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {inject, observer} from "mobx-react";
import CurrencyStore from "../../stores/currencyStore";

type IConverter = {
    classes: any;
    currencyStore?: CurrencyStore;
}

const Converter: React.FC<IConverter> = inject('currencyStore')(
    observer(({classes, currencyStore}) => {
        const coins: string[] = currencyStore!.getItems.map(el => el.name)


        return (
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
                                value={coins[0]}
                                label="Age"
                            >
                                {coins.map(el => (
                                    <MenuItem key={el} value={el}>{el}</MenuItem>
                                ))}
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
                                value={coins[0]}
                                label="Age"
                            >
                                {coins.map(el => (
                                    <MenuItem key={el} value={el}>{el}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Paper>
            </Grid>
        );
    }));

export default Converter