import React, { useState } from "react";
import Contests from "@/components/my_work/contests-mywork";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/my_work/projects-mywork";
import Designer from "@/components/my_work/designer-mywork";
import Ndas from "@/components/my_work/ndas-mywork";
const Mywork = () => {
  const [activeComponent, setActiveComponent] = useState("contests");

  return (
    <div className="settings-container  ">
      <div className="home_section mainscr ">
        <Navbar />

        <div className="max mt-133">
          <div className="my-workkk  mb-46">
            <h1 id="title">My Work</h1>
          </div>
          <div className="settings-nav " id="work-nav">
            <button
              className={` ${
                activeComponent === "contests" ? "active nav-btn" : "nav-btn"
              }`}
              onClick={() => setActiveComponent("contests")}
            >
              Contests
            </button>

            <button
              className={`nav-btn ${
                activeComponent === "Project" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("Project")}
            >
              Project
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "Designer" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("Designer")}
            >
              Designer
            </button>
            <button
              className={`nav-btn ${
                activeComponent === "NDAs" ? "active" : ""
              }`}
              onClick={() => setActiveComponent("NDAs")}
            >
              NDAs
            </button>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="mywork-conten max">
          {activeComponent === "contests" && <Contests />}
          {activeComponent === "Project" && <Projects />}
          {activeComponent === "Designer" && <Designer />}
          {activeComponent === "NDAs" && <Ndas />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mywork;
