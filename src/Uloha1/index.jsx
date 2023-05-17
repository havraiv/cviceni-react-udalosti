import React from 'react';

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => {
  const showBubble = () => alert('Ahoj');
  return <button onClick={showBubble}>Ukaž bublinu</button>;
};
