import React, { useState } from 'react'

export default function TextForm (props) {

    const[text, SetText] = useState ("Enter Text here");


    const TextChangeUp = () => {
                let newText = text.toUpperCase();
                SetText (newText);
    }
    const CopyText = () => {
          let text2 = document.getElementById('exampleFormControlTextarea1')
          text2.select();
          navigator.clipboard.writeText(text2.value);
    }
    const HandleExtraSpaces =() =>{
          
          let newT = text.split(/[ ]+/);
          
          SetText(newT.join(" "));
    }

    const ClearText =() =>{
        let newT = ' '
        SetText(newT);
    }
    const handleOnChange =(event) =>{
            SetText(event.target.value)
    }
    const EnableDark = ()=>{
            let newT = document.getElementById('exampleFormControlTextarea1');
                newT.style.color='white';
                newT.style.backgroundColor ='Black';

      }

  return (
    <>
      <div className="container mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className='btn btn-primary my-3' onClick={TextChangeUp} >Capital</button>
        <button className='btn btn-primary my-3 mx-2' onClick={ClearText}>Clear</button>
        <button className='btn btn-primary my-3 mx-2' onClick={CopyText}>Copy</button>
        <button className='btn btn-primary my-3 mx-2' id="shiva" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
        <button className='btn btn-primary my-3 mx-2' onClick={EnableDark}>Enable Dark Mode</button>
     </div>
     <div className='container mb-3'>
        <h2>Word and character count calculator</h2>
        <p> {text.split(' ').length} words and no. of characters {text.length}</p>
        <p>{0.08 * text.split(' ').length} minutest to read</p>
        <h2>Preview</h2>
        <p>{text.toLocaleUpperCase()}</p>
     </div>
    </>

  );
}
