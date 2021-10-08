import React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import {styled} from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from '@mui/styles';

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
        alignItems: 'center',
    },
    cryptoInput: {
        display: 'flex',
        alignItems: 'center'
    }
});

function App() {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3} className={classes.gridContainer}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque iste neque, quam repudiandae voluptate!
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <div className={classes.cryptoInput}>
                            <TextField
                                defaultValue="Hello"
                                id="outlined-basic"
                                label="Hello World"
                                variant="outlined"
                            />
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={10}
                                label="Age"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;


