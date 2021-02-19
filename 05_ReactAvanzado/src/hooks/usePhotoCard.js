import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_SINGLE_PHOTO = gql`
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

export const usePhotoCard = (id) => {
  const { loading, data, error } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id },
  });

  return [loading, data, error];
};
