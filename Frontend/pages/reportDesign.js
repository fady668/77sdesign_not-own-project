import Image from "next/image";
import React from "react";

function reportDesign() {
  return (
    <div className="max" style={{ paddingTop: "70px" }}>
      <div className="fl mb-11" style={{ justifyContent: "right" }}>
        <button className="CloseBTN">X</button>
      </div>
      <div className=" fl h-90 ">
        <div className="w-25 sb-col1">
          <div className="mb-30">
            <div className="fl-col  fl-gap10 mb-11">
              <p>#3</p>
              <span>by designer name</span>
              <span>In contest name</span>
            </div>
          </div>

          <div className="fl fl-gap2 mb-25">
            <Image src="paidstock.svg" alt="" width={22} height={22} />
            <p style={{ fontSize: "12px" }}>Design uses paid stock</p>
          </div>

          <div className="fl  fl-gap2 jst-SB mb-82">
            <Image src="5stars.svg" alt="" width={130} height={18.5} />
          </div>
          <div className="fl  fl-gap2 jst-SB">
            <button className="reportBtn">Report design</button>
          </div>
        </div>
        <div
          className="sb-col2 listen"
          style={{ marginLeft: "90px", marginRight: "70px" }}
        >
          <Image src="logo.svg" alt="" width={609} height={608} />
        </div>
        <button className="otherDesigns">See other designs</button>
      </div>
    </div>
  );
}

export default reportDesign;
