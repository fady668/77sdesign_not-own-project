import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState } from "react";
import Card from "@/components/profcard";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";
import Footer2 from "@/components/footer2";
import Link from "next/link";
// import {cardData2} from "../components/consts"
// import Browse from './browse';
// import ProjectsMessage3comp from '@/components/ProjectsMessage3comp';
import Nameinfo from "@/components/projectDetails/Nameinfo";
import OtherNote from "@/components/projectDetails/OtherNote";
import Reference from "@/components/projectDetails/Reference";
import BrandStyle from "@/components/projectDetails/BrandStyle";
import { useEffect } from "react";
import { BASE_URL, API_VERSION } from "@/config";
import Cookies from "js-cookie";

const ProjectDetails = ({ projectID }) => {
  const [isOpen, setOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Brief");
  const [navactiveComponent, setnavActiveComponent] = useState("Nameinfo");
  const [ApiData, setApiData] = useState({});
  const csrfToken = Cookies.get("csrfToken");
  useEffect(() => {
    if (projectID) {
      fetch(`${BASE_URL}/${API_VERSION}/project/${projectID}/`, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        credentials: "include",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setApiData(data);
        })
        .catch((error) => console.error(error));
    } else {
      return null;
    }
  }, [projectID]);

  return (
    <div className="ProfilePage">
      <div className=" w-101">
        <div className="disc-head4 fl jst-SB contestnav">
          <Link
            href="#Nameinfo"
            className={` ${
              navactiveComponent === "Nameinfo" ? "active" : "bn"
            }`}
            onClick={() => setnavActiveComponent("Nameinfo")}
          >
            Name & Info{" "}
          </Link>
          <Link
            href="#BrandStyle"
            className={` ${
              navactiveComponent === "BrandStyle" ? "active" : "bn"
            }`}
            onClick={() => setnavActiveComponent("BrandStyle")}
          >
            Brand Style{" "}
          </Link>
          <Link
            href="#Reference"
            className={` ${
              navactiveComponent === "Reference" ? "active" : "bn"
            }`}
            onClick={() => setnavActiveComponent("Reference")}
          >
            Reference & Inspiration
          </Link>
          <Link
            href="#OtherNote"
            className={` ${
              navactiveComponent === "OtherNote" ? "active" : "bn"
            }`}
            onClick={() => setnavActiveComponent("OtherNote")}
          >
            Other Note
          </Link>
        </div>

        <div className="contest-cont">
          <Nameinfo ApiData={ApiData} />
          <BrandStyle ApiData={ApiData} />
          <Reference />
          <OtherNote />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
