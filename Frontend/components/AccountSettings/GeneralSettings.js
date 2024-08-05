import ReactFlagsSelect from "react-flags-select";
import React, {useEffect, useState} from "react";
import 'react-phone-input-2/lib/style.css'

import PhoneInput from 'react-phone-input-2'
import {useSelector} from "react-redux";
import axiosInstance from "@/helpers/axios";
import {API_VERSION, BASE_URL} from "@/config";

// import TimezoneSelect from 'react-timezone-select'


const GeneralSettings = () => {

    const [selected, setSelected] = useState("EG");
    const [value, setValue] = useState()
    const [selectedTimezone, setSelectedTimezone] =useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    console.log(selectedTimezone)
    const user_c = useSelector((state)=>state.user_client)
    const [gInfo,setgInfo]= useState(
        {"id": 1,
            "user": {
                "id": 10,
                "email": "romany",
                "username": "romanytadrosmilad9",
                "user_type": "client",
                "is_verified": false,
                "date_joined": "2024-01-05T13:54:41.911684Z",
                "profile_completed": true
            },
            "firstname": "",
            "lastname": "",
            "country": "",
            "city": "",
            "timezone": "",
            "address": "",
            "state": "",
            "zip_code": "",
            "phone": "",
            "languages": "",
            "bio": "",
            "avatar": null,
            "id_card": null,
            "rating": 0
        }
    )
    useEffect(() => {
        const hasKeys = Object.keys(user_c).length > 0;
        console.log(user_c)
        if(user_c){

            setgInfo(user_c)
        }
    }, [user_c]);

    const handleOnChangeInput= (key, value) => {
        setgInfo(prevState => ({
            ...prevState,
            [key]: value,
        }));

    }
    const updateG =async ()=>{
        await axiosInstance.patch(`${BASE_URL}/${API_VERSION}/user/profile/client/${gInfo.user.id}`,{
            "firstname": gInfo.firstname,
            "lastname": gInfo.lastname,
            "country": gInfo.country,
            "city": gInfo.city,
            "timezone": gInfo.timezone,
            "address": gInfo.address,
            "state": gInfo.state,
            "zip_code": gInfo.zip_code,
            "phone": gInfo.phone,


        }).then((res)=>{
            console.log(res.data)
        })
            .catch((error) => {console.log(error.response.data)});
    }
    return (
        <div>
            <form className="form-group-sett m-40 mb-172">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" value={gInfo.user.email} className="form-control" id="name" />
                </div>

                <div className='form-group1'>
                    <div className="form-group w-40">
                        <label htmlFor="first-name">First Name</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('firstname',e.target.value)}}

                            type="text" value={gInfo.firstname} className="form-control" id="first-name" />
                    </div>
                    <div className="form-group w-40">
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('lastname',e.target.value)}}

                            type="text" value={gInfo.lastname} className="form-control" id="last-name" />
                    </div>
                </div>

                {/*<div className="form-group">*/}
                {/*  <label htmlFor="text">Link your portfolio (behance, dribbble, etc)</label>*/}
                {/*  <input type="text" className="form-control" id="Address" />*/}
                {/*  <input type="text" className="form-control" id="Address" />*/}
                {/*</div>*/}
                {/*<div className="form-group">*/}
                {/*  <label htmlFor="text">Social media</label>*/}
                {/*  <input type="text" className="form-control" id="social" />*/}
                {/*</div>*/}
                <div className="form-group">
                    <label htmlFor="address">Address details</label>
                    <input
                        onChange={(e)=>{handleOnChangeInput('address',e.target.value)}}

                        type="text" value={gInfo.address} className="form-control" id="address" />
                </div>

                <div className='form-group1'>

                    <div className="form-group w-30">
                        <label htmlFor="last-name">Country</label>
                        <ReactFlagsSelect
                            selected={gInfo.country}
                            onSelect={(code) => {
                                setSelected(code);
                                handleOnChangeInput('country',code)
                            }}

                            selectButtonClassName='SelectCountry'
                            searchable
                        />
                    </div>
                    <div className="form-group w-30">
                        <label htmlFor="last-name">City</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('city',e.target.value)}}

                            value={gInfo.city} type="text" className="form-control" id="City" />
                    </div>
                    <div className="form-group w-30">
                        <label htmlFor="first-name">Time Zone</label>
                        <input value={gInfo.timezone} type="text"
                               onChange={(e)=>{handleOnChangeInput('timezone',e.target.value)}}

                               className="form-control" id="Time-Zone" />
                        {/*<TimezoneSelect*/}
                        {/*  value={selectedTimezone}*/}
                        {/*  onChange={(e)=>{handleOnChangeInput('timezone',e.value)}}*/}
                        {/*  // selectButtonClassName='SelectCountry'*/}
                        {/*/>*/}
                    </div>
                </div>
                <div className='form-group1'>
                    <div className="form-group w-30">
                        <label htmlFor="State">State(opt.)</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('state',e.target.value)}}

                            value={gInfo.state} type="text" className="form-control" id="State" />
                    </div>
                    <div className="form-group w-30">
                        <label htmlFor="Zip">Zip(opt.)</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('zip_code',e.target.value)}}

                            value={gInfo.zip_code} type="text" className="form-control" id="Zip" />
                    </div>
                    <div className="form-group w-30">
                        <label htmlFor="Phone-Number">Phone Number</label>
                        <input
                            onChange={(e)=>{handleOnChangeInput('phone',e.target.value)}}

                            value={gInfo.phone} type="text" className="form-control" id="Phone-Number" />
                    </div>
                </div>
                <div className='profile__submit-button mt-192' >
                    <button type={'button'} onClick={()=>{updateG()}}  className="btn btn-primary">Continue</button>
                </div>
            </form>

        </div>
    );
};

export default GeneralSettings;
