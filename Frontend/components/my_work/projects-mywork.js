import React, { useState , useEffect } from "react";
import Image from 'next/image';
import axiosInstance from "@/helpers/axios";
import { BASE_URL, API_VERSION } from "@/config";
import WorkCard from '@/components/my_work/WorkCard';
const Projects = ()=>{
    const [activeside, setActiveside] = useState("Active");
    const [Data, setData] = useState(null);
    useEffect(() => {
      
      axiosInstance
      .get(`${BASE_URL}/${API_VERSION}/project/client/`, {
      })
      .then((res) => {
        const data = res.data;
        console.log('res:',res);
        console.log('data:',data.results);
        setData(data.results);
      
      })
      .catch((err) => {
        console.error(err);
        console.log(error.response.data)
      });
  
    
  },[]);


    return(
        <div className=" h-60v fl jst-SB">

<div className="fl-all4 work-sidefilter fl-gap3 mb-190">
     
     <button id={`${
     activeside === "Active" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Active')}>Active (0)</button>


      <button id={`${
     activeside === "Invited" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Invited')}> Invited (0)</button>

   
     <button id={`${
     activeside === "Finished" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Finished')}>Finished (0)</button>

       <button id={`${
     activeside === "Canceled" ? "sideActive" : ""
   }`} onClick={()=> setActiveside('Canceled')}>Canceled (0)</button>


    </div>



<div className="mywork-ex">
    {Data?Data.map((job,index)=>(
      
      <WorkCard key={index} Data={job}/>

    ))
    :
    <p>no data</p>
    }
 </div>

 </div>



       
     
 
    )
}
export default Projects;