import { useEffect, useCallback } from 'react';

// reduz
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks';

// material-ui
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// components
import Order from './Order';

// actions
import { getOrdersAction } from '../../../redux/actions/orders.actions';

const Orders = (): JSX.Element => {

    // get state
    const { isAuthenticated } = useAppSelector(state => state.user);
    const { orders, error, message } = useAppSelector(state => state.orders);

    // dispatch
    const dispatch = useAppDispatch();

    const getOrders = useCallback(
        () => dispatch( getOrdersAction() ),
        [ dispatch ],
    );
    

    useEffect(() => {
        const queryToAPI = () => getOrders();
        
        if (isAuthenticated && !orders.length) queryToAPI();
    }, [ getOrders, isAuthenticated, orders.length ]);

    return (  
        <Grid container justifyContent="space-around" item xs={12}>
            {
                error ?
                <Grid item xs={12}>
                    <Alert severity="error" className="centered-alert"> 
                        { message }
                    </Alert>
                </Grid> : null
            }
            {
                orders && orders.length === 0 &&
                <Grid item xs={12}>
                    <Alert severity="info" className="centered-alert"> 
                        There are no orders to browse yet.
                    </Alert>
                </Grid>
            }
            {
                orders.length !== 0 && orders.map( order => (
                    <Grid key={order.id} item xs={11} sm={8} md={6} lg={4} xl={3}>
                        <Order order={ order }/>
                    </Grid>
                ))
            }
        </Grid>
    );
};
 
export default Orders;
