import { Error as ErrorIcon } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';

function Error(props) {
    console.log(props);

    return <Box sx={{
        bgcolor: 'red',
        minHeight: "100vh",
        display: "flex",
        direction: "column",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Grid container spacing={4} direction="column" alignItems="center" justifyContent="center">
            <Grid item>
                <ErrorIcon color="white" alt="Error Icon" sx={{ width: '128px', height: '128px' }}/>
            </Grid>
            <Grid item>
                <Typography variant="h2" fontWeight="bold" textTransform="uppercase" color='primary.contrastText'>
                    {`Error ${props.status ? ": " + props.status : ""}`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h4" color='primary.contrastText'>
                    {props.data || props.message || props.statusText || "Error Message here"}
                </Typography>
            </Grid>
        </Grid>
    </Box >
}

export default Error;