import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import styles from '../ExportToPdf/ExportToPdf.module.css';

const ExportToPDF = ({ children, buttonText }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Exported Content',
  });

  return (
    <div>
      <div ref={componentRef}>
        {children}
      </div>
      <button
        onClick={handlePrint}
        className={styles.exportButton}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ExportToPDF;
