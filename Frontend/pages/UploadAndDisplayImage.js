import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import Dot from "@/components/Dot";
const UploadAndDisplayImage = () => {
    const handleFS = useFullScreenHandle();

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="max3">
        <button className={'btn btn-primary'}>hghg</button>
        <button className="IconBtn abs3"><Image src="CloseComm.svg" alt='' width={19} height={19} onClick={()=>router.back()}  /></button>

     <div style={{height:"779.06px",display:"flex",width:"100%"}}>
      {selectedImage?
        <div style={{width:"70%",margin:"auto"}}>
          <Image
            alt="not found"
            width={250}
            height={250}
            style={{width:"90%",height:"90%"}}
            src={URL.createObjectURL(selectedImage)}
          />
            {/*<FullScreen handle={handleFS} style={{display:"flex",justifyContent:"center"}}>*/}
            {/*    <Image src="subex1.svg" alt='' width={928} height={928}    />*/}
            {/*</FullScreen>*/}

        </div>


      :
    <div style={{width:"70%",margin:"auto"}}>
      <input
        type="file"
        placeholder="Drag and drop to upload or click to browse to choose a file"
        name="myImage"
        className="inputfileupload"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);

        }}

      />
       <FontAwesomeIcon icon="fa-solid fa-check-square" />
       </div>

}
        <div style={{width:"30%",height:"100%",display:"flex",flexDirection:"column",margin:"auto"}}>
            <h3>Upload Sample</h3>
            <div>
        {selectedImage?
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          :
          ""
        }
        <div style={{display:"flex",flexDirection:"column",margin:"30px 0"}}>
          <label style={{fontSize:"18px",color:"#3d3d3d"}}>Design Title</label>
          <span style={{fontSize:"14px",margin:"10px 0"}}>choose a concise title for your design.</span>
          <input style={{height:"32px",borderRadius:"7px"}} />
        </div>

        <div style={{display:"flex",flexDirection:"column",margin:"30px 0"}}>
          <label style={{fontSize:"18px",color:"#3d3d3d"}}>Description</label>
          <span style={{fontSize:"14px",margin:"10px 0"}}>Describe your design process and the result.</span>
          <textarea style={{height:"84px",borderRadius:"7px"}} />
        </div>
        <div>
          <button disabled={!selectedImage}>Add design</button>
          <button onClick={() =>

          window.location.reload(false)

          }>Cancel</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;
