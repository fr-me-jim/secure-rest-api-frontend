// import React from 'react';
// import { useDispatch } from 'react-redux';

// material-ui
import Grid from '@mui/material/Grid';
// import Alert from '@material-ui/lab/Alert';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CategoryIcon from '@mui/icons-material/Category';

// interface
import { IProductsData } from 'src/interfaces/products.interface';

// actions
// import { deleteFileAction, getDownloadFileAction } from "redux/actions/filesActions";

const Product = ({ product }: { product: IProductsData }): JSX.Element => {

    // dispatch
    // const dispatch = useDispatch();

    // const deleteFile =  id => dispatch( deleteFileAction(id) );
    // const downloadFile =  (id, filename, type) => dispatch( getDownloadFileAction(id, filename, type) );

    // const handleClickAddToCart = async () => {
        
    // };

    // const handleClickRemoveFromCart = () => {
    //     // downloadFile(file_id, filename, mimetype);  
    // };
    

    return (  
        <Paper elevation={3} className="p-2 file-paper">
            <Grid container component="header">
                <Grid container justifyContent="center" item xs={12}>
                    <i className="fas fa-file text-primary fa-5x"></i>
                    <CategoryIcon fontSize='50' className='text-primary'/>
                </Grid>
                
                {/* <i class="fas fa-user-secret text-primary"></i> */}
                <Grid container justifyContent="center" item xs={12}>
                    {/* { !isImage && <img src={url} alt={filename} height={150} /> } */}
                </Grid>
            </Grid>

            <Grid container direction="column" justifyContent="center" className="pt-2" item xs={12}>
                <Typography variant="h5" align="center">
                    { product.name }
                </Typography>
                {/* <Typography variant="h6" align="center">
                    { filename }
                </Typography> */}
            </Grid>
            
            <Grid container justifyContent="center" className="pt-2">
                <Button type="button" variant="contained"
                    className="app-btn-primary w-50"
                    // onClick={ handleClickDownload }
                > Add to cart </Button>
            </Grid>
        </Paper>
    );
};
 
export default Product;
