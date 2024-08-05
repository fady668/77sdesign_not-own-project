import axiosInstance from "@/helpers/axios";
import { useState, useEffect} from "react";
import { API_VERSION, BASE_URL } from "@/config";
import Cookies from "js-cookie";
const csrfToken = Cookies.get('77SDESIGN_CSRF_TOKEN');
// lib/withAuth.js

import { useRouter } from 'next/router';
import {useSelector} from "react-redux";

const withAuth = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter();
        const usertoken = useSelector((state)=>state.user_info.access_token)
        const userdetails=async ()=>{
            await  axiosInstance.get('user/details/',
                {headers:{'Authorization':`ّّBearer ${usertoken}`}}).then((res)=>{
                if(res.data.id){
                    sahalabissssa
                }
            })
        }
        // Your authentication logic goes here
        const isAuthenticated = true; // Replace with your actual authentication check
        useEffect(() => {
            // Redirect to login page if not authenticated
            if (!isAuthenticated) {
                router.push('/login');
            }
        }, [isAuthenticated]);
        // Pass the props to the wrapped component
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
