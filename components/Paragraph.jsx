import React from 'react';
import style from './Search.module.css';


const Paragraph = ({ comparisonResult }) => {

  const formattedText = comparisonResult ? comparisonResult.replace(/[.;:?!]/g, (match) => `${match}\n`) : '';

  return (
    <>
      {formattedText.split('\n').map((line, index) => (
        <div key={index} className={index === 0 ? style.finals1 : style.finals}>{line}</div>
      ))}
    </>
  );
};

export default Paragraph;
