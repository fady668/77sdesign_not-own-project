import React from "react";

const Notifications = () => {
  return (
    <div className="form-group-sett1 m-40 mb-172">
      <div>

      
      <p>Desktop and mobile<br/> Get browser notifications on your device, even when 77S design is closed.</p>
      <label className="switch">
          <input type="checkbox" />
          <span className="slider round">Enable browser notifications on your device new (project/contest - rate - feedback)</span>
        </label>
      </div>
      <div className="notification-type">
        <p>Email notifications</p>
        <ul>
            <li>
                <label className="switch">
                <input type="checkbox" />
                <span className="slider round">Comments and Rate</span>
                </label>
            </li>
            <li>
                <label className="switch ">
                <input type="checkbox" />
                <span className="slider round">Remind deadlines to complete projects</span>
                </label>
            </li>
            <li>
                <label className="switch ">
                <input type="checkbox" />
                <span className="slider round">Who is winner</span>
                </label>
            </li>

        </ul>
      </div>
      <div className="profile__submit-button">
        <button>Continue</button>
      </div>
    </div>
  );
};

export default Notifications;



//     