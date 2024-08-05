import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GeneralSettings2 from "@/components/AccountSettings-designer/GeneralSettings-Designer";
import ExperSettings from "@/components/AccountSettings-designer/exp-settings";
import IDVerificationSettings2 from "@/components/AccountSettings-designer/IDVerificationSettings-Designer";
import NotificationsSettings from "@/components/AccountSettings-designer/NotificationsSettings-Designer";
import ProfileSettings from "@/components/AccountSettings-designer/ProfileSettings-Designer";
import { useEffect } from "react";
import { BASE_URL, API_VERSION } from "@/config";
import Cookies from "js-cookie";
import useAuth from "@/contexts/auth.contexts";
import axiosInstance from "@/helpers/axios";
import axios from "axios";
import {user_designer, user_info} from "@/app/Redux/Actions";
import Swal from "sweetalert2";
import {useDispatch, useSelector} from "react-redux";
// import TimezoneSelect from 'react-timezone-select'

const AccountSettings = () => {
  const { user } = useAuth();
  const [activeComponent, setActiveComponent] = useState("General");

  const csrfToken = Cookies.get("csrfToken");
  const dispatch = useDispatch()
  const revo = useSelector((state)=>state.refresh_Account)

  useEffect(() => {
    // if (user.user_type !== "designer") {
    //   window.location.href = "/AccountSettings";
    // }

    // axiosInstance(`${BASE_URL}/${API_VERSION}/user/csrf/`);
    // fetch(`${BASE_URL}/${API_VERSION}/user/profile/client/5/`, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRFToken": csrfToken,
    //   },
    //   credentials: "include",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.error(error));
    const getAccount=async ()=>{

    await axiosInstance.get(`${BASE_URL}/${API_VERSION}/user/profile/designer/62`)
        .then((res) => {
          if (res.data.user){
            console.log('profile designer',res.data.user.birth_date)
            dispatch(user_designer(res.data))
          }
          else {


            // Swal.fire({
            //   title: 'Success',
            //   text: `Logged In sucessfully \n Welcome ${res.data.user.username}`,
            //   icon: 'success',
            //   timer: 3000, // Time in milliseconds (2 seconds in this example)
            //   showConfirmButton: false
            // })

            console.log(res.data);

          }
        })
        .catch((error) => {
          // console.error(error);setErrorr(true)
        });

    }
getAccount()

  }, [revo]);



  return (
    <div className="settings-container ">
      <div className="home_section mainscr">
        <Navbar user />
        <div className="max mt-133">
          <div className="my-workkk  mb-46">
            <h3 id="title">Account Settings</h3>
          </div>

          <div className="settings-nav">
            <button
              className={` ${
                activeComponent === "General" ? "active nav-btn" : "nav-btn"
              }`}
              onClick={() => setActiveComponent("General")}
            >
              General
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Profile" ? "active" : ""
              }`}
              onClick={() => {
                setActiveComponent("Profile");
                console.log(activeComponent);
              }}
            >
              Profile
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Experience" ? "active" : ""
              }`}
              onClick={() => {
                setActiveComponent("Experience");
                console.log(activeComponent);
              }}
            >
              Experience
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Notifications" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("Notifications")}
            >
              Notifications
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "ID Verification" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("ID Verification")}
            >
              ID Verification
            </button>
          </div>
        </div>
      </div>

      <div className=" mainscr h-60v ">
        <div className="max">
          {activeComponent === "General" && <GeneralSettings2 />}
          {activeComponent === "Profile" && <ProfileSettings />}
          {activeComponent === "Experience" && <ExperSettings />}
          {activeComponent === "Notifications" && <NotificationsSettings />}
          {activeComponent === "ID Verification" && <IDVerificationSettings2 />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
