import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer2 from "@/components/footer2";
import Link from "next/link";
import { BASE_URL, API_VERSION } from "@/config";
import {
  Logoidentity,
  Webdesign,
  ClothingMerchandise,
  ArtIllustration,
  Businessadvertising,
  industriesMenu,
} from "../components/consts";

const BrowseProjects = () => {
  const [AllIndustries, setAllIndustries] = useState("Industries");
  const [IndustriesisOpen, setIndustriesOpen] = useState(false);
  const [ProjectItems, setProjectItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/${API_VERSION}/project/`, {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProjectItems(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  function IndustClick(item) {
    setAllIndustries(item);
    setIndustriesOpen(!IndustriesisOpen);
  }
  const [AllCategories, setAllCategories] = useState("All Categories");
  const [AllCategoriesisOpen, setAllCategoriesOpen] = useState(false);
  function CategoryClick(item) {
    setAllCategories(item);
    setAllCategoriesOpen(!AllCategoriesisOpen);
  }

  const industriesMenustrAscending = [...industriesMenu].sort((a, b) =>
    a.label > b.label ? 1 : -1
  );
  return (
    <div className="ProfilePage">
      <Navbar />

      <div className="mainscr  ">
        <div className=" w-101 pt-175 max">
          <div className=" ">
            <div className="disc-head2 " id="cyan">
              <h1>Browse Projects</h1>
            </div>
            <div className="">
              <div className="bgf5 fl h342 jst-SB">
                <div className="w-80 fl-col fl-gap32">
                  <div className=" disc-fil2 firstline">
                    <div className="head-w">
                      <div
                        style={{ width: "320px" }}
                        className="filter2 prel"
                        id="filter3"
                        onClick={() => {
                          setAllCategoriesOpen(!AllCategoriesisOpen);
                          setIndustriesOpen(false);
                        }}
                      >
                        <p>{AllCategories}</p>
                        <div
                          style={{ width: "320px" }}
                          className="SelectMenu"
                          id={AllCategoriesisOpen ? "" : "DN"}
                          onClick={() => setAllCategoriesOpen(true)}
                        >
                          <ul>
                            <button
                              className="CatH4"
                              onClick={() => CategoryClick("Logo & identity")}
                            >
                              Logo & identity
                            </button>
                            {Logoidentity.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            ))}

                            <button
                              className="CatH4"
                              onClick={() =>
                                CategoryClick("Web - UI/UX design")
                              }
                            >
                              Web - UI/UX design
                            </button>
                            {Webdesign.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            ))}

                            {/* <h4 className='CatH4'>Clothing & Merchandise</h4> */}
                            <button
                              className="CatH4"
                              onClick={() =>
                                CategoryClick("Clothing & Merchandise")
                              }
                            >
                              Clothing & Merchandise
                            </button>
                            {ClothingMerchandise.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            ))}

                            <button
                              className="CatH4"
                              onClick={() =>
                                CategoryClick("Art & Illustration")
                              }
                            >
                              Art & Illustration
                            </button>
                            {ArtIllustration.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            ))}

                            <button
                              className="CatH4"
                              onClick={() =>
                                CategoryClick("Business & advertising")
                              }
                            >
                              Business & advertising
                            </button>
                            {Businessadvertising.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => CategoryClick(item.text)}
                              >
                                {item.text}
                              </button>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div
                        style={{ width: "320px" }}
                        className="filter2 prel"
                        id="filter3"
                        onClick={() => setIndustriesOpen(!IndustriesisOpen)}
                      >
                        <p>{AllIndustries}</p>
                        <div
                          style={{ width: "320px" }}
                          className="SelectMenu"
                          id={IndustriesisOpen ? "" : "DN"}
                        >
                          <ul>
                            {industriesMenustrAscending.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => IndustClick(item.label)}
                              >
                                {item.label}
                              </button>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fl  mb-30">
                    <div className="secline fl fl-gap99 head-w2 BC">
                      <div className="">
                        <p className="cont-p2">Contest level</p>
                        <div className="fl-col">
                          <div className="fl fl-gap10 ">
                            <input
                              type="radio"
                              id="remember"
                              name="accounttype"
                            />
                            <label htmlFor="remember">Entry</label>
                          </div>
                          <div className="fl fl-gap10">
                            <input
                              type="radio"
                              id="remember2"
                              name="accounttype"
                            />
                            <label htmlFor="remember2">Mid</label>
                          </div>
                          <div className="fl fl-gap10">
                            <input
                              type="radio"
                              id="remember3"
                              name="accounttype"
                            />
                            <label htmlFor="remember3">Advance</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <p className="cont-p ">Contest types</p>

                      <div className="cont-types fl jst-SB p22">
                        <div className="fl-col fl-gap99  jst">
                          <div className="fl fl-gap99 jst">
                            <input
                              type="checkbox"
                              id="Guaranteed"
                              name="accounttype"
                            />
                            <Image
                              src="dollar.svg"
                              width={30.85}
                              height={30.85}
                              alt=""
                            />
                          </div>

                          <label htmlFor="Guaranteed">Guaranteed</label>
                        </div>
                        <div className="fl-col fl-gap99 jst">
                          <div className="fl fl-gap99 jst">
                            <input
                              type="checkbox"
                              id="Urgent"
                              name="accounttype"
                            />
                            <Image
                              src="clock.svg"
                              width={26.31}
                              height={33}
                              alt=""
                            />
                          </div>

                          <label htmlFor="Urgent"> Urgent</label>
                        </div>
                        <div className="fl-col fl-gap99 jst">
                          <div className="fl fl-gap99 jst">
                            <input
                              type="checkbox"
                              id="NDA"
                              name="accounttype"
                            />
                            <Image
                              src="vector2.svg"
                              width={25}
                              height={30}
                              alt=""
                            />
                          </div>

                          <label htmlFor="NDA"> NDA</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="header-w30 fl-col fl-gap32 gap15 ali-cen mb-30">
                  <div className="BC-search">
                    <input />
                  </div>

                  <div className="w192">
                    <p className="PL-p">Price</p>
                    <div className="fl jst-SB prInp">
                      <div className="fl fl-gap98 ">
                        <input
                          type="text"
                          id="remember"
                          name="accounttype"
                          placeholder="Min"
                        />
                      </div>
                      <div className="fl fl-gap98">
                        <input
                          type="text"
                          id="remember2"
                          name="accounttype"
                          placeholder="Max"
                        />
                      </div>{" "}
                    </div>
                  </div>

                  <div className="BC-search">
                    <select>
                      <option>Newest first</option>
                      <option>oldest first</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" p-t20 ">
              <div>
                <div className="w-101">
                  {ProjectItems.map((item) => (
                    <div key={item.id} className="disc-card-Proj">
                      <Link
                        href={{
                          pathname: `/ProjectSubmitClient`,
                          query: { projectID: item.id },
                        }}
                      >
                        <Image src="ex5.svg" alt="" width={783} height={147} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
      <Footer />
    </div>
  );
};

export default BrowseProjects;
