import { Page, Text, Document, StyleSheet} from "@react-pdf/renderer"
import React from "react";


  const PDFFile = () => {
    return(
    <Document>
      <Page >
        <Text>Primul fisier Pdf.</Text>
      </Page>
    </Document>
    );  
} 

  export default PDFFile;