import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';
const API = 'http://localhost:3000/initalState';

const App = () => {
  const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log('videos', videos);

  return (
    <React.Fragment>
      <Header/>
      <Search/>
      {videos.mylist.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem/>
          </Carousel>
        </Categories>
      }
      
      <Categories title="tendencias">
        <Carousel>
          {videos.trends.map(item => {
            return <CarouselItem key={item.id} {...item}/>
          })}
        </Carousel>
      </Categories> 

      <Categories title="Originales">
        <Carousel>
          <CarouselItem/>
        </Carousel>
      </Categories>
      
      <Footer/>
    </React.Fragment>
  )
}

export default App
