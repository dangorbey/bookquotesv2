import React from 'react';
import type { Color } from '../../../colorConfig';
import { gradients } from '../../../colorConfig';

type GradientButtonProps = {
  color: Color;
  selectedGradient: string;
  setSelectedGradient: React.Dispatch<React.SetStateAction<string>>;
};

const GradientButton: React.FC<GradientButtonProps> = ({ color, selectedGradient, setSelectedGradient }) => {

  const handleClick = () => {
    setSelectedGradient(gradients[color]);
  };

  const buttonStyle = `
    w-8 h-8 
    rounded-full 
    transition ease-in-out duration-150 
    ${selectedGradient === gradients[color] ? `bg-${color}-200 border-2 border-${color}-400` : `bg-${color}-200 hover:bg-${color}-300`}
  `;

  return (
    <button onClick={handleClick} className={buttonStyle}></button>
  );
};

export default GradientButton;
