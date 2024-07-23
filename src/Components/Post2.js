import React from 'react';
import Image1 from './Image/Data Structures.png';

function Post2() {
  return (
    <div id="post2">
      <div className="card" style={{ width: '600px' }}>
      <img src={Image1} className="card-img-top"  />
  <div className="card-body">
    <h5 className="card-title">Data Structure</h5>
    <p className="card-text">The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.</p>
    <a href="#" className="btn btn-primary">Read more</a>
  </div>
</div>
       {/* <h2>Data Structure</h2>
                <p>The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.</p>
                <button>Read more</button> */}
    </div>
  );
}

export default Post2;


