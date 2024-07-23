import React from 'react';



const Posts = () => {
  // Example points with coordinates
  const points = [
    { top: '10%', left: '10%' },
    { top: '30%', left: '50%' },
    { top: '70%', left: '20%' },
    { top: '50%', left: '80%' }
  ];

  return (
    <div className="points-box">
      {points.map((point, index) => (
        <div
          key={index}
          className="point"
          style={{ top: point.top, left: point.left }}
        ></div>
      ))}
    </div>
  );
};

export default Posts;
