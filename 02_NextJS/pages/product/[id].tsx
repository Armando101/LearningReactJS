import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Navbar from '@components/Navbar/Navbar';

const ProductItem = () => {
  // const router = useRouter();
  const { query: { id } } = useRouter();
  const [productList, setProductList] = useState<TProduct>();

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
      .then(response => response.json())
      .then((data) => {
        setProductList(data);
      });
  });

  return (
    <div>
      <Navbar />
      Este es el producto: {productList?.name}
    </div>
  )
}

export default ProductItem
