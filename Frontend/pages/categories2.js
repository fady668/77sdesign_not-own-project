import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer2 from "@/components/footer2";
import { BASE_URL, API_VERSION } from "@/config";
import {
  LogoidentityCat,
  WebdesignCat,
  ClothingMerchandiseCat,
  ArtIllustrationCat,
  BusinessadvertisingCat,
  Others,
} from "../components/consts";
import CatmenuSelector from "@/components/CatmenuSelector";
import { useRouter } from "next/router";

const Categories2 = () => {
  const [chatboxOpen, SetchatboxOpen] = useState(false);
  const [isLogo, setIsLogo] = useState(false);

  const [selectedCat, setSelectedCat] = useState("Logo design");

  const router = useRouter();
  const VSelectedCat = router.query;
  const [CatData, setCatData] = useState(LogoidentityCat);
  useEffect(() => {
    console.log(VSelectedCat);
    console.log(LogoidentityCat);
    console.log(CatData);
    switch (VSelectedCat.cat) {
      case "LogoidentityCat":
        setCatData(LogoidentityCat);
        break;
      case "WebdesignCat":
        setCatData(WebdesignCat);
        break;
      case "ClothingMerchandiseCat":
        setCatData(ClothingMerchandiseCat);
        break;
      case "ArtIllustrationCat":
        setCatData(ArtIllustrationCat);
        break;
      case "BusinessadvertisingCat":
        setCatData(BusinessadvertisingCat);
        break;
      case "Others":
        setCatData(Others);
        break;
      default:
        setCatData(LogoidentityCat);
    }
  }, []);

  return (
    <div>
      <div className="home_section  " style={{ height: "480px" }}>
        <Navbar />
        <div className=" max">
          <div className="pb-64 mt-140  ">
            <div>
              <div className="mb-20">
                <h1 className="DiffTitle-" id="title">
                  All Categories
                </h1>
              </div>
              <div className="fl jst-SB" style={{ marginTop: "12px" }}>
                <Image
                  src={
                    CatData === LogoidentityCat
                      ? "catlogo1.svg"
                      : "catlogo1Grey.svg"
                  }
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(LogoidentityCat);
                  }}
                  className="catImageHeader"
                />
                <Image
                  src={
                    CatData === BusinessadvertisingCat
                      ? "catlogo2.svg"
                      : "catlogo2Grey.svg"
                  }
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(BusinessadvertisingCat);
                  }}
                  className="catImageHeader"
                />
                <Image
                  src={
                    CatData === ArtIllustrationCat
                      ? "catlogo5.svg"
                      : "catlogo5Grey.svg"
                  }
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(ArtIllustrationCat);
                  }}
                  className="catImageHeader"
                />
                <Image
                  src={
                    CatData === WebdesignCat
                      ? "catlogo3.svg"
                      : "catlogo3Grey.svg"
                  }
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(WebdesignCat);
                  }}
                  className="catImageHeader"
                />
                <Image
                  src={
                    CatData === ClothingMerchandiseCat
                      ? "catlogo4.svg"
                      : "catlogo4Grey.svg"
                  }
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(ClothingMerchandiseCat);
                  }}
                  className="catImageHeader"
                />
                <Image
                  src={CatData === Others ? "catlogo6.svg" : "catlogo6.svg"}
                  alt=""
                  width={137.03}
                  height={137.03}
                  onClick={() => {
                    setCatData(Others);
                  }}
                  className="catImageHeader"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max ">
        <div
          className="fl  mt-60 jst-SB mb-250"
          //   487px
          style={{ height: "fit-content" }}
        >
          <div class="dropdown-content10">
            <ul>
              {CatData === Others ? (
                <li className="cat-menu-links">
                  <button
                    className="contact"
                    onClick={() => {
                      if (CatData === LogoidentityCat) {
                        setIsLogo(true);
                      } else {
                        setIsLogo(false);
                      }
                      setSelectedCat("Contact us");
                    }}
                  >
                    <Image
                      src="ContactUs.svg"
                      alt=""
                      width={58.03}
                      height={45.59}
                    />{" "}
                    Contact us
                  </button>
                </li>
              ) : (
                CatData.data.map((item) => (
                  <li key={item.id} className="cat-menu-links">
                    <button
                      onClick={() => {
                        if (CatData === LogoidentityCat) {
                          setIsLogo(true);
                        } else {
                          setIsLogo(false);
                        }
                        setSelectedCat(item.text);
                      }}
                    >
                      {item.text}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
          <Image
            src={CatData.image}
            alt=""
            width={525.53}
            height={487.65}
            id={CatData === Others ? "DN" : ""}
          />
        </div>
        <div style={{ maxWidth: "768px" }}>
          <div className="fl ali-cen jst-SB catcontentend">
            <h2>{selectedCat}</h2>
            <Link href="pricing">Pricing</Link>
          </div>
          <p className="categText">
            Start and see your project transform into reality in ways that
            exceed your imagination, With multiple designs created just for you
          </p>
          <div className="guarantee fl-col fl-gap20">
            <p>
              Dozens of unique, editable designs in digital, print, and web file
              formats
            </p>
            <p>Customer support to assist you throughout the process</p>
            <p>Full-copyright ownership of designs and ready-to-use files</p>
            <p>
              All designers have undergone screening and review processes for
              top-quality work
            </p>
            <p>Money-back guarantee*</p>
          </div>
        </div>
      </div>
      <div className="cat2-btns max">
        <Link href={isLogo ? "Logobreif" : "Contestbreif"}>Start contest</Link>
        <Link href={isLogo ? "Logobreif" : "1to1breif"} id="cyan">
          Hiring (1 to1)
        </Link>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};
export default Categories2;
