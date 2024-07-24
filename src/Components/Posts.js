import React from 'react';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';
import Post1 from './Post1';


function Posts() {
  return (
    <div>
      {/* <div className="box">
      <div className="box1"><a href="#post1">JAVASCRIPT </a></div>
      <div className="box1"> <a href="#post3">Algorithm</a></div>
      <div className="box1"><a href="#post4">ComputerNetwork</a></div>
      <div className="box1"><a href="#post2">Data Structure</a></div>
    </div> */}
      <Post1/>
      <Post2/>
      <Post3/>
      <Post4/>
    
    </div>
  );
}

export default Posts;
