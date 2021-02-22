import React from 'react';
import { ListOfCategories } from '@components/ListOfCategories';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards';

export default function Home({ id }) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
}
