import React from 'react';
import Link from 'next/link';

const Membership = () => {
  return (
    <div className="form-group-sett m-40 mb-172">
        <div className="form-group">
        <p>It gives you the ability to switch from a client to a designer and vice versa with the same account after submitted <Link className='uniqlink' href="#">your experience</Link></p>
        </div>
        <div className="form-group">
      <p>It gives you an annual retainer feature that gives you all contest features for free for any number of contests during the subscription period </p>    
      </div>
      <div className="form-group">
            <p>($300 RETAINER FOR 1 YEAR).</p>
        </div>
        
        
        <div className="profile__submit-button2">
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Membership;



