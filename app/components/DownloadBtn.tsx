import React from 'react';
import './Button.css'; // Make sure to import the CSS file

const DownloadButton: React.FC = () => {
  return (
    <button className="button">
      <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">Resume Download Now</span>
      </span>
    </button>
  );
};

export default DownloadButton;
