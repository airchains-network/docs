import React, { useEffect, useState } from 'react';

const ApiEmbed = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/api.html')
      .then((res) => res.text())
      .then((html) => {
        setHtmlContent(html);
      });
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%' }}
    />
  );
};

export default ApiEmbed;
