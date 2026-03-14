import React from 'react'
import Navbar from './components/navbar'
import Main from './components/main'
import Main2 from "./components/main2";
import Mahsulotlar from "./components/mahsulotlar";
import Video from "./components/video";
import Aloqa from './components/contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Main2 />
      <Mahsulotlar />
      <Video />
      <Aloqa />
    </div>
  );
}

export default App
