import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Search/>
      <Categories>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>
    </React.Fragment>
  )
}

export default App
