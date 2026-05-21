import React from 'react';

const Task1 = () => {
  const tytul = ['Pierwszy','Drugi','Trzeci'];
  const paragraf = 'pieczzone';
  const link = 'https://www.google.com';

  return React.createElement(
    'div',
    { className: 'card' },
    tytul.map((tytul, index) =>
      React.createElement('h1', { key: index }, tytul)
    ),
    React.createElement('p', null, paragraf),
    React.createElement('a', { href: link }, 'Google')
  );
}

export default Task1;
