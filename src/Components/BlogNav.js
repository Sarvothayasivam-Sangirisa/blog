import React from "react";
import { Link } from "react-router-dom";
import Image5 from'./Image/logo.png';
function BlogNav() {
    return (
      
      <nav>
         <img src={Image5} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
         <span className="span">Blog platform</span>
        <ul>
        {/* <li><a href="#post1">JavaScript</a></li>
        <li><a href="#post2">Data Structure</a></li>
        <li><a href="#post3">Algorithm</a></li>
        <li><a href="#post4">Computer Network</a></li> */}


        <li><Link to="/post1">JavaScript</Link></li>
        <li><Link to="/post2">Data Structure</Link></li>
        <li><Link to="/post3">Algorithm</Link></li>
        <li><Link to="/post4">Computer Network</Link></li>
      </ul>
      <input type="text" placeholder="Search" className="nav-search" />
      </nav>
    );
  }
  
  export default BlogNav;