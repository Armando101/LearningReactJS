import React from 'react'
import { useRouter } from 'next/router';

const ProductItem = () => {
  // const router = useRouter();
  const {query: { id } } = useRouter();
  return (
    <div>
      Esta es la página de prueba del producto: { id }
    </div>
  )
}

export default ProductItem
