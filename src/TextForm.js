import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("upper was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("text was changed");
    setText(event.target.value);
  };

  const [text, setText] = useState();
//   text=varible
//   setText=value of that varaible we cannt directly chnage text we need to change value of settext
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeHolder="enter your text"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>
        Click to uppercase
      </button>
    </div>
  );
}
