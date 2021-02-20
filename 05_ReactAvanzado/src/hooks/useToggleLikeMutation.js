import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useMuationToogleLike = () => {
  const [
    mutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(LIKE_PHOTO);
  return { mutation, mutationLoading, mutationError };
};
