import React from 'react';
import { Article, Img, ImgWrapper } from './styles';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useNearScreen } from '@hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { useMuationToogleLike } from '@hooks/useToggleLikeMutation';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
