import React, { useState } from "react";

function ParentComp() {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <div className="header">Word Counter</div>
      <div className="full">
        <div className="count-word word">
          Word
          <p>{text.split(" ").length - 1}</p>
        </div>
        <div className="count-word letter">
          Letter
          <p>{text.length}</p>
        </div>
        <div className="count-word paragaraph">
          Paragaraph
          <p>
            {
              text
                .trim()
                .split(/\n+/)
                .filter((e) => e !== "").length
            }
          </p>
        </div>
      </div>
      <textarea
        name="text"
        id=""
        cols="100"
        rows="20"
        placeholder="Enter/Paste Your Text here"
        onChange={handleChangeText}
      ></textarea>
      <div className="button">
        <button className="btn uppercase">Click to Uppercase</button>
        <button className="btn lowercase">Click to Lowercase</button>
      </div>
    </div>
  );
}

export default ParentComp;
