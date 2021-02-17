import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { GlobalStyles } from './GlobalStyles';

export const App = () => (
  <div>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);
