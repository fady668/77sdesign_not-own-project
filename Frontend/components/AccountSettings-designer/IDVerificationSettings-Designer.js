import React, { useState } from 'react'
import Image from 'next/image'
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/helpers/axios";
import {API_VERSION, BASE_URL} from "@/config";
import Swal from "sweetalert2";
import {user_info} from "@/app/Redux/Actions";
 import {useRouter} from "next/router";

const IDVerification = () => {
//   const [file, setFile] = useState("idver.svg")
//
//   const [file2, setFile2] = useState("idver2.svg")
//   const [status, setStatus] = useState('Pending Verification')
//   const [result, setResult] = useState(null)
//
//   const handleFileUpload = e => {
//     setFile(URL.createObjectURL(e.target.files[0]))
//   }
//
//   return (
//     <div className="form-group-sett m-40 mb-172">
//       <div className='idtxt'>
//         <p>77S-design is a professional marketplace and it’s important for us to confirm the identities of our users in order to maintain a trusted environment.</p>
//         <p>Verifying your ID helps to secure your accounts and payments.At certain moments you will be required to verify your ID to progress to the next step.</p>
//         <p>Once you started the verification process, you can check your status here.</p>
//       </div>
//       <div className='idimg fl-all3 mt-100 mb-45'>
//       <div className='submitID'>
//         <div className='idimg2 ' >
//         <Image src={file} alt='ID Document Preview' width={235} height={180} />
//         <input type='file' onChange={handleFileUpload} id="imgup" />
//         </div>
//         <p>Submit your ID</p>
//         </div>
//         <div className='submitID'>
//         <div className='idimg2'>
//         <Image src={file2} alt='ID Document Preview' width={235} height={180} />
//         <input type='file' onChange={handleFileUpload} id="imgup" />
//         </div>
//         <p>Submit selfie</p>
//         </div>
//
//         {file!="idver.svg" && (
//           <div>
//
//             <p>Document Status: {status}</p>
//             <p>Submission Date: {new Date().toLocaleDateString()}</p>
//             {result && <p>Verification Result: {result}</p>}
//           </div>
//         )}
//       </div>
//       <div className="form-group w-40 jend">
//                 <label htmlFor="last-name">ID number </label>
//                 <input type="password" className="form-control" id="passwordnew" />
//         </div>
//       <div className="profile__submit-button mt-60">
//         <button>Submit</button>
//       </div>
//     </div>
//   )
// }


    const [fileu, setFile] = useState("idver.svg")
    const [status, setStatus] = useState('Pending Verification')
    const [result, setResult] = useState(null)
    const [Avatar,setAvatar] = useState('idver.svg')
    const [imgChng,setImgChng] = useState('46')
    const [idNumber,setIdnumber] =useState('')
    const router = useRouter();
    const user_infor= useSelector((state)=>state.user_info)
     const handleFileUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    const dispatch = useDispatch()
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const VerifyId =async ()=>{
        console.log('avartarat',imgChng)
        if(imgChng==='46'){
            Swal.fire({
                title: 'error',
                text: 'Please Choose a valid image',
                icon: 'error',
                timer: 1000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: true
            })
            return
        }
        if(idNumber.length<5){
            Swal.fire({
                title: 'error',
                text: 'Please input a valid Id Number',
                icon: 'error',
                timer: 1000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: true
            })
            return
        }
        console.log("avatar file",Avatar)
        const frmDta = new FormData
        frmDta.append('id_card',Avatar)
        frmDta.append('user',user_infor.id)
        frmDta.append('id_number',idNumber)

        await axiosInstance.post(`${BASE_URL}/${API_VERSION}/user/verify/`,frmDta,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        ).then((res)=>{
            Swal.fire({
                title: 'Success',
                text: 'Your Verification Information Submitted \n Successfully',
                icon: 'success',
                timer: 3000, // Time in milliseconds (2 seconds in this example)
                showConfirmButton: true
            }).then(()=>{
               router.reload()
            })
            console.log(res.data)


        }).catch((res)=>{
            console.log(res)
        })
    }

    return (
        <div className="form-group-sett m-40 mb-172">
            <div className='idtxt'>
                <p>77S design is a professional marketplace and it’s important for us to confirm the identities of our users in order to maintain a trusted environment.</p>
                <p>Verifying your ID helps to secure your accounts and payments.At certain moments you will be required to verify your ID to progress to the next step.</p>
                <p>Once you started the verification process, you can check your status here.</p>
            </div>
            <div>

                <p>Document Status: {user_infor.verification_status}</p>
                {/*<p>Submission Date: {new Date().toLocaleDateString()}</p>*/}
                {/*{result && <p>Verification Result: {result}</p>}*/}
            </div>

            { user_infor.verification_status==='not_verified' ?
                <div className='idimg'>
                    <div className="form-group w-40 jend">
                        <label htmlFor="last-name">ID number </label>
                        <input type="text" className="form-control" id="passwordnew"
                               onChange={(e)=>{
                                   setIdnumber(e.target.value)
                               }}
                        />
                    </div>


                    <div className='submitID'>
                        <div className='idimg2'>

                            { imgChng==='46' ?

                                (<img  src={'idver.svg'} alt='ID Document Preview' width={235} height={180} />)
                                :
                                (<img  src={selectedImage} alt='ID Document Preview' width={235} height={180} />)
                            }
                            <input
                                type="file"
                                placeholder=""
                                name="myImage"
                                className="inputfileupload2"
                                onChange={(event) => {
                                    setImgChng('00')
                                    setAvatar(event.target.files[0]);
                                    setFile(`data:image/png;base64,${URL.createObjectURL(event.target.files[0])}`)
                                    handleImageChange(event)
                                    setFile(event.target.files[0])
                                    // console.log(URL.createObjectURL(event.target.files[0]));

                                }}
                            />
                        </div>
                        <p>Submit your ID</p>
                    </div>


                    <div className={"profile__submit-button mt-80"}>
                        <button onClick={()=>{

                            VerifyId()
                        }}>Submit</button>
                    </div>


                </div>
                :
                <h1> Your ID Card Is {user_infor.verification_status} </h1>
            }


        </div>
    )
}


export default IDVerification
