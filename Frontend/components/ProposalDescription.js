import React, { useState } from "react";
import Image from "next/image";

const ProposalDescription = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  const [count, setCount] = useState(1);
  const handleCreateClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const generateMilestoneItems = () => {
    const milestoneItems = [];
    for (let i = 0; i < count; i++) {
      milestoneItems.push(
        <div key={i} className="fl-col fl-gap32  ">
          <div className="fl jst-SB">
            <div className="milestone1">
              <input type="text" placeholder="Item description:" />
            </div>
            <div className="inpPrice">
              <input type="text" placeholder="$00" />
              <select>
                <option>Egp</option>
                <option>$</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
    return milestoneItems;
  };

  return (
    <div className="ProfilePage">
      <div className=" w-101 pv-55">
        <div className="disc-head2">
          <h1 id="cnn4">Proposal amount must be between $ 00 to $ 0000</h1>
        </div>

        <div className=" p-t20 " style={{ paddingTop: "70px" }}>
          <div>
            <div className="w-101 fl jst-SB">
              <div className="projchat1 fl-col jst-SA">
                <div>
                  <p>Client</p>
                  <div className="fl jsta fl-gap2">
                    <Image src="circle.svg" alt="" width={46} height={46} />{" "}
                    <span>Name</span>
                  </div>
                </div>
                <div>
                  <p>Designer</p>
                  <div className="fl jsta fl-gap2">
                    <Image src="circle2.svg" alt="" width={46} height={46} />{" "}
                    <span>Designer Name</span>
                  </div>
                </div>
              </div>

              <div className="projchat2 fl-col fl-gap10 jst-SB ">
                {/* <button className='propDetailBtn'></button> */}
                <button className="propDetailBtn">
                  <span>Message</span> Proposal details & description
                </button>
                <div className="fl-col fl-gap10 chtbx pd40">
                  <div>
                    <p>Hello, </p>
                    <p>I would like to work together for this brief</p>
                  </div>
                  <div>
                    <p>type of design you need</p>
                    <p>————</p>
                  </div>
                  <div>
                    <p>Describe your project</p>
                    <p>————</p>
                  </div>
                  <div>
                    <p>Design will be used</p>
                    <p>————</p>
                  </div>
                </div>

                <div className="fl jstfe chtbxbtn ">
                  <input />
                  <button>
                    <Image src="attach.svg" alt="" width={24} height={27} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="milestone" style={{ marginTop: "72px" }}>
                <div className="">
                  <div className="fl gap5 proposalprice2">
                    <input
                      type="radio"
                      onChange={() => setSelectedOption(true)}
                    />
                    <label>Millestone:</label>
                  </div>
                  <div
                    className="fl-col fl-gap32"
                    id={selectedOption ? "" : "DN"}
                  >
                    {generateMilestoneItems()}

                    <div className="fl-col fl-gap32  ">
                      <div className="fl jst-SB">
                        <button
                          className="addNewMileston"
                          onClick={() => handleCreateClick()}
                        >
                          + add new item
                        </button>
                        <div className="inpPrice total">
                          <input type="text" placeholder="$00" />
                          <select>
                            <option>Egp</option>
                            <option>$</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fl jstfe pgbtn">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDescription;
