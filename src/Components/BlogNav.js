import React from "react";
import Image5 from'./Image/logo.png';
function BlogNav() {
    return (
      <nav>
         <img src={Image5} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <ul>
        <li><a href="#post1">JavaScript</a></li>
        <li><a href="#post2">Data Structure</a></li>
        <li><a href="#post3">Algorithm</a></li>
        <li><a href="#post4">Computer Network</a></li>
      </ul>
      <input type="text" placeholder="Search" className="nav-search" />
      </nav>
    );
  }
  
  export default BlogNav;