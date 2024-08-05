import React, { useEffect, useState } from 'react';
import Card from "@/components/profcard"
import moment from 'moment';

const cardsData = [
    {
    id: 1,
    title: "Card 1",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 2,
    title: "Card 2",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 3,
    title: "Card 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 4,
    title: "Card 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 5,
    title: "Card 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 6,
    title: "Card 6",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    },
    {
    id: 7,
    title: "Card 7",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://via.placeholder.com/200x150",
    }
    ]

const Portfolio = ({userProfile}) => {

const [cards, setCards] = useState(cardsData);
const [currentDate, setCurrentDate] = useState('');
useEffect(() => {

  const interval = setInterval(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
    hours + ':' + min + ':' + sec
    );
  }, 1000);

},[] );
var options = {year: 'numeric', month: 'long', day: 'numeric' };

  return ( <div className='  fl jst-SB'>


  <div className="left-column">

    <div className='bg-1000 '>

    
    <div className="tab-content">
        {/* <p>{userProfile?"member since: "+new Date(userProfile.user.date_joined):""}</p> */}
        {/* <p>Member since: March 14, 2021</p> */}
        <p>{userProfile?"Member since: "+new Date(userProfile.user.date_joined).toLocaleDateString("en-US", options):""}</p>

      <div className="stat-box stat-boxpad">
        <div className="stat-num">0</div>
        <div className="stat-text">Contests Won</div>
      </div>
      <div className="stat-box">
        <div className="stat-num">0</div>
        <div className="stat-text">1 to 1 Projects</div>
      </div>
      <div className="stat-box">
        <div className="stat-num">0</div>
        <div className="stat-text">client/s repeated</div>
      </div>
      <div className="stat-box2">
        <div className="stat-text2">Languages</div>
        <div className="stat-text">{userProfile?userProfile.languages:''}</div>
      </div>
      <div className="stat-box3">
        <div className="stat-text3">Local Time: {currentDate}</div>
      </div>
    </div>
    </div>
  </div>
  <div className="right-column">
  <div className="tab-buttons">
  <button className="edit-button nav-btn ">Edit</button>
   
    </div>
    <div className="text-area-cont">
    <textarea className="text-area" value={userProfile?userProfile.bio:''} style={{padding:"10px"}}/>
    </div>
    <div className="tab-buttons">
    <select>
      <option>All Categories</option>
    </select>
    </div>
    <div className="card-container">
  {cards.map((card, index) => (
    <Card key={index} card={card} />
  ))}
</div>
  </div>
  </div>)
}
export default Portfolio;

