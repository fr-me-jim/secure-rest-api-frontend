// import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Home = (): JSX.Element => {
    return (     
        <Grid container justifyContent="center" item xs={12}>
            <Typography variant="h2">
                Welcome to our page!
            </Typography>
        </Grid>
    );
};
 
export default Home;