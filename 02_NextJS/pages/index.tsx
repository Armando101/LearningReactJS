import React from 'react'
import fetch from 'isomorphic-unfetch';

// Esto lo hacemos para renderizar lo que habia en window desde el servidor
export const getServerSideProps = async () => {
  // la función fetch debe de venir desde una libreria que nos ayude con la tarea
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();
  // Devuelve un objecto el cual luego se pasara como prop
  // en el componente

  return {
    props: {
      productList,
    },
  }
}

const Home = ({ productList }: { productList: TProduct[] }) => {


  return (
    <div>
      <h1>Home</h1>
      {productList.map(product => {
        return <div key={product.id}>{product.name}</div>
      })}
    </div>
  )
}

export default Home
