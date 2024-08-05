import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

const DetailedView = ({ cardData }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchData = async () => {
      setData(cardData.cardDataProject);
    };
    fetchData();
  });

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      let hours = new Date().getHours(); //Current Hours
      let min = new Date().getMinutes(); //Current Minutes
      let sec = new Date().getSeconds(); //Current Seconds
      setCurrentDate(hours + ":" + min + ":" + sec);
    }, 1000);
  }, []);
  return (
    <div>
      <div className="disc-card-cont2 fl-gap25">
        <div className="fl-col PMC jst-SB">
          <div className="w-101 cardControl">
            <button>
              <Image alt="" src="Eliminate.svg" width={32} height={32} />
            </button>
            <button>
              <Image alt="" src="ChatBtn.svg" width={38.4} height={32} />
            </button>
          </div>

          <Image src="greycircle.svg" width={122} height={122} alt="" />
          <p>Designer name</p>
          <span>Local Time: {currentDate}</span>
          <div className="fl ali-cen gap3">
            <input type="checkbox" style={{ width: "24px", height: "24px" }} />
            <label>Select for final round</label>
          </div>
        </div>
        <div className="fl fl-gap47" style={{ width: "812px", gap: "17px" }}>
          {currentData.map((item) => (
            <div
              key={item.id}
              className="disc-card2 "
              id="h-220"
              style={{ width: "100%" }}
            >
              <span className="card-text">#1 by osama</span>
              {/* <Link href={{ pathname: `/commentdesign2`, query: { id: projectID } }}> */}

              <Image
                src={item.img}
                id="ds-img"
                alt=""
                width={400}
                height={400}
              />

              {/* </Link> */}
              <div className="fl ali-cen jst-SB">
                <Rating fillColor="#00C8C8" size={30} />
                <button className="clearbtn">
                  <Image src="trash.svg" id="" alt="" width={19} height={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="pagenumb">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div> */}
    </div>
  );
};
export default DetailedView;
