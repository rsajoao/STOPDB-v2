import React from 'react';

interface HeadProps {
  title: string;
  description?: string;
}

const Head: React.FC<HeadProps> = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title + ' | STOP! Database';

    document
      .querySelector("meta[name='description]")
      ?.setAttribute('content', description || '');

    return () => {
      document.title = 'STOP! Database';
    };
  }, [title, description]);

  return null;
};

export default Head;
