import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/helpers/axios";
import {API_VERSION, BASE_URL} from "@/config";
import {refresh_Account} from "@/app/Redux/Actions";

const Profile = () => {
    const [file, setFile] = useState(null)
    const user_designer = useSelector((state)=>state.user_designer)
    const [Avatar,setAvatar] = useState('')
    const [Bio,setBio] = useState('')
    const [Langs, setLangs] = useState('')
    const [cPass,setcPass] = useState('')
    const [nPass,setnPass] = useState('')
    const dispatch = useDispatch()
    const [imgChng,setImgChng] = useState('64')

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
        await axiosInstance.patch(`${BASE_URL}/${API_VERSION}/user/profile/designer/${user_designer.user.id}`,frmData,
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

        setAvatar(user_designer.avatar)
        setBio(user_designer.bio)
        setLangs(user_designer.languages)

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
                  <input value={user_designer.user.username} type="text" id="Username"/>
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
        <button id='profile__About-button'>About</button>
      </div>
      <div className="profile__submit-button">
        <button type={'button'} onClick={updateP}>Submit</button>
      </div>
    </div>
  );
};

export default Profile;
