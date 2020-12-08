import React from 'react';

const Paragraph = ({ text }) => {
    return (
      <div>
        <p>hi</p>
        <p style={{ color: "blue" }}>{text}</p>
      </div>
    );
  };

  export default Paragraph;