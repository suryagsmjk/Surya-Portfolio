import React from 'react';

const FileDownloadButton = () => {
  const handleDownload = () => {
    // Path to the file in the public folder
    const fileUrl = `${process.env.PUBLIC_URL}/assets/SURYA.pdf`;
    // Create an anchor element to trigger download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'SURYA.pdf'); // You can specify the name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default FileDownloadButton;
