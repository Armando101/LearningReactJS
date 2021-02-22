import React from 'react';
import { ListOfCategories } from '@components/ListOfCategories';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards';

export default function Home({ id: detailId }) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={detailId} />
    </>
  );
}
