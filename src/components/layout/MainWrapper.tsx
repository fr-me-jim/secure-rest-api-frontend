// import React from 'react';

// material-ui
import Grid from '@mui/material/Grid';

import Routes from '../routes/Routes';

const MainWrapper = (): JSX.Element => {
    return (  
        <Grid component="main" container justifyContent="center" className="main-wrapper">
            <Grid component="section" container justifyContent="center" alignContent="center" item xs={12} md={10} className="main-content">
                <Routes />
            </Grid>
        </Grid>
    );
};
 
export default MainWrapper;
