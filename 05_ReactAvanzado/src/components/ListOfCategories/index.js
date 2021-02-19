import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
    // El array vacío como segundo parámetro significa que sólo se va a ejecutar al montar el componente
    // Este arreglo pude terner configuraciones de cuándo se tiene que ejecutar
  }, []);

  useEffect(() => {
    const onScroll = (_) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onscroll);
    // Indicamos que cada que cambie showFixed se va a ejecutar el evento
  }, [showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map((category) => {
        return (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
