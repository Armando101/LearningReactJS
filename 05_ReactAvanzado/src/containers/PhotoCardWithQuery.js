import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, data, error } = useQuery(query, {
    variables: { id },
  });
  const { photo } = data ?? {};
  if (error) {
    return <h1>Whoops something went Wrong</h1>;
  }
  return loading ? <h2>Loading...</h2> : <PhotoCard {...photo} />;
};
