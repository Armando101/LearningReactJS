import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { usePhotoCard } from '@hooks/usePhotoCard';

export const PhotoCardWithQuery = ({ id }) => {
  const [loading, data, error] = usePhotoCard(id);
  const { photo } = data ?? {};
  if (error) {
    return <h1>Whoops something went Wrong</h1>;
  }
  return loading ? <h2>Loading...</h2> : <PhotoCard {...photo} />;
};
