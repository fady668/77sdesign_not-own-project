import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Footer2 from "@/components/footer2";
import { BASE_URL, API_VERSION } from "@/config";


const BrowseContest = () => {
  const [isOpen, setOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedIndustry, setSelectedIndustry] = useState("Industries");
  const [isIndustryOpen, setIndustryOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${API_VERSION}/contest/`);
        setListItems(response.data.results);
      } catch (error) {
        console.error("Error fetching contests:", error);
      }
    };
  
    const fetchIndustries = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${API_VERSION}/core/industries/`);
        if (Array.isArray(response.data.results)) {
          setIndustries(response.data.results);
        } else {
          console.error("Industries data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };
  
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${API_VERSION}/core/categories/`);
        if (Array.isArray(response.data.results)) {
          setCategories(response.data.results);
        } else {
          console.error("Categories data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchContests();
    fetchIndustries();
    fetchCategories();
  }, []);

  const handleIndustryClick = (item) => {
    setSelectedIndustry(item);
    setIndustryOpen(!isIndustryOpen);
  };

  const handleCategoryClick = (item) => {
    setSelectedCategory(item);
    setCategoryOpen(!isCategoryOpen);
  };

  const sortedIndustries = [...industries].sort((a, b) =>
    a.label > b.label ? 1 : -1
  );

  return (
    <div className="ProfilePage">
      <Navbar />
      <div className="mainscr">
        <div className="w-101 pt-175 max">
          <div className="disc-head2" id="blue">
            <h1>Browse contests</h1>
          </div>
          <div className="bgf5 fl h342 jst-SB">
            <div className="w-80 fl-col fl-gap32">
              <div className="disc-fil2 firstline">
                <div className="head-w">
                  <div
                    style={{ width: "320px" }}
                    className="filter2 prel"
                    id="filter3"
                    onClick={() => {
                      setCategoryOpen(!isCategoryOpen);
                      setIndustryOpen(false);
                    }}
                  >
                    <p>{selectedCategory}</p>
                    <div
                      style={{ width: "320px" }}
                      className={`SelectMenu ${isCategoryOpen ? "" : "DN"}`}
                      onClick={() => setCategoryOpen(true)}
                    >
                      <ul>
                        {categories.map((category) => (
                          <CategoryButton
                            key={category.id}
                            category={category.name}
                            onClick={() => handleCategoryClick(category.name)}
                            subCategories={category.subCategories} // assuming categories have subCategories
                          />
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div
                    style={{ width: "320px" }}
                    className="filter2 prel"
                    id="filter3"
                    onClick={() => setIndustryOpen(!isIndustryOpen)}
                  >
                    <p>{selectedIndustry}</p>
                    <div
                      style={{ width: "320px" }}
                      className={`SelectMenu ${isIndustryOpen ? "" : "DN"}`}
                    >
                      <ul>
                        {sortedIndustries.map((industry) => (
                          <button key={industry.id} onClick={() => handleIndustryClick(industry.name)}>
                            {industry.name}
                          </button>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <ContestFilters />
{/*  ########visibility temp hidden ########## */}
              <div className="header-w30 fl-col fl-gap32 gap15 ali-cen mb-30" style={{   visibility: "hidden" }}
  >
                <SearchBar />
                <DaysLeftFilter />
                <PriceFilter />
              </div>
            </div>
          </div>

          <div className="fl jst-SB status">
            <ContestStatus />
            <SortOptions />
          </div>

          <div className="p-t20">
            <div className="w-101">
              {listItems.map((item) => (
                <div key={item.id} className="disc-card-Proj">
                  <Link href="#">
                    <h3> { item.name } </h3>
                    <p> { item.description } </p>
                    <div> <span> <h4> Reference:  </h4>  { item.reference } </span> </div>
                    <Image src={item.img} alt="" width={783} height={147} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
      <Footer />
    </div>
  );
};

const CategoryButton = ({ category, onClick, subCategories }) => (
  <>
    <button className="CatH4" onClick={onClick}>
      {category}
    </button>
    {subCategories && subCategories.map((item) => (
      <button key={item.id} onClick={() => onClick(item.name)}>
        {item.name}
      </button>
    ))}
  </>
);

const ContestFilters = () => (
  <div className="fl mb-30">
    <div className="secline fl fl-gap99 head-w2 BC">
      <div>
        <p className="cont-p2">Contest level</p>
        <div className="fl-col">
          <ContestLevelOption id="silver" label="Silver" />
          <ContestLevelOption id="gold" label="Gold" />
          <ContestLevelOption id="platinum" label="Platinum" />
        </div>
      </div>
    </div>
    <div>
      <p className="cont-p">Contest types</p>
      <ContestTypes />
    </div>
  </div>
);

const ContestLevelOption = ({ id, label }) => (
  <div className="fl fl-gap10">
    <input type="radio" id={id} name="accounttype" />
    <label htmlFor={id}>{label}</label>
  </div>
);

const ContestTypes = () => (
  <div className="cont-types fl jst-SB p22">
    <ContestTypeOption id="blind" label="Blind" iconSrc="blind.svg" />
    <ContestTypeOption id="guaranteed" label="Guaranteed" iconSrc="dollar.svg" />
    <ContestTypeOption id="urgent" label="Urgent" iconSrc="clock.svg" />
    <ContestTypeOption id="nda" label="NDA" iconSrc="vector2.svg" />
  </div>
);

const ContestTypeOption = ({ id, label, iconSrc }) => (
  <div className="fl-col fl-gap99 jst">
    <div className="fl fl-gap99 jst">
      <input type="checkbox" id={id} name="accounttype" />
      <Image src={iconSrc} width={28} height={22} alt={label} />
    </div>
    <label htmlFor={id}>{label}</label>
  </div>
);

const SearchBar = () => (
  <div className="BC-search">
    <input placeholder="Search..." />
  </div>
);

const DaysLeftFilter = () => (
  <div className="dayscont">
    <div className="fl-col gap15">
      <span>Days left</span>
      <div className="bc-header-rigth">
        <button>&#60; 1</button>
        <button>1-2</button>
        <button>2-3</button>
        <button>3+</button>
      </div>
    </div>
  </div>
);

const PriceFilter = () => (
  <div className="w192">
    <p className="PL-p">Price</p>
    <div className="fl jst-SB prInp">
      <div className="fl fl-gap98">
        <input type="text" placeholder="Min" />
      </div>
      <div className="fl fl-gap98">
        <input type="text" placeholder="Max" />
      </div>
    </div>
  </div>
);

const ContestStatus = () => (
  <div className="fl-col">
    <div className="BC-Option">
      <label htmlFor="open">Open</label>
      <input type="radio" id="open" name="status" />
    </div>
    <div className="BC-Option">
      <label htmlFor="completed">Completed</label>
      <input type="radio" id="completed" name="status" />
    </div>
  </div>
);

const SortOptions = () => (
  <div className="BC-Sort">
    <label htmlFor="sort">Sort by:</label>
    <select id="sort">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="highestPrize">Highest Prize</option>
      <option value="mostEntries">Most Entries</option>
    </select>
  </div>
);

export default BrowseContest;
