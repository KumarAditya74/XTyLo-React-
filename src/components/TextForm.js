import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  
 
 
    
  

  const handleOnChange = (event)=>{
      console.log("On Change");
      setText(event.target.value);
  }
  const convertUp = ()=>{
  console.log("Uppercase is clicked");
  let newText = text.toUpperCase();
  setText(newText);
  }
  const convertLc = ()=>{
    console.log("Lowercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    }
    const clearText = () =>{
      let nwText = (" ");
      setText(nwText);
    }
    const redText = () =>{
      document.getElementById("myBox").style.color = "red";
    }
    const blueText = () =>{
      document.getElementById("myBox").style.color = "blue";
    }
    const greenText = () =>{
      document.getElementById("myBox").style.color = "green";
    }
    const yellowText = () =>{
      document.getElementById("myBox").style.color = "yellow";
    }
    const redBg = () =>{
      document.body.style.backgroundColor = "red";
    }
    const blueBg = () =>{
      document.body.style.backgroundColor = "blue";
    }
    const greenBg = () =>{
      document.body.style.backgroundColor = "green";
    }
    const yellowBg = () =>{
      document.body.style.backgroundColor = "yellow";
    }
    const orangeBg = () =>{
      document.body.style.backgroundColor = "orange";
    }
    const cyanBg = () =>{
      document.body.style.backgroundColor = "cyan";
    }
    const changeItalic = () =>{
      document.getElementById("myBox").style.fontStyle = "italic";
    }
    const changeNormal = () =>{
      document.getElementById("myBox").style.fontStyle = "inherit";
    }
    
  
    return (
      <>
         <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
               <h1>{props.heading}</h1>
               <div className="mb-3" >
       
                 <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#5e5978':'white',  color:props.mode==='dark'?'white':'black'}} rows="9"></textarea>
              </div>
             <button className="btn btn-primary mx-1" onClick={convertUp}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-1" onClick={convertLc}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
              <a class="btn btn-primary dropdown-toggle mx-1"  role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Change text colour
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" onClick = {redText}>Red</a></li>
                  <li><a class="dropdown-item" onClick = {blueText}>Blue</a></li>
                  <li><a class="dropdown-item" onClick = {greenText}>Green</a></li>
                  <li><a class="dropdown-item" onClick = {yellowText}>Yellow</a></li>
                  
                </ul>
           
              
                <a class="btn btn-primary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Change background colour
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" onClick = {redBg}>Red</a></li>
                  <li><a class="dropdown-item" onClick = {blueBg}>Blue</a></li>
                  <li><a class="dropdown-item" onClick = {greenBg}>Green</a></li>
                  <li><a class="dropdown-item" onClick = {yellowBg}>Yellow</a></li>
                  <li><a class="dropdown-item" onClick = {orangeBg}>Orange</a></li>
                  <li><a class="dropdown-item" onClick = {cyanBg}>Cyan</a></li>
                </ul>
              
              
              <div class="btn-group"> 
                 <button type="button" class="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                   Change font
                </button>
               <ul class="dropdown-menu">
                <li><a class="dropdown-item" id="btn1" onClick={changeItalic}>Italics</a></li>
                <li><a class="dropdown-item"  id="btn2"  onClick={changeNormal}>Normal</a></li>
               
                
               </ul>
             </div>
           </div>
       <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
       
       </>
  )
}
