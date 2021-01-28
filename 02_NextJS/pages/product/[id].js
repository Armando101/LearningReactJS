import React from 'react'
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar';

const ProductItem = () => {
  // const router = useRouter();
  const {query: { id } } = useRouter();
  return (
    <div>
       <Navbar/>
      Esta es la página de prueba del producto: { id }
    </div>
  )
}

export default ProductItem
