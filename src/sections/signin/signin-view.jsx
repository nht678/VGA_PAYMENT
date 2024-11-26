
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { signinUser } from '../../store/account/action';


export default function SigninView() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, error } = useSelector((state) => state.accountReducer);
    console.log('isAuthenticated', isAuthenticated);


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    console.log('formData', formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data', formData);
        await dispatch(signinUser(formData, navigate));
        // if (isAuthenticated)
        // {
        // message.success('Sign in successfully');
        // }
        // navigate('/', { replace: true });
    }
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate('/', { replace: true });
    //         message.success('Đăng nhập thành công');
    //     }
    // }, [isAuthenticated]);



    return (
        <>


            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm contents ">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <Typography className="mx-auto h-10 w-auto text-center mt-0" variant="h6" noWrap component="div" sx={{ color: 'rgba(99,102,241,1)' }} >
                        VGA
                    </Typography>

                    <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Đăng nhập vào tài khoản của bạn
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Địa chỉ email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mật khẩu
                                </label>
                                <div className="text-sm">
                                    {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Quên mật khẩu?
                                    </a> */}
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        {/* Not a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Start a 14 day free trial
                        </a> */}
                    </p>
                </div>
            </div>
        </>
    )
}