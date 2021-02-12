import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <React.Fragment>
      <Header/>
      <Search/>

      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>
      
      <Categories title="tendencias">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>

      <Categories title="Originales">
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </Categories>
      
      <Footer/>
    </React.Fragment>
  )
}

export default App
