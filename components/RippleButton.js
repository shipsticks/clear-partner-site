import { useState } from 'react';
import Ink from 'react-ink';

const RippleButton = ({ onClick, children, className }) => {
  const [key, setKey] = useState(0);

  const handleClick = () => {
    setTimeout(() => setKey(prevKey => prevKey + 1), 500);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative`}
    >
      {children}
      <Ink key={key} />
    </button>
  );
};

export default RippleButton;
