import {makeStyles} from "@mui/styles";

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

export default useStyles