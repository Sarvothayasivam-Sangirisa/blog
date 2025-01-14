import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"; 
import BlogNav from './Components/BlogNav';
import Posts from './Components/Posts';
import Post1 from './Components/Post1';
import Post2 from './Components/Post2';
import Post3 from './Components/Post3';
import Post4 from './Components/Post4';
import Image from './Components/Image/JavaScrip.png';
import Image2 from'./Components/Image/Data Structures.png';
import Image3 from'./Components/Image/ComputerNetwork.jpeg';
import Image4 from './Components/Image/algorithm.png';
import '/home/sangirisha/Documents/blog/src/App.css';
function App() {
  return (
    <>

<Router>
      <BlogNav />
      <Routes> 
        <Route path="/posts" element={<Posts />} /> 
        <Route path="/post1" element={<Post1 />} /> 
        <Route path="/post2" element={<Post2 />} />
        <Route path="/post3" element={<Post3 />} /> 
        <Route path="/post4" element={<Post4 />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
