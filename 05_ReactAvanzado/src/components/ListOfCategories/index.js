import React from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = () => {
  return (
    <List>
      {[0, 1, 2, 3, 4, 5].map((category) => {
        return (
          <Item key={category}>
            <Category />
          </Item>
        );
      })}
    </List>
  );
};
