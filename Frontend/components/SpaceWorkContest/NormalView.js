import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

const NormalView = ({ cardData, projectID }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setData(cardData.cardDataProject);
      console.log(projectID);
    };
    fetchData();
  });

  const handleItemClick = (itemId) => {
    setSelectedCard((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        // If item is already selected, remove it from selected items
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        // If item is not selected, add it to selected items
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  ////////////////////////////////

  const [SelectedCard, setSelectedCard] = useState([]);

  return (
    <div>
      <div className="disc-card-cont2 jst-SB ">
        {currentData.map((item) => (
          <div key={item.id} className="disc-card2 " id="h-220">
            <span className="card-text">#1 by osama</span>
            <Link
              href={{ pathname: `/commentdesign2`, query: { id: projectID } }}
              style={{ marginBottom: "12px" }}
            >
              <Image
                src={item.img}
                id="ds-img3"
                alt=""
                width={400}
                height={400}
              />
            </Link>
            <div className="fl ali-cen jst-SB">
              <Rating fillColor="#00C8C8" size={30} />
              <button className="clearbtn">
                <Image src="trash.svg" id="" alt="" width={19} height={22} />
              </button>
            </div>
            <div
              onClick={() => {
                handleItemClick(item.id);
              }}
              className="SelectedDesign"
              style={{ cursor: "pointer" }}
            >
              <Image
                src={
                  SelectedCard.includes(item.id)
                    ? "GreenSelect.svg"
                    : "GreySelect.svg"
                }
                alt=""
                width={26}
                height={26}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagenumb">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={toString(index) + toString(totalPages) + "DETAILS"}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default NormalView;
