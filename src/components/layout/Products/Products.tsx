import { useEffect, useCallback } from 'react';
// import Swal from 'sweetalert2';

// reduz
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks';

// material-ui
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

// components
import Product from './Product';

// actions
import { getProductsAction } from '../../../redux/actions/products.actions';

const Products = (): JSX.Element => {

    // get state
    const { isAuthenticated } = useAppSelector(state => state.user);
    const { products, error, message } = useAppSelector(state => state.products);

    // dispatch
    const dispatch = useAppDispatch();

    const getProducts = useCallback(
        () => dispatch( getProductsAction() ),
        [ dispatch ],
    );

    useEffect(() => {
        const queryToAPI = () => getProducts();
        
        if (isAuthenticated) queryToAPI();
    }, [ getProducts, isAuthenticated ]);

    // const handleClickPurchase = async () => {
    //     const { value } = await Swal.fire({
    //         icon: 'warning',
    //         title: 'Delete File',
    //         text: 'Are you sure that you wanna delete that file?',
    //         allowEnterKey: false,
    //         allowEscapeKey: false,
    //         allowOutsideClick: false,
    //         showCancelButton: true,
    //         cancelButtonColor: '#91283f',
    //         cancelButtonText: 'Back',
    //         confirmButtonText: 'Confirm',
    //         confirmButtonColor: "#2b6ca7"
    //     });

    //     if (value) console.log("hi");
    //     // if (value) deleteFile(file_id);
        
    // };

    return (  
        <Grid container justifyContent="space-around" item xs={12}>
            {
                error ?
                <Grid item xs={12}>
                    <Alert severity="warning" className="centered-alert"> 
                        { message }
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
                    <Grid key={product.id} item xs={11} sm={10} md={6} lg={4} xl={2}>
                        <Product product={ product } />
                    </Grid>
                ))
            }
        </Grid>
    );
};
 
export default Products;
