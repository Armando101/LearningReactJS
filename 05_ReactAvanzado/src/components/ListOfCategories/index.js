import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
    // El array vacío como segundo parámetro significa que sólo se va a ejecutar al montar el componente
    // Este arreglo pude terner configuraciones de cuándo se tiene que ejecutar
  }, []);

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
