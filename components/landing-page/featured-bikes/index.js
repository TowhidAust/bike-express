import ProductCard from "../../common/product-card";
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FeaturedBikes() {
    return (
        <div className="budget-bikes-root">
            <div className="budget-bikes-inner">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}