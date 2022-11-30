import "./navbar.scss";
import { Search } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" alt="" 
            />
            <span>Hope Page</span>
            <span>Series</span>
            <span>Movies</span>
            <span> New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>KID</span>
            <Notifications className="icon" />
            <img 
              src="https://thecinemaholic.com/wp-content/uploads/2019/05/easy-review.jpg" 
              alt="" 
            
            />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Navbar