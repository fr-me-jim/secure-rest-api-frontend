// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// material-ui
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// interface
import { IOrderData } from '../../../interfaces/orders.interface';

const Order = ({ order }: { order: IOrderData }): JSX.Element => {

    // state
    // const [amount, setAmount] = useState(0);

    // dispatch
    // const dispatch = useDispatch();

    // const deleteFile =  id => dispatch( deleteFileAction(id) );
    // const downloadFile =  (id, filename, type) => dispatch( getDownloadFileAction(id, filename, type) );

    const handleClickCancelOrder = () => { 

    }

    return (  
        <Paper elevation={3} className="p-2 file-paper">
            <Grid container component="header">
                <Grid container justifyContent="center" item xs={12}>
                    <Typography variant="h5" align="center" className='py-4'>
                        <b>Order ID: { order.id }</b>
                    </Typography>
                </Grid>
            </Grid>

            <Grid container justifyContent="space-between" alignItems="center" className="py-2 px-4" item xs={12}>
                <Typography variant="body1" align="justify" className='py-2'>
                    Date: { new Date(order.date).toDateString() }
                </Typography>
                <Chip color={ order.status !== "cancelled" ? "success" : "error" } label={ order.status } />
            </Grid>
            
            <Grid container justifyContent="center" className="pt-2">
                <Button type="button" variant="contained"
                    className="app-btn-danger w-50"
                    onClick={ handleClickCancelOrder }
                > Cancel </Button>
            </Grid>
        </Paper>
    );
};
 
export default Order;
