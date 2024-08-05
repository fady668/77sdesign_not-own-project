import { API_VERSION, BASE_URL } from "@/config";
import React, {useEffect, useLayoutEffect, useState} from "react";
import Swal from "sweetalert2";
import {useRouter} from "next/router";
import axios from "axios";
import { useSearchParams } from 'next/navigation'

const ConfirmEmail = () => {
  const router = useRouter();
  const [status, setStatus] = useState("Confirming email ⏳");
  const [Kk,setKk]=useState('')
    const [Tt,setTt]=useState('')

    const searchParams = useSearchParams()

  const confirmEmailRequest = async (k,t) => {
      // const { k, t } = router.query;
      const key = searchParams.get('k')
      const token = searchParams.get('t')

        await axios.get(
            `${BASE_URL}/${API_VERSION}/user/confirm-email/${k}/${t}/`
        ).then((res)=>{
            if (res.data.success) {
                Swal.fire({
                    title: 'Success',
                    text: "Email Confirmed , Now you can Log In",
                    icon: 'success',
                    timer: 3000, // Time in milliseconds (2 seconds in this example)
                    showConfirmButton: false
                }).then(()=>{
                    router.push('/login')
                })
            }
            if(res.data.error){
                Swal.fire({
                    title: 'Error',
                    text: res.data.error,
                    icon: 'error',
                    timer: 1000, // Time in milliseconds (2 seconds in this example)
                    showConfirmButton: false
                }).then(()=>{
                    router.push('/')
                })
            }

        }).catch(()=>{
            Swal.fire({
                title: 'Error',
                text: 'Invalid email or already verified',
                icon: 'error',
                timer: 1000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: false
            }).then(()=>{
                router.push('/')
            })
        })
    }



    // const urlParams = new URLSearchParams(window.location.search);
    useEffect(() => {
        const { k, t } = router.query;
        if (k && t) {
            // Do something with the parameters
        console.log(k,t)


            confirmEmailRequest(k,t);
        } else {
            router.push('/')
        }

  }, [router.query]);
    // console.log(router.query)
    // const k = searchParams.get('k')
    // const t = searchParams.get('t')


  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default ConfirmEmail;
