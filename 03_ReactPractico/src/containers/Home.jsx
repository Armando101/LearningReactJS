import React from 'react';
import { connect } from "react-redux";
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals}) => {
  return (
    <>
      <Search/>
      {myList.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {myList.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories>
      }
      
      {trends.length > 0 &&
        <Categories title="Tendencias">
          <Carousel>
            {trends.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories> 
      }
      
      {originals.length > 0 &&
        <Categories title="Originales">
          <Carousel>
            {originals.map(item => {
              return <CarouselItem key={item.id} {...item}/>
            })}
          </Carousel>
        </Categories>
      }
    </>
  )
}

// Traemos los datos que necesitamos del estado
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

// Indicamos que el componente Home va a recibir como promiedades lo que me retorna mapSatateToProps
// En este caso las acciones van a ser null
// La función connecto nos permite conectar el componente con el state
// Para conectar un componente a Redux vamos a necesitar importar connect de react-redux
// connect va a aceptar dos parámetros:
// mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
// mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.

// export default connect(props, actions)(Home);
export default connect(mapStateToProps, null)(Home);