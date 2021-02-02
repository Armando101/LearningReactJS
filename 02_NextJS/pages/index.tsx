import React from 'react'
import fetch from 'isomorphic-unfetch';

export const getStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

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
