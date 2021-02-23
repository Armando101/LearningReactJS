import React from 'react';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery';

export default function Detail({ detailId }) {
  return <PhotoCardWithQuery id={detailId} />;
}
