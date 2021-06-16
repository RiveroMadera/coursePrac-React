/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, steVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      // eslint-disable-next-line arrow-parens
      .then(response => response.json())
      // eslint-disable-next-line arrow-parens
      .then(data => steVideos(data));
  }, []);

  /*
  Async/Await

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("http://localhost:3000/initialState");
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
  */

  return (
    <div className='App'>
      <Header />
      <Search />
      { videos.mylist.length > 0 &&
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories> }

      <Categories title='Tendencias'>
        <Carousel>
          {videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          ,
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
