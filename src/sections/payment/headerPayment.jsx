
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Image, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { signoutUserStudent } from '../../store/account/action';


const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://th.bing.com/th/id/OIP.xyVi_Y3F3YwEIKzQm_j_jQHaHa?rs=1&pid=ImgDetMain',
}

export default function HeaderPayment() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.accountReducer);
    const handleLogout = async (e) => {
        e.preventDefault();
        await dispatch(signoutUserStudent(accountId, navigate));

    };

    // const userNavigation = [
    //     { name: 'Đăng nhập', href: '/signinpayment' },
    //     { name: 'Đăng xuất', onClick: 'logout' },
    // ]

    let role = localStorage.getItem('role');
    let accountId = localStorage.getItem('accountId');

    const userNavigation = role
        ? [
            { name: 'Đăng xuất', onClick: 'logout' },
        ]
        : [
            { name: 'Đăng nhập', href: '/signinpayment' },
        ];
    console.log('userNavigation', userNavigation);

    useEffect(() => {
    }, [role, accountId]); // Thêm role vào dependency array

    return (
        <Box sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", height: 70, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Link to="/payment">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        display: { xs: 'block', sm: 'block' }, // Hiển thị cả trên mobile (xs) và tablet/desktop (sm)
                        marginLeft: 2,
                        color: 'rgba(99,102,241,1)',
                    }}
                >
                    VGA
                </Typography>
            </Link>
            <Menu as="div" className="relative ml-3">
                <div>
                    <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                    </MenuButton>
                </div>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    {userNavigation.map((item) => (
                        <MenuItem MenuItem key={item.name} >
                            <Link
                                to={item.href}
                                onClick={item.name === 'Đăng xuất' ? handleLogout : null}
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                            >
                                {item.name}
                            </Link>
                            {/* )} */}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </Box>
    );
}
