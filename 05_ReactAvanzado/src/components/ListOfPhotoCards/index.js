import React from 'react';

import { PhotoCard } from '../PhotoCard';
import { useGetPhotos } from '@hooks/useGetPhotos';

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  );
};
