// import React from 'react';
// import { Link } from 'react-router-dom';
// import "./Navbar.scss";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className="container">
//                 <div className="logo">
//                     <Link to="/">
//                         <img src="/images/logo.png" alt="Flight Booking" />
//                     </Link>
//                 </div>
//                 <div className="auth">
//                     <Link to="/login" className="btn">Login</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import newRequest from '../../utils/newRequest.js';
import "./Navbar.scss";

const Navbar = () => {

    const navigate = useNavigate();
    // Check if user is logged in by retrieving data from local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const handleLogout = async () => {
        try {
          await newRequest.post("/auth/logout");
          localStorage.setItem("currentUser", null);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      };
    //   const handleMyBooking = async () => {
    //     try {
    //      const res = await newRequest.get("/booking");
    //      console.log(res);

    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Flight Booking" />
                    </Link>
                </div>
                <div className="auth">
                    {currentUser ? (<>
                        {/* <button className="btn" onClick={handleMyBooking}>My Booking</button> */}
                        <button className="btn" onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="btn">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
