import React from 'react';
import Image from './Image/JavaScrip.png';

function Post1() {
  return (
    <div id="post1">

<div className="card" style={{ width: '600px' }}>
      <img src={Image} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">JAVASCRIPT</h5>
    <p className="card-text">JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>
      {/* <h2>JAVASCRIPT</h2>
                <p>JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known as scripting language for web pages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments.</p> */}
                {/* <button>Read more</button> */}
    </div>
  );
}

export default Post1;
