import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[0, 1, 2, 3].map((id) => (
        <PhotoCard key={id} />
      ))}
    </ul>
  );
};
