import React from 'react';

const ImageWidget = ({widget, editing}) => {

  let newImageURL;
  let newWidth;
  let newHeight;

  const setNewImageURL = (updatedText) =>
      widget.src = updatedText;

  const setNewWidth = (updatedText) =>
      widget.width = updatedText;

  const setNewHeight = (updatedText) =>
      widget.height = updatedText;
  return(
  <div>
    {
      !editing &&
      <img width={widget.width} height={widget.height} src={widget.src}/>
    }
    {
      editing &&
      <>
        <input onChange={(e=> setNewImageURL(e.target.value))}
               placeholder={widget.src} className="form-control"/> Image Source
        <input onChange={(e=> setNewWidth(e.target.value))}
               placeholder={widget.width} className="form-control"/> Width
        <input onChange={(e=> setNewHeight(e.target.value))}
               placeholder={widget.height} className="form-control"/> Height
      </>
    }
  </div>
  )
}


export default ImageWidget