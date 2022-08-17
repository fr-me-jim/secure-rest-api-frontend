import Swal from 'sweetalert2';
import { useEffect, useCallback, useState } from 'react';

// reduz
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks';

// material-ui
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// components
import Product from './Product';

// actions
import { getProductsAction } from '../../../redux/actions/products.actions';
import { placeOrderAction } from '../../../redux/actions/orders.actions';

// interface
import { ICartProductData } from '../../../interfaces/products.interface';

const Products = (): JSX.Element => {

    // state
    const [cart, setCart] = useState<ICartProductData[]>([]);

    // get state
    const { isAuthenticated } = useAppSelector(state => state.user);
    const { products, error, message } = useAppSelector(state => state.products);
    const { error: errorOrders, message: messageOrders } = useAppSelector(state => state.orders);

    // dispatch
    const dispatch = useAppDispatch();

    const getProducts = useCallback(
        () => dispatch( getProductsAction() ),
        [ dispatch ],
    );

    const placeOrder = useCallback(
      (orderItems: ICartProductData[]) => dispatch( placeOrderAction(orderItems) ),
      [dispatch],
    );
    

    useEffect(() => {
        const queryToAPI = () => getProducts();
        
        if (isAuthenticated && !products.length) queryToAPI();
    }, [ getProducts, isAuthenticated, products.length ]);

    const handleClickPurchase = async () => {
        const { value } = await Swal.fire({
            icon: 'warning',
            title: 'Purchase',
            text: 'Are you sure that you wanna make this purchase?',
            allowEnterKey: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            showCancelButton: true,
            cancelButtonColor: '#91283f',
            cancelButtonText: 'Back',
            confirmButtonText: 'Confirm',
            confirmButtonColor: "#2b6ca7"
        });

        try {
            if (value) await placeOrder(cart);
        } catch (error) {
            return;
        }
    };

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
                errorOrders ?
                <Grid item xs={12}>
                    <Alert severity="error" className="centered-alert"> 
                        { messageOrders }
                    </Alert>
                </Grid> : null
            }
            {
                products && products.length === 0 &&
                <Grid item xs={12}>
                    <Alert severity="info" className="centered-alert"> 
                        There are no products to browse yet.
                    </Alert>
                </Grid>
            }
            {
                products.length !== 0 && products.map( product => (
                    <Grid key={product.id} item xs={11} sm={8} md={6} lg={4} xl={3}>
                        <Product product={ product } currentCart={ cart } setCartHandler={ setCart }/>
                    </Grid>
                ))
            }
            {
                products.length !== 0 && (
                    <>
                        <Grid container item xs={12} justifyContent="center" alignItems="center" className='py-4'>
                            <Badge badgeContent={ cart.length } className="bg-primary text-light">
                                <ShoppingCartIcon color='action' />
                            </Badge>
                        </Grid>

                        <Grid container item xs={12} justifyContent="center" alignItems="center" className='py-4'>
                            <Button className='app-btn-primary' onClick={ handleClickPurchase }
                                type="button" variant="contained"
                            >
                                Purchase
                            </Button>
                        </Grid>
                    </>
                )

            }
        </Grid>
    );
};
 
export default Products;
