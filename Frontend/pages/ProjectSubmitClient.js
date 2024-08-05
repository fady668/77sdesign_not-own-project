import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cardDataProject } from "../components/consts";
import NormalView from "@/components/SpaceWork/NormalView";
import DetailedView from "@/components/SpaceWork/DetailedView";
import { useRouter } from "next/router";
import { BASE_URL, API_VERSION } from "@/config";
import Cookies from "js-cookie";
import ProjectDetails from "@/components/projectDetails/ProjectDetails";
import ProposalDescription from "@/components/ProposalDescription";

const ProjectSubmitClient = () => {
  const [CPMisOpen, setCPMOpen] = useState(false);
  const [Filter1, setFilter1] = useState("All");
  const [Filter2, setFilter2] = useState("Rated");
  const [Filter3, setFilter3] = useState("All designers");
  const [Filter4, setFilter4] = useState("Newest first");
  const [Filter1Open, setFilter1Open] = useState(false);
  const [Filter2Open, setFilter2Open] = useState(false);
  const [Filter3Open, setFilter3Open] = useState(false);
  const [Filter4Open, setFilter4Open] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Design");
  const [ViewType, setViewType] = useState("Normal");
  function handleViewTypeNormal() {
    setViewType("Normal");
  }
  function handleViewTypeDetailed() {
    setViewType("Detailed");
  }
  const csrfToken = Cookies.get("csrfToken");
  const router = useRouter();
  const [ProjectData, setProjectData] = useState([]);
  const [itemID, setitemID] = useState(null);
  useEffect(() => {
    if (router.isReady) {
      const { projectID } = router.query;
      setitemID(projectID);
      if (!projectID) return null;
      fetch(`${BASE_URL}/${API_VERSION}/project/${router.query.projectID}/`, {
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
          setProjectData(data);
        })
        .catch((error) => console.error(error));
    }
  }, [router.isReady]);

  return (
    <div className="ProfilePage">
      <div className="mainscr ">
        <Navbar />
      </div>

      <div className="mainscr  ">
        <div className=" w-101 pt-96">
          <div className="max ">
            <div>
              <div>
                <h1>{ProjectData.name} </h1>

                <div className="fl jst-SB w-101 hi mtop30">
                  <div>
                    <p className="cn3">Client Name</p>
                    <div className="fl-col jst-FE h-90">
                      <div className="fl fl-gapp3 cpm">
                        <Link
                          href="InviteDesigner"
                          id="ProjectSubmitDesignerButton"
                          style={{ background: "#00C7C7" }}
                        >
                          Invite Designer
                        </Link>
                        <div style={{ position: "relative" }}>
                          <button
                            id="cpm2"
                            onClick={() => {
                              setCPMOpen(!CPMisOpen);
                            }}
                          >
                            ...
                          </button>
                          <div
                            className="cpmDropDown"
                            id={CPMisOpen ? "" : "DN"}
                          >
                            <button
                              className="clearbtn"
                              onClick={() => {
                                setCPMOpen(!CPMisOpen);
                              }}
                            >
                              Edit In Brief
                            </button>
                            <button
                              className="clearbtn"
                              onClick={() => {
                                setCPMOpen(!CPMisOpen);
                              }}
                            >
                              Guarantee prize
                            </button>
                            <button
                              className="clearbtn"
                              onClick={() => {
                                setCPMOpen(!CPMisOpen);
                              }}
                            >
                              Promote{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>Watch(7)</p>
                    <div>
                      <div className="fl mtop30  fl-gapp3">
                        <div className="">
                          <div className="messpart1  fl jsta fl-gap6 ">
                            <label>Price</label> <span>$ 190</span>{" "}
                            <p>
                              Standard
                              <br />
                              Award
                            </p>
                          </div>
                          <div className="messpart2 fl jst-SB ">
                            <div className="fl-col jst blind">
                              <Image
                                src="blind.svg"
                                width={22}
                                height={25}
                                alt=""
                              />
                              <p className="messpart-p">Blind</p>
                            </div>
                            <div className="fl-col jst">
                              <Image
                                src="dollar.svg"
                                width={22}
                                height={25}
                                alt=""
                              />
                              <p className="messpart-p">Guaranteed</p>
                            </div>
                            <div className="fl-col jst">
                              <Image
                                src="clock.svg"
                                width={22}
                                height={25}
                                alt=""
                              />
                              <p className="messpart-p">Urgent</p>
                            </div>
                            <div className="fl-col jst">
                              <Image
                                src="vector2.svg"
                                width={22}
                                height={25}
                                alt=""
                              />
                              <p className="messpart-p">NDA</p>
                            </div>
                          </div>
                        </div>
                        <div className="fl-col jst-SB messpart">
                          <button
                            onClick={() => setActiveComponent("Brief")}
                            id={
                              activeComponent === "Brief"
                                ? "messpartActive"
                                : ""
                            }
                          >
                            Brief
                          </button>
                          <button
                            onClick={() => setActiveComponent("Messages")}
                            id={
                              activeComponent === "Messages"
                                ? "messpartActive"
                                : ""
                            }
                          >
                            Messages
                          </button>
                          <button
                            onClick={() => setActiveComponent("Design")}
                            id={
                              activeComponent === "Design"
                                ? "messpartActive"
                                : ""
                            }
                          >
                            Designs
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="AccpetReject Accpet">Accpet</button>
                <button className="AccpetReject Reject">Reject</button>
              </div>

              <div className="disc-head4 fl jst-SB">
                <div className="fl w-68 fl-gapp16">
                  <div className="fl slct-cpm w-191">
                    {/* <select className='w-191'>
                        <option>All (10)</option>
                    </select> */}
                    <div className="selectSW w-191">
                      <button
                        className="w-191 selectBtn BR1"
                        onClick={() => setFilter1Open(!Filter1Open)}
                      >
                        {Filter1} (10)
                      </button>
                      <div
                        className="SelectDropDown w-139"
                        id={Filter1Open ? "" : "DN"}
                      >
                        <ul className="fl-col fl-gap14">
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter1("All ");
                                setFilter1Open(!Filter1Open);
                              }}
                            >
                              All (10)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter1("Active ");
                                setFilter1Open(!Filter1Open);
                              }}
                            >
                              Active (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter1("Withdrawn ");
                                setFilter1Open(!Filter1Open);
                              }}
                            >
                              Withdrawn (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter1("Declined ");
                                setFilter1Open(!Filter1Open);
                              }}
                            >
                              Declined (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter1("Eliminated ");
                                setFilter1Open(!Filter1Open);
                              }}
                            >
                              Eliminated (0)
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fl slct-cpm w-223">
                    {/* <select className='w-223'>
                        <option>Rated (2)</option>
                    </select> */}
                    <div className="selectSW w-223">
                      <button
                        className="w-223 selectBtn BR2"
                        onClick={() => setFilter2Open(!Filter2Open)}
                      >
                        {Filter2}{" "}
                      </button>
                      <div
                        className="SelectDropDown w-139"
                        id={Filter2Open ? "" : "DN"}
                      >
                        <ul className="fl-col fl-gap14">
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("Rated ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              Rated (2)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("5 stars ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              5 stars (2)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("4 stars ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              4 stars (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("3 stars ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              3 stars (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("2 stars ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              2 stars (0)
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter2("1 stars ");
                                setFilter2Open(!Filter2Open);
                              }}
                            >
                              1 stars (0)
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fl slct-cpm w-256">
                    {/* <select className='w-256'>
                        <option>All designers (22)</option>
                    </select> */}
                    <div className="selectSW">
                      <button
                        className="w-256 selectBtn BR3"
                        onClick={() => setFilter3Open(!Filter3Open)}
                      >
                        {Filter3} (22)
                      </button>
                      <div
                        className="SelectDropDown w-139"
                        id={Filter3Open ? "" : "DN"}
                      >
                        <ul className="fl-col fl-gap14">
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter3("All Designers ");
                                setFilter3Open(!Filter3Open);
                              }}
                            >
                              All Designers
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter3("Designer Name");
                                setFilter3Open(!Filter3Open);
                              }}
                            >
                              Designer Name
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter3("Designer Name");
                                setFilter3Open(!Filter3Open);
                              }}
                            >
                              Designer Name
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter3("Designer Name");
                                setFilter3Open(!Filter3Open);
                              }}
                            >
                              Designer Name
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fl w-28 jst-SB ">
                  <div className="fl slct-cpm">
                    {/* <select className='w-157'>
                        <option>Newest first</option>
                    </select> */}
                    <div className="selectSW">
                      <button
                        className="w-157 selectBtn BR4"
                        onClick={() => setFilter4Open(!Filter4Open)}
                      >
                        {Filter4}{" "}
                      </button>
                      <div
                        className="SelectDropDown w-139"
                        id={Filter4Open ? "" : "DN"}
                      >
                        <ul className="fl-col fl-gap14">
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter4("Newest first");
                                setFilter4Open(!Filter4Open);
                              }}
                            >
                              Newest first
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter4("Oldest first");
                                setFilter4Open(!Filter4Open);
                              }}
                            >
                              Oldest first
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter4("Highest rated first");
                                setFilter4Open(!Filter4Open);
                              }}
                            >
                              Highest rated first
                            </button>
                          </li>
                          <li>
                            <button
                              id="dropdownbtn"
                              onClick={() => {
                                setFilter4("Lowest rated first");
                                setFilter4Open(!Filter4Open);
                              }}
                            >
                              Lowest rated first
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fl slct-cpm jstfe">
                    <button
                      className="clearbtn"
                      onClick={() => handleViewTypeNormal()}
                    >
                      <Image
                        src="dotsquares.svg"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </button>
                    <button
                      className="clearbtn"
                      onClick={() => handleViewTypeDetailed()}
                    >
                      <Image src="dotlines.svg" alt="" width={50} height={50} />
                    </button>
                  </div>
                </div>
              </div>
              <div className=" ">
                {activeComponent === "Brief" && (
                  <ProjectDetails projectID={itemID} />
                )}
                {activeComponent === "Messages" && <ProposalDescription />}
                {activeComponent === "Design" && (
                  <div className="disc-card-cont">
                    {ViewType === "Normal" ? (
                      <NormalView
                        className="animate"
                        projectID={itemID}
                        cardData={{ cardDataProject }}
                      />
                    ) : (
                      <DetailedView
                        className="animate"
                        cardData={{ cardDataProject }}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectSubmitClient;
