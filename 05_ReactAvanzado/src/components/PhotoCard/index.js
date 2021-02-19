import React, { useEffect, useRef, useState } from 'react';
import { Article, Button, Img, ImgWrapper } from './styles';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // Guardamos la referencia del elemento en el DOM
  // En un principio es null pero en el componente Article se asigna la referecia a la variable ref
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;
  const [liked, setLiked] = useState(() => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
        </>
      )}

      <Button onClick={() => setLocalStorage(!liked)}>
        <Icon size="32px" /> {likes} likes!
      </Button>
    </Article>
  );
};
