import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("Uppercase was clicked:"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoclick=()=>{
        // console.log("Uppercase was clicked:"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
const handleOnchange = (event)=>{
//     console.log("On change");
setText(event.target.value)
}

const handleLCopy =() => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied","success");
}
const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space Removed","success");
}
const[text,setText]=useState('');
 // text="new text"; // wrong way to change the state
 // setText("new text"); // correct way to change the state

 
    return (
        <>
        <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h1>{props.heading}</h1>
            <div className="mb-3">
               
        <textarea className="form-control" value={text} onChange={handleOnchange}  style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
        </div>
        </>
    )
}
