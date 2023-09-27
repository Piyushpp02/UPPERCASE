import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("upper was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  };
   const handleLowclick = () => {
     console.log("lower was clicked");
     let newText=text.toLowerCase();
     setText(newText);
   };
   const handleclearclick = () => {
    console.log("clear was clicked");
   
    setText('');
  };


  const handleOnChange = (event) => {
    console.log("text was changed");
    setText(event.target.value);
  };

  const [text, setText] = useState(" enter txt")
//   text=varible
//   setText=value of that varaible we cannt directly chnage text we need to change value of settext
  return (
    <>
    
    <div className="container">
      <h1>{props.heading}</h1>
      <div>
        
        <textarea
        
          className="form-control"
         
          
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        </div>

      
      <button className="btn btn-primary" onClick={handleUpclick}>
        Click to uppercase
      </button>
      <button className="btn btn-primary mx-5 my-2" onClick={handleLowclick}>
        Click to lowercase
      </button>
      <button className="btn btn-primary mx-5 my-2"   onClick={handleclearclick}>
        Click to clear 
      </button>
      </div>
    <div className="container my-3" >
    <h1>your text summary</h1>
  
     <p>{text.split(" ").length} no. of words and no of letters {text.length}</p> 
     <p>{0.008*text.split(" ").length} Minutes to read</p>  
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
