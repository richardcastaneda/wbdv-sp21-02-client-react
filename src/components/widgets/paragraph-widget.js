import React from 'react'

const ParagraphWidget = ({widget, editing}) => {
  let newText;
  const setNewText = (updatedText) =>
    widget.text = updatedText;

  return(
    <>
      {
        editing &&
      <>
        <textarea onChange={(e=> setNewText(e.target.value))}
          placeholder={widget.text}
         id="newText" className="form-control"></textarea>
      </>
      }
      {
      !editing &&
        <p>
          {widget.text}
        </p>
      }
    </>
  )
}

export default ParagraphWidget