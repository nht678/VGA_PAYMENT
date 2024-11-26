import {
    TextField,
    Box,
    Button,
    Typography,
    CircularProgress,
} from "@mui/material";
import axios from "axios";
import Grid from '@mui/system/Grid';
import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import HeaderPayment from "./headerPayment";
import { BASE_API } from "src/services/api";

export default function PaymentBegin() {

    let accountId = localStorage.getItem("accountId");
    let name = localStorage.getItem("name");

    const [selectedRow, setSelectedRow] = useState(null);
    const [formData, setFormData] = useState({
        accountId: accountId,
        amount: null,
    });

    console.log("formData", formData);


    const items = [
        { price: 10000, points: 10 },
        { price: 20000, points: 20 },
        { price: 50000, points: 50 },
        { price: 100000, points: 100 },
        { price: 200000, points: 200 },
        { price: 500000, points: 500 },
    ];

    const handleSelectRow = (index) => {
        setSelectedRow(index);
        const amount = items[index].price;
        setFormData((prev) => ({
            ...prev,
            amount, // Cập nhật giá trị amount ngay khi chọn
        }));
    };
    const handlePayment = async () => {
        if (selectedRow !== null && accountId !== null) {
            try {
                console.log("formData", formData);

                // Gọi API thanh toán
                const res = await BASE_API.post(
                    '/wallet/request-top-up-wallet-with-payos',
                    {
                        returnUrl: "https://vga-payment.vercel.app/Payment/result",
                        cancelUrl: "https://vga-payment.vercel.app/Payment/result",
                    },
                    {
                        params: {
                            accountId: accountId, // Truyền accountId vào params
                            amount: formData?.amount, // Truyền amount vào params
                        },
                    }
                );

                if (res?.data?.data) {
                    // Redirect người dùng tới URL thanh toán
                    window.location.href = res.data.data;
                } else {
                    // Hiển thị lỗi nếu không có URL thanh toán
                    toast.error("Không tìm thấy URL thanh toán. Vui lòng thử lại!");
                }
            } catch (error) {
                console.error("Lỗi khi gọi API thanh toán:", error);
                toast.error("Thanh toán thất bại. Vui lòng thử lại!");
            }
        } else {
            toast.warning("Vui lòng chọn một sản phẩm trước khi thanh toán.");
        }
    };

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
                    <Grid container spacing={2}>
                        {/* Left Section */}
                        <Grid size={{ md: 6, xs: 12 }} container>
                            <RadioGroup style={{ width: '100%' }}>
                                {items.map((item, index) => (
                                    <Grid
                                        key={index}
                                        container
                                        size={{ md: 12 }}
                                        alignItems="center"
                                        spacing={2}
                                        sx={{
                                            border: selectedRow === index ? '2px solid red' : '1px solid #e0e0e0',
                                            backgroundColor: selectedRow === index ? '#ffe5e5' : 'transparent',
                                            padding: 1,
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleSelectRow(index)}
                                    >
                                        <Grid size={{ md: 1 }}>
                                            <FormControlLabel
                                                control={
                                                    <Radio
                                                        checked={selectedRow === index}
                                                        onChange={() => handleSelectRow(index)}
                                                    />
                                                }
                                                label=""
                                            />
                                        </Grid>
                                        <Grid size={{ md: 5 }}>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                                {item.price.toLocaleString('vi-VN')} VND
                                            </Typography>
                                        </Grid>
                                        <Grid size={{ md: 6 }}>
                                            <Typography variant="body2" sx={{ ml: 2, color: '#616161' }}>
                                                {item.points} điểm
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                ))}
                            </RadioGroup>
                        </Grid>

                        {/* Right Section */}
                        <Grid size={{ md: 6 }} container>
                            <Grid size={{ md: 12, xs: 12 }} container>
                                <Typography variant="h6">Chi tiết giao dịch</Typography>
                            </Grid>
                            <Grid size={{ md: 12 }} container>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        Sản phẩm được chọn
                                    </Typography>
                                </Grid>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        {selectedRow !== null ? items[selectedRow].points : '-'} điểm
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid size={{ md: 12 }} container>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        Giá
                                    </Typography>
                                </Grid>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        {selectedRow !== null ? `${items[selectedRow].price.toLocaleString('vi-VN')} VND` : '-'}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid size={{ md: 12 }} container>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        Phương thức thanh toán
                                    </Typography>
                                </Grid>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        QR pay
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid size={{ md: 12 }} container>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        Tên tài khoản
                                    </Typography>
                                </Grid>
                                <Grid size={{ md: 6 }}>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#424242' }}>
                                        {name}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid size={{ md: 12 }} container>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handlePayment}
                                    disabled={selectedRow === null}
                                >
                                    Xử lý thanh toán
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>


    );
}
