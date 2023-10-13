import { useState } from 'react';
import HeartFillIcon from '../../images/Heart_fill.svg';
import HeartOutlineIcon from '../../images/Heart_outline.svg';
import { useAnimate } from 'framer-motion';
import { debounce } from 'debounce';

// LikeButton handler
const likeButtonHandler = debounce(async (props: { title: string }) => {
  const url = '/api/like';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props),
    });
    return response.json();
  } catch {
    console.log('Error');
  }
}, 3000);

// LikeButton compoennt
const fixedStyle = 'fixed top-1/3';
const buttonSize = 'w-24 h-24';
const buttonLayout = 'flex flex-col justify-center items-center';
const textStyle = 'text-sm font-semibold';

export const LikeButton = (props: { title: string }): JSX.Element => {
  const [isLiked, setIsLiked] = useState(false);
  const [scope, animate] = useAnimate();

  const toggleLike = () => {
    if (!isLiked) {
      likeButtonHandler(props);
      animate(
        scope.current,
        { scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1] },
        { duration: 0.3 },
      );
    }
    setIsLiked(!isLiked);
  };

  return (
    <button
      ref={scope}
      onClick={toggleLike}
      className={`${fixedStyle} ${buttonLayout} ${buttonSize}`}
      style={{
        marginLeft: '-150px',
      }}
    >
      {isLiked ? (
        <>
          <HeartFillIcon />
          <p className={textStyle}>Thank you 😭</p>
        </>
      ) : (
        <>
          <HeartOutlineIcon />
          <p className={textStyle}>いいね👍</p>
        </>
      )}
    </button>
  );
};
