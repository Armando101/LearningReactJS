import React from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';
import { categories } from '@api/db.json';

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );
};
