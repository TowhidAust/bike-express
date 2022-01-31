import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import SlickCarousel from '../../Common/SlickCarousel/Slick';
import defaultBike from '../../../public/images/default-bike-2.jpg'
import Image from 'next/image';

export default function Banner() {
    const returnAllBrandCards = () => {
        // let brands = ['/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg'];
        let brands = ['/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg', '/images/default-bike-2.jpg'];
        return brands.map((item, index) => (
            <div className="p-1" key={index}>
                <Image
                    alt="Banner-Bikes"
                    src={defaultBike}
                    objectFit="cover"
                    quality={100}
                    height={850}
                />
            </div>
        ))
    }
    return (

        <div className='banner-root-container'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} sm={12}>
                        <div className='banner-left-menu-container'>
                            <div className='banner-left-menu-title'>Categories</div>
                            <ul className='banner-left-menu-ul'>
                                <li>Used Bike</li>
                                <li>New Bike</li>
                                <li>All Accessories</li>
                                <li>T-Shirt</li>
                                <li>Jacket</li>
                                <li>Riding Gears</li>
                                <li>Helmet</li>
                                <li>Bike Lock</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9} sm={12}>
                        <div className='banner-menu-carousel'>
                            <SlickCarousel slickComponent={returnAllBrandCards()} slidesToShow={1} slidesToScroll={1} />
                        </div>
                        <div className='banner-more-categories'>
                            <Box sx={{
                                width: "100%",
                                display: 'flex',
                                justifyContent: "flex-start",
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: "10%",
                                    height: 70,
                                },
                            }}>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>SUZUKI</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>YAMAHA</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>KTM</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>TVS</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>HONDA</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <div className='banner-categories-content'>
                                        <div>PALSAR</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>TARO</div>
                                    </div>
                                </Paper>
                                <Paper className='banner-categories-container' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='banner-categories-content'>
                                        <div>HERO</div>
                                    </div>
                                </Paper>

                            </Box>

                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
