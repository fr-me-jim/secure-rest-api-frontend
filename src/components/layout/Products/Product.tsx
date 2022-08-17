import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// material-ui
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CategoryIcon from '@mui/icons-material/Category';

// interface
import { ICartProductData, IProductProps } from 'src/interfaces/products.interface';

// actions
// import { deleteFileAction, getDownloadFileAction } from "redux/actions/filesActions";

const Product = ({ product, currentCart, setCartHandler }: IProductProps): JSX.Element => {

    // state
    const [amount, setAmount] = useState(0);

    // dispatch
    // const dispatch = useDispatch();

    // const deleteFile =  id => dispatch( deleteFileAction(id) );
    // const downloadFile =  (id, filename, type) => dispatch( getDownloadFileAction(id, filename, type) );

    const handleClickAddToCart = (): void => {
        const productPurchase: ICartProductData = {
            product_id: product.id,
            price: product.price,
            amount
        };
        setCartHandler([ ...currentCart, productPurchase ]);
    };
    
    const handleClickAdd = (): void => {
        setAmount(amount+1);
    };

    const handleClickRemove = (): void => {
        if (amount > 0) setAmount(amount-1);
    };

    return (  
        <Paper elevation={3} className="p-2 file-paper">
            <Grid container component="header">
                <Grid container justifyContent="center" item xs={12}>
                    <i className="fas fa-file text-primary fa-5x"></i>
                    <CategoryIcon fontSize='large' className='text-primary'/>
                </Grid>
                
                {/* <i class="fas fa-user-secret text-primary"></i> */}
                <Grid container justifyContent="center" item xs={12}>
                    {/* { !isImage && <img src={url} alt={filename} height={150} /> } */}
                </Grid>
            </Grid>

            <Grid container direction="column" justifyContent="center" alignItems="flex-start" className="py-2 px-4" item xs={12}>
                <Typography variant="h5" align="center" className='py-4 align-self-center'>
                    <b>{ product.name }</b>
                </Typography>
                <Typography variant="body1" align="justify" className='py-2'>
                    { product.description }
                </Typography>
                <Chip className='bg-primary text-light' label={ product.category } />
            </Grid>

            <Grid container item xs={12} justifyContent="space-around" alignItems="center" className='px-5'>
                <IconButton className='app-btn-primary' aria-label='increase-product-amount'
                    type='button' onClick={ handleClickAdd }
                >
                    <AddIcon fontSize="medium" className='text-light'/>
                </IconButton>
                <input type="number" id="product-amount" name="product-amount"
                    min={1} value={ amount } className="w-50 text-center    "
                />
                <IconButton className='app-btn-danger' aria-label='decrease-product-amount'
                    type='button' onClick={ handleClickRemove }
                >
                    <RemoveIcon fontSize="medium" className='text-light'/>
                </IconButton>
            </Grid>
            
            {
                amount ?
                <Grid container justifyContent="center" className="pt-2">
                    <Button type="button" variant="contained"
                        className="app-btn-primary w-50"
                        onClick={ handleClickAddToCart }
                    > Add to cart </Button>
                </Grid>
                :
                <Grid container justifyContent="center" className="pt-2">
                    <Button type="button" variant="contained" disabled
                        className="app-btn-secondary w-50"
                        // onClick={ handleClickDownload }
                    > Add to cart </Button>
                </Grid>
            }
        </Paper>
    );
};
 
export default Product;
