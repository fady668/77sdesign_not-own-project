import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, {useEffect, useState} from 'react';
import Card from "@/components/profcard"
import Image from 'next/image';
import Footer2 from '@/components/footer2';
import Catmenu from '@/components/cat-menu';
import Link from 'next/link';
import {CatExp,Contacts, designerLevel, industries, Languages, lastActivity, listItems,listItems2,listItems3,listItems4,listItems5} from "../consts"
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "@/helpers/axios";
import UploadAndDisplayImage from "@/pages/UploadAndDisplayImage";
import { BASE_URL, API_VERSION } from "@/config";

const  ExperSettings = () => {
    const [isOpen, setOpen] = useState('');
    const [Approved, setApproved] = useState(true);
    const key=99;
    const dispatch = useDispatch()
    const [CatExpr,setCatexpr]=useState([])
    const user_designer = useSelector((state)=>state.user_designer)

    const handleClick= (id)=>{

        if(isOpen===id)
        {
            setOpen("");
        }
        else{
            console.log(id)
            setOpen(id);
        }

    }

    useEffect(() => {
        // if (user.user_type !== "designer") {

        const getAccount=async ()=>{

            await axiosInstance.get(`${BASE_URL}/${API_VERSION}/core/categories/`)
                .then((res) => {
                    if (res.data.results){
                        setCatexpr(res.data.results)
                        console.log('categories',res.data.results)
                    }
                    else {



                        console.log(res.data);

                    }
                })
                .catch((error) => {
                    // console.error(error);setErrorr(true)
                });

        }

        getAccount()

    }, []);

  return (



<div className=" ">
{/* <div className="fl  max"> */}


<div className="fl-all4 fl-gap50 w-101  pos form-group-sett m-40 mb-172">
<h1 className='pnew3'>Category</h1>
{CatExpr.map((item) => (
    <div key={item.id} className="fl-col ">
        <div className="fl exp fl-gap33">
            <div className='expLogo-cont fl-col jst'>
                <img src={`data:image/svg+xml;base64,${item.icon}`} alt="" width={75} height={75}/>
                <p>{item.name}</p>
            </div>

        <button onClick={()=>handleClick(item.id)}> View designs</button>

        {isOpen===item.id&&
            <div className='grycir'>
                <button  id="kkkkkk" onClick={()=>handleClick(item.id)}>
                    <Image src="droparrow2.svg" alt='' width={20} height={11.5} />
                </button>
            </div>
        }

                <button  data-bs-toggle="modal" data-bs-target="#exampleModal">Add Design +</button>
        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===item.id? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
                <p className='pnew' id='approved'>{Approved?"Approved":"Disapproved"}</p>
            </div>

            {
                user_designer.sample_designs.map((desi,index)=> {

                    if (item.id===desi.category){
                        return (
                            <div key={index} className='exp-ex'>
                                <img  width={"160px"} style={{alignContent:'center', verticalAlign:'bottom', marginTop:35}}
                                    src={`data:image/png;base64,${desi.image}`}/>
                            </div>
                        )
                    }

                })

            }



        </div>

    </div>
        ))}

<div key={99} className="fl-col ">
        <div className="fl exp fl-gap33">
            <div className='expLogo-cont fl-col jst'>
                {/* <Image src={item.img} alt="" width={75} height={60}/> */}
                <p>Other</p>
                <p>skills</p>
            </div>
       <div className='fl-col fl-gap5  jstfe h1000'>
        <div className='fl exp fl-gap33'>
        <button onClick={()=>handleClick(key)}> Add design +</button>
        {isOpen&&
        <div className='grycir'>
            <Image src="droparrow2.svg" alt='' width={20} height={11.5} />

        </div>
        }
        </div>
        <p className='pnew2' id='copywriter'>Finalizer, copy writer (company name), etc. ...</p>

       </div>



        </div>
        <div className='fl gap2 exp-ex-cont' id={`${isOpen===key? "flex":''}`}>

        {/* <button
          className={`nav-btn ${
            activeComponent === "Membership" ? "active" : ""
          }`}      /> */}

            <div className='outofbox'>
            <p className='pnew' id='approved'>{Approved?"Approved":"Disapproved"}</p>
            </div>


            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>
            <div className='exp-ex'>
            ex
            </div>

        </div>

    </div>

    <div className="profile__submit-button mt-60">
        <button>Submit</button>
    </div>

</div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
<UploadAndDisplayImage />
                    
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</div>

// </div>




  );
}

export default ExperSettings;






