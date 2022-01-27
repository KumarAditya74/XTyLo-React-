import React, { useState } from 'react'

export default function About() {
    let btnStyle = {
        borderRadius : '25px'
    }
   const [myStyle, setMyStyle] =useState({
       color: 'white',
       backgroundColor:'black'
   })
   const [btnText, setBtnText] = useState("Enable light mode")

   const toggleStyle = ()=>{
       if(myStyle.color === 'white'){
           setMyStyle({
            color: 'black',
            backgroundColor:'white'
           })
           setBtnText("Enable dark mode")
       }
       else{
        setMyStyle({
            color: 'white',
            backgroundColor:'black'
           }) 
           setBtnText("Enable light mode")

       }
   }
  return (
    <div className="container" style={myStyle}>
    <div>
        <h1 className="about my-4">About Us</h1>
        
            <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                About-creator
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
                <strong>Kumar Aditya</strong> is the creator of XTyLo application. He is a 2nd year B.Tech student in the stream of <strong>Information Technology</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                My github profile
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
               <a href="https://github.com/KumarAditya74">Visit my github profile</a>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                Contact me at Linkedin
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
            <a href="https://www.linkedin.com/in/kumar-aditya-53a90a214">Check me out at linkedin</a>
            </div>
            </div>
        </div>
        </div>
        <button className="btn btn-success my-3" onClick = {toggleStyle} style = {btnStyle} >{btnText}</button>
    </div>
    </div>
  )
}
