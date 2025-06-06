import React, { useState } from 'react'
import Header from './components/header'
import Profile from './components/profile'
import Cards from './components/cards'
import Footer from './components/footer'
import './App.css'

function App() {
  const [Images_data, setImages_data] = useState([
    {
      src: "/images/pexels-kassandre-pedro-8639743 1.png",
      title: "Val Thorens",
    },
    {
      src: "/images/pexels-kassandre-pedro-8639743 1-1.png",
      title: "Restaurant terrace",
    },
    {
      src: "/images/pexels-kassandre-pedro-8639743 1-2.png",
      title: "An outdoor cafee",
    },
    {
      src: "/images/pexels-kassandre-pedro-8639743 1-3.png",
      title: "A very long bridge, over the forest...",
    },
    {
      src: "/images/pexels-kassandre-pedro-8639743 1-4.png",
      title: "Tunnel with morning light",
    },
    {
      src: "/images/pexels-kassandre-pedro-8639743 1-5.png",
      title: "Mountain house",
    },
  ]);

   const handleAddNewPost = (newPost) => {
    setImages_data([...Images_data, newPost]);
  };



  return (
    <>
      <Header />
      <Profile onNewPost={handleAddNewPost} />
      <Cards Images_data={Images_data} />
      <Footer />
    </>
  )
}

export default App
