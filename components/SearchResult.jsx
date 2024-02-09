import React, { useState } from 'react';
import styles from "./Search.module.css";

export default function SearchResult({ result, onRowClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    onRowClick(result);
  };

  return (
    <div
      className={`${styles.searchResult} ${isHovered ? styles.hovered : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {result.name}
    </div>
  );
}
