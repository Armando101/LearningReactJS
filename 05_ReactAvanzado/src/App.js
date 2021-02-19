import React from 'react';
import { ListOfCategories } from '@components/ListOfCategories';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards';
import { Logo } from '@components/Logo';
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery';
import { GlobalStyles } from '@styles/GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={detailId} />
        </>
      )}
    </div>
  );
};
