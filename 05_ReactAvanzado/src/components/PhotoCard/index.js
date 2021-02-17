import React from 'react';
import { Button, Img, ImgWrapper } from './styles';
import { FcLike } from 'react-icons/fc';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt="" />
        </ImgWrapper>
      </a>

      <Button>
        <FcLike size="32px" /> {likes} likes!
      </Button>
    </article>
  );
};
