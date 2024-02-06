import React,{useState} from 'react';

export default function TextFrom(props)
{
  const [text,setText]=useState('');

    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
       props.showAlert("converted to uppercase","success");
        
    }
        const handleLoClick=()=>{
        let newtext1=text.toLowerCase();
        setText(newtext1)
        props.showAlert("converted to lowercase","success");
    }
   
    const handleclearClick=()=>{
    let newtext1=" ";
    setText(newtext1)
    props.showAlert("Text clear","success");
}
const handleClick=()=>{
  
  navigator.clipboard.writeText(text);
  document.getSelection().removeAllRanges();
  props.showAlert("Copy to clipboard","success");
}
    const onChange=(event)=>{ 
        setText(event.target.value);   
  }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'black'}}>
    <h2 className='mb-4'>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={onChange} style={{backgroundColor:props.mode==='dark'? 'white':'#45477e',color:props.mode==='dark'? 'black':'white'}} id="myBox" rows="8" ></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleclearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Copy Text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'? 'white':'black'}}>
<h3>your text summery</h3>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
    </>
  )
}
