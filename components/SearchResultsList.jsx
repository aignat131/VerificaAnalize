import React, { useState } from 'react';
import style from './Search.module.css';
import SearchResult from './SearchResult';
import { useMediaQuery } from 'react-responsive';
import { Page, Text, Document, StyleSheet, PDFDownloadLink} from "@react-pdf/renderer"
import Paragraph from './Paragraph';

export default function SearchResultsList({ results }) {
  const [clickedResult, setClickedResult] = useState(null);
  const [comparisonValue, setComparisonValue] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');
  //const [pdfDataList, setPdfDataList] = useState(null);
  const isTabletOrMobile =useMediaQuery({
    query:'(max-width: 1224px)'})
  const handleRowClick = (result) => {
    setClickedResult(result);
  };

  const handleComparisonChange = (e) => {
    setComparisonValue(e.target.value);
  };

  const handleCheckComparison = () => {
    const value = parseFloat(comparisonValue); // Convert the input value to a number
    if (!isNaN(value)) {
      // Check if the input value is a valid number
      if (value < clickedResult.lowerReferenceValue) {
        setComparisonResult(clickedResult.lowerValueText);
      } else if (value > clickedResult.higherReferenceValue) {
        setComparisonResult(clickedResult.higherValueText);
      } else {
        setComparisonResult('It\'s all perfect');
      }
    } else {
      // Handle the case where the input value is not a valid number
      alert('Introduceti va rog un numar.');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (e.g., form submission)
      handleCheckComparison();
    }
  };
  
  return (
    <>
      <div className={style.resultsList}>
        {results.map((result, id) => (
          <SearchResult result={result} key={id} onRowClick={handleRowClick} />
        ))}
      </div>
      {clickedResult && (
        <>
        <div className={isTabletOrMobile ? style.features : style.featuresBig}>
          {clickedResult.fullName} :
          <input
            className={style.sm}
            type="text"
            value={comparisonValue}
            onChange={handleComparisonChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleCheckComparison} className={style.blueButton}>Vezi rezultatul</button>
        </div>
          <div>{Paragraph({comparisonResult})}</div>
        </>          
      )}
    </>
  );
}

const PDFDocument = ({ pdfDataList }) => (
  <Document>
     {pdfDataList.map((data, index) => (
      <Page key={index}>
        <Text>{data.fullName}</Text>
        <Text>Comparison Value: {data.comparisonValue}</Text>
        <Text>Comparison Result: {data.comparisonResult}</Text>
    </Page>
     ))}
  </Document>
);