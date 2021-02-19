import React from 'react';
import { Article, Button, Img, ImgWrapper } from './styles';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useNearScreen } from '@hooks/useNearScreen';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={ref}>
      {show && (
        <a href={`detail/${id}`}>
          <ImgWrapper>
            <Img src={src} alt="" />
          </ImgWrapper>
        </a>
      )}

      <Button onClick={() => setLiked(!liked)}>
        <Icon size="32px" /> {likes} likes!
      </Button>
    </Article>
  );
};
