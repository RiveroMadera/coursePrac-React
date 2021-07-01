/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
        <Search isHome />
          {myList.length > 0 && (
            <Categories title='mi Lista'>
              <Carousel>
                {myList.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                ))}
              </Carousel>
            </Categories>
          )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

// eslint-disable-next-line arrow-parens
const mapsStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapsStateToProps, null)(Home);
