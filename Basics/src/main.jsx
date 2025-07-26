import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './NavBar.jsx';
import Footer from './Foot.jsx';
import { Header, Content } from './App.jsx';
import { Main, Card } from './MainContent.jsx';
import Count from './Counter.jsx';
import Moview from './Moview.jsx';
import { Con, Con1 } from './MultiCounter';

const Home = () => (
  <>
    <Header />
    <Content name="Deepan" />
    <Main />
    <div className="d-flex">
      <Card />
      <Card />
      <Card />
    </div>
    <Count />
    <div className="d-flex gap-4">
      <Moview
        title="Amazing SpiderMan-1"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
        image="https://wallpapers.com/images/hd/spiderman-technique-ecp43rcqayizcyuf.jpg"
        link="#"
        rating="5 Imdb"
      />
      <Moview
        title="Avengers"
        description="Earth's mightiest heroes assemble!"
        image="https://wallpaperaccess.com/full/96632.jpg"
        link="/avengers"
        rating="7.9 Imdb"
      />
      <Moview
        title="Dr.Strange"
        description="A thief who steals corporate secrets through dream-sharing technology."
        image="https://e1.pxfuel.com/desktop-wallpaper/327/40/desktop-wallpaper-doctor-strange-by-marvel-doctor-strange-phone.jpg"
        link="/inception"
        rating="8.8 Imdb"
      />
      <Moview
        title="Thor"
        description="A thief who steals corporate secrets through dream-sharing technology."
        image="https://wallpapercave.com/wp/wp5049551.jpg"
        link="/inception"
        rating="8.8 Imdb"
      />
      <Moview
        title="Deadpool"
        description="A thief who steals corporate secrets through dream-sharing technology."
        image="https://wallpapercave.com/wp/wp5445873.jpg"
        link="/inception"
        rating="8.8 Imdb"
      />
    </div>
    <Con1 />
    <div className="d-flex mt-5 gap-2">
      <Con Co="1" />
      <Con Co="2" />
      <Con Co="3" />
    </div>
    <div
      className=""
      style={{
        marginTop: 100,
        backgroundColor: ' rgba(49, 38, 38, 1)',
        width: '100%',
        padding: '20px',
      }}
    >
      <Footer />
    </div>
  </>
);

const MultiCounterApp = () => <Con1 />;

const MoviewList = () => (
  <div className="d-flex gap-4">
    <Moview
      title="Amazing SpiderMan-1"
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit..."
      image="https://wallpapers.com/images/hd/spiderman-technique-ecp43rcqayizcyuf.jpg"
      link="#"
      rating="5 Imdb"
    />
    <Moview
      title="Avengers"
      description="Earth's mightiest heroes assemble!"
      image="https://wallpaperaccess.com/full/96632.jpg"
      link="/avengers"
      rating="7.9 Imdb"
    />
    <Moview
      title="Dr.Strange"
      description="A thief who steals corporate secrets through dream-sharing technology."
      image="https://e1.pxfuel.com/desktop-wallpaper/327/40/desktop-wallpaper-doctor-strange-by-marvel-doctor-strange-phone.jpg"
      link="/inception"
      rating="8.8 Imdb"
    />
    <Moview
      title="Thor"
      description="A thief who steals corporate secrets through dream-sharing technology."
      image="https://wallpapercave.com/wp/wp5049551.jpg"
      link="/inception"
      rating="8.8 Imdb"
    />
    <Moview
      title="Deadpool"
      description="A thief who steals corporate secrets through dream-sharing technology."
      image="https://wallpapercave.com/wp/wp5445873.jpg"
      link="/inception"
      rating="8.8 Imdb"
    />
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multicounter" element={<MultiCounterApp />} />
        <Route path="/moviewlist" element={<MoviewList />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
