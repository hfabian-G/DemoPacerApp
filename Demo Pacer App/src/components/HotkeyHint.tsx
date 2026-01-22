import React from 'react';

type HotkeyHintProps = {
  letter: string;
  word: string;
};

const HotkeyHint: React.FC<HotkeyHintProps> = ({ letter, word }) => {
  const letterIndex = word.toLowerCase().indexOf(letter.toLowerCase());

  if (letterIndex === -1) {
    return <>{word}</>;
  }

  const before = word.substring(0, letterIndex);
  const hotkey = word.substring(letterIndex, letterIndex + 1);
  const after = word.substring(letterIndex + 1);

  return (
    <>
      {before}
      <u>{hotkey}</u>
      {after}
    </>
  );
};

export default HotkeyHint;
