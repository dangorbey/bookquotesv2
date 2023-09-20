import React from 'react';

type HighlightedTextProps = {
  selectedGradient: string;
  children: React.ReactNode;
};

const HighlightedText: React.FC<HighlightedTextProps> = ({ selectedGradient, children }) => (
  <span className={`text-black rounded-tl-xl rounded-bl-md rounded-tr-md rounded-br-2xl ${selectedGradient}`}>
    {children}
  </span>
);

export default HighlightedText;
