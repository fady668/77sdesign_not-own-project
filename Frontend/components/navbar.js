import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BASE_URL, API_VERSION } from "@/config";
import { useRouter } from "next/router";
// import useAuth from "@/contexts/auth.contexts";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "@/helpers/axios";
import Cookies from "js-cookie";
import {user_info} from "@/app/Redux/Actions";

const Navbar = () => {
  // const { user } = useAuth();
  const router = useRouter();
  const user_details = useSelector((state)=>state.user_info)
  const dispatch =useDispatch()
  if (typeof window !== "undefined") {
    window.addEventListener("click", function (e) {
      if (document.getElementById("icon-menu")) {
        if (document.getElementById("icon-menu").contains(e.target)) {
          handleClick();
        } else {
          setShowMenu(true);
        }
      }
      if (document.getElementById("actions")) {
        if (document.getElementById("actions").contains(e.target)) {
          handleWorkClick();
        } else {
          setShowWorkMenu(true);
        }
      }
    });
  }
  // const [user_details, setUser_details] = useState(null);
  const  getUserdetail = async () =>{
    const accesso = await AsyncStorage.getItem('access_token')
    console.log('accesso',accesso)
    if(accesso!==null){
      if(!user_details.id){
        console.log('no user detail')
        await axiosInstance.get(`${BASE_URL}/${API_VERSION}/user/details`,{
          headers:{
            'Authorization':`Bearer ${accesso}`
          }
        }).then((res)=>{
          console.log('res user detail', res.data)
          if(res.data.id){
            dispatch(user_info(res.data))

          }
        }).catch(error => {
          if (error.response) {

            if (error.response.status === 401) {

              handleLogout()
            }
          }
        });


      }

    }
  }
  useEffect(() => {
  getUserdetail()

  }, []);
  const [showMenu, setShowMenu] = useState(true);
  const [showWorkMenu, setShowWorkMenu] = useState(true);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const handleWorkClick = () => {
    setShowWorkMenu(!showWorkMenu);
  };

  const handleLogout = () => {

    localStorage.removeItem("refresh_token");
    localStorage.removeItem("access_token");
    localStorage.removeItem('ally-supports-cache')
    Cookies.remove('access')
    Cookies.remove('username')
    Swal.fire({
      title: 'Success',
      text:"logged out successfully",
      icon: 'success',
      timer: 3000, // Time in milliseconds (2 seconds in this example)
      showConfirmButton: false
    })
    router.reload();
  };

  return (
    <nav className="navbar">
      <div className="right2">
        <Link href="/">
          <Image
            src="logo1.svg"
            alt="Logo"
            className="logo"
            width={148}
            height={40}
          />
        </Link>
        <div className="fl fl-gap5">
          <Link href="/categories2">Categories</Link>
          <Link href="/Discover">Discover</Link>
          <Link href="/Designers">Designers</Link>
        </div>
      </div>
      <div className="right2">
        <Link href="/help">Help</Link>
        <div className="action">
          <button className="navworkbtn" id="actions">
            Work
          </button>
          {!showWorkMenu && (
            <ul className="menu">
              <div className="p-t20 fl-col fl-gap23">
                <li className="menu-item">
                  <Link href="/BrowseContest">Browse contests</Link>
                </li>
                <li className="menu-item">
                  <Link href="/BrowseProjects">Browse Projects</Link>
                </li>
                <li className="menu-item">
                  <Link href="/My-work">My Work</Link>
                </li>
              </div>
            </ul>
          )}
        </div>

        {user_details.id ? (
          <div className="fl fl-gap5">
            <Link href="/">
              <Image
                src="env.svg"
                className="navicon"
                alt=""
                width={25}
                height={25}
              />
            </Link>
            <Link href="/">
              <Image
                src="bell.svg"
                className="navicon"
                alt=""
                width={25}
                height={25}
              />
            </Link>

            <div className="action">
              <i className="icon" id="icon-menu">
                <Image
                  src="PI.svg"
                  className="navicon"
                  alt=""
                  width={29}
                  height={30}
                />
              </i>
              {!showMenu && (
                <ul className="menu">
                  <div className="p-t20 fl-col fl-gap23">
                    <li className="menu-item">
                      <Link
                        href={
                          user_details.user_type === "designer"
                            ? "/AccountSettings-designer"
                            :"/AccountSettings/"
                        }
                      >
                        Account Settings
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link
                        href={{
                          pathname: "/profile",
                          query: { user_id: 1 },
                        }}
                      >
                        Profile
                      </Link>
                      {/* <Link href="/profile" query={user_id:user.id}>Profile</Link> */}
                    </li>
                    <li className="menu-item">
                      <Link href="/balance">Balance</Link>
                    </li>
                    <li className="menu-item">
                      <button href="#" onClick={handleLogout}>
                        Log Out
                      </button>
                    </li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Link href="/login">Login/SignUp</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
