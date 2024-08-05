import {NextResponse} from "next/server";
import axiosInstance from "@/helpers/axios";
import {API_VERSION, BASE_URL} from "@/config";
import axios from "axios";


export default async function  middleware(req){

    let  accesso = req.cookies.get('access');
    let  csrfToken = req.cookies.get('77SDESIGN_CSRF_TOKEN');
    // console.log(accesso.value)
    // if (accesso !== undefined) {
    try{
        const response = await fetch(`${BASE_URL}/${API_VERSION}/user/details/`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                'X-CSRFToken': csrfToken.value,
                'Authorization': `Bearer ${accesso.value}`,
            },
        });
        console.log(response.ok)
    // }
    }catch (err) {
        // Handle axiosInstance error
        console.error('Error fetching user details:', err);
    }
let url = req.url
    if (url.includes('/AccountSettings') && !accesso) {
        // Redirect to the root if the user is trying to access '/AccountSettings' without a valid access token
        return NextResponse.redirect('http://localhost:3000');
    }

    // If the URL doesn't include '/AccountSettings' or if there is a valid access token, let the request proceed
    return NextResponse.next();
}
