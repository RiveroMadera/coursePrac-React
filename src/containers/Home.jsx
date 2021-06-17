/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../Hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

const Home = () => {
  const initialState = useInitialState(API);
  return videos.length === 0 ? <h1>Loading....</h1> : (
    <>
      <Search />
      {initialState.mylist.length > 0 &&
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Categories title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories> }

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          ,
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
          ,
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
