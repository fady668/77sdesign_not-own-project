import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/helpers/axios";
import {API_VERSION, BASE_URL} from "@/config";
import {refresh_Account} from "@/app/Redux/Actions";

const Profile = () => {
    const [file, setFile] = useState(null)
    const user_c = useSelector((state)=>state.user_client)
    const [Avatar,setAvatar] = useState('')
    const [imgChng,setImgChng] = useState('64')
    const [Bio,setBio] = useState('')
    const [Langs, setLangs] = useState('')
    const [cPass,setcPass] = useState('')
    const [nPass,setnPass] = useState('')
    const dispatch = useDispatch()
    const handleFileUpload = e => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    const [randomData, setRandomData] = useState({ number: null, char: null });

    const getRandomNumberAndChar = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        setRandomData({ number: randomNumber, char: randomChar });
    };

    const updateP =async ()=>{
        const frmData = new FormData
        const response = await fetch(Avatar);
        const blob = await response.blob();
        getRandomNumberAndChar()
        frmData.append('avatar',blob,'image.jpeg')
        frmData.append('languages',Langs)
        frmData.append('bio',Bio)
        await axiosInstance.patch(`${BASE_URL}/${API_VERSION}/user/profile/client/${user_c.user.id}`,frmData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        ).then((res)=>{
            dispatch(refresh_Account(randomData))

            console.log(res.data)
        })
            .catch((error) => {console.log(error)});
    }


    const ChangeToDesigner =async ()=>{
        const frmData = new FormData
        const response = await fetch(Avatar);
        const blob = await response.blob();
        getRandomNumberAndChar()
        frmData.append('user_type',blob,'designer')

        await axiosInstance.patch(`${BASE_URL}/${API_VERSION}/user/profile/client/${user_c.user.id}`,frmData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
        ).then((res)=>{
            dispatch(refresh_Account(randomData))

            console.log(res.data)
        })
            .catch((error) => {console.log(error)});
    }
    useEffect(() => {

        setAvatar(user_c.avatar)
        setBio(user_c.bio)
        setLangs(user_c.languages)

    }, []);
    return (
        <div className="form-group-sett m-40 mb-172">
            <div className="form-group1 ">
                <div className="profile__img-upload">
                    <div className='img-up jst'>
                        {Avatar ?
                            <img
                                className='uploadedImage'
                                alt="not found"
                                width={"250px"}

                                src={ imgChng==='64'?
                                `data:image/png;base64,${Avatar}`
                                    :Avatar
                            }
                            />
                            :
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                            }}>
                                <span>Avatar</span>
                                <span>200x200</span>
                            </div>
                        }

                        {/* <input type='file' onChange={handleFileUpload} id="imgup" /> */}
                        <input
                            type="file"
                            placeholder=""
                            name="myImage"
                            className="inputfileupload2"
                            onChange={(event) => {
                                setImgChng('46')
                                console.log(event.target.files[0]);
                                setAvatar(URL.createObjectURL(event.target.files[0]));

                            }}
                        />
                    </div>
                </div>
                <div className="form-group  w-100">
                    <div>
                        <label htmlFor="last-name">Username</label>
                        <input value={user_c.user.username} type="text" id="Username"/>
                    </div>
                    <div>
                        <label htmlFor="last-name">Languages</label>
                        <input
                            onChange={(e)=>{setLangs(e.target.value)}}
                            value={Langs} type="text" id="Languages"/>
                    </div>

                </div>
            </div>
            <div className="form-group">
                <label htmlFor="last-name" className='mb-8'>Biography</label>
                <textarea value={Bio}
                          onChange={(e)=>{setBio(e.target.value)}}
                          id="Biography"></textarea>
            </div>
            <div className='p-33'>


                <h1 id='nn'>Change Password:</h1>

                <div className='form-group1'>
                    <div className="form-group w-40">
                        <label htmlFor="first-name">Current Password</label>
                        <input
                            value={cPass}
                            onChange={(e)=>{setcPass(e.target.value)}}
                            type="password" className="form-control" id="passwordold"/>
                    </div>
                    <div className="form-group w-40">
                        <label htmlFor="last-name">New Password</label>
                        <input
                            value={nPass}
                            onChange={(e)=>{setnPass(e.target.value)}}
                            type="password" className="form-control" id="passwordnew" />
                    </div>
                </div>
            </div>

            <div className="profile__About-button">
                <button type='button' id='profile__About-button' onClick={()=>{
                    ChangeToDesigner()
                }}>Convert To Designer</button>
            </div>
            <div className="profile__submit-button">
                <button className={'btn '} type={'button'} onClick={updateP}>Submit</button>
            </div>
        </div>
    );
};

export default Profile;
