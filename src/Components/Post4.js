import React from 'react';
import Image4 from './Image/ComputerNetwork.jpeg';

function Post4() {
  return (
    <div id="post4">
       <div className="card" style={{ width: '600px' }}>
      <img src={Image4} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">Computer Network</h5>
    <p className="card-text">This is the content of Post 4.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>
      {/* <h2>Computer Network</h2>
      <p>This is the content of Post 4.</p>
      <button>Read more</button> */}
    </div>
  );
}

export default Post4;
