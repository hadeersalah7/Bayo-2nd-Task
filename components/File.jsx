import { useState } from "react";
import { Document } from "react-pdf";
import "./SASS/file.scss";
const File = () => {
  const [file, setFile] = useState(null);
  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };
  return (
    <>
     
      <div className="file-container">
        <h2 className="preview">PREVIEW</h2>
        <p>Select a file to open the preview</p>

        {file && (
          <div className="file-viewer">
            <Document file={file} />
          </div>
        )}
      </div>

      <input
        className="opacity-0"
        type="file"
        accept="application/pdf"
        onChange={handleFileInputChange}
      />

    </>
  );
};

export default File;
