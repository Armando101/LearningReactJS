import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
const Home = () => {

  const initialState = useInitialState(API);

  return (
    <React.Fragment>
      <Header/>
      <Search/>
      {initialState.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {initialState.mylist.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories>
      }
      
      {initialState.trends.length > 0 &&
        <Categories title="Tendencias">
          <Carousel>
            {initialState.trends.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories> 
      }
      
      {initialState.originals.length > 0 &&
        <Categories title="Originales">
          <Carousel>
            {initialState.originals.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories>
      }

      <Footer/>
    </React.Fragment>
  )
}

export default Home;
