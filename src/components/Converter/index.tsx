import React from 'react';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

type IConverterBlock = {
    classes: any;
}


const Converter: React.FC<IConverterBlock>  = ({ classes}) => {

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
            </Paper>
        </Grid>
    );
};

export default Converter