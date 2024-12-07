import { Box, display, Grid } from '@mui/system';
// link react-router-dom
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import HeaderPayment from './headerPayment';
// usenavigate usedispatch



export default function Payment() {
    let role = localStorage.getItem('role');


    return (
        <Box>
            <HeaderPayment />
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                    sx={{
                        width: {
                            xs: '100%', // Mobile
                            sm: '75%',  // Tablet
                            md: '52%',  // Desktop
                        },
                    }}
                >
                    <Box>
                        <img
                            src="https://payos.vn/wp-content/uploads/sites/13/2023/08/Untitled.gif"
                            alt="loading"
                            style={{ height: '400px', width: '100%' }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center', my: '10px' }}>
                        Chọn nạp điểm
                    </Box>
                    <Box>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item md={3}>
                                {role ? (
                                    <Link to="/paymentbegin">
                                        <Box
                                            sx={{
                                                border: '1px solid #ddd',
                                                borderRadius: '8px',
                                                padding: 2,
                                                textAlign: 'center',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '80%',
                                                    height: 'auto',
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <img
                                                    src="https://hoimesach.com/wp-content/uploads/2021/11/nap-diem.jpg"
                                                    alt="chưa có"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        borderRadius: '8px',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                                Nạp điểm
                                            </Typography>
                                        </Box>
                                    </Link>
                                ) : (
                                    <Link to="/signinpayment">
                                        <Box
                                            sx={{
                                                border: '1px solid #ddd',
                                                borderRadius: '8px',
                                                padding: 2,
                                                textAlign: 'center',
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                                transition: 'transform 0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                },
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: '80%',
                                                    height: 'auto',
                                                    marginBottom: 2,
                                                }}
                                            >
                                                <img
                                                    src="https://hoimesach.com/wp-content/uploads/2021/11/nap-diem.jpg"
                                                    alt="chưa có"
                                                    style={{
                                                        width: '100px',
                                                        height: '100px',
                                                        borderRadius: '8px',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                                Nạp điểm
                                            </Typography>
                                        </Box>
                                    </Link>
                                )}
                            </Grid>
                        </Grid>

                    </Box>
                </Box>

            </Box>

        </Box >
    );
}