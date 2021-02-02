import React from 'react'
import Navbar from '@components/Navbar/Navbar';
import { GetStaticProps } from "next";
import fetch from 'isomorphic-unfetch';

// Con esta función obtenemos los id's necesarios
export const getStaticPaths = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: productList }: TAPIAvoResponse = await response.json();

  const paths = productList.map(({ id }) => ({
    params: { id }
  }));

  // fallback false, cualquier página que no se especifque dentro de los paths va a dar un 404
  return { paths, fallback: false };
}

// Obtenemos los archivos estáticos dados los id's
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`);
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <div>
      <Navbar />
      Este es el producto: {product?.name}
    </div>
  )
}

export default ProductItem
