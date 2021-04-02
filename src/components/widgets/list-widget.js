import React from 'react'

const ListWidget = ({widget, editing}) => {

  let ordered = widget.ordered;
  const setNewText = (updatedText) =>
      widget.text = updatedText;

  const determineOrder = (checked) => {
    if (ordered !== null) {
      widget.ordered = checked;
      console.log(checked);
    }
  }

  return(
      <div>
        {
          editing&&
            <>
              <input
                     onChange={(e) => {
                     determineOrder(e.target.checked)}
                     }
                     type="checkbox"
                     id="one"/>
            Ordered
              <br/>
              Item List
              <textarea onChange={(e=> setNewText(e.target.value))}
                        placeholder={widget.text}
                        id="newText"
                        className="form-control"
                        rows={10}></textarea>
            </>
        }
        {
          !editing&&
              <>
                {
                  widget.ordered &&
                  <ol>
                    {
                      widget.text.split("\n").map((item) => {
                        return(
                            <li>
                              {item}
                            </li>
                        )
                      })
                    }
                  </ol>
                }
                {
                  !widget.ordered &&
                  <ul>
                    {
                      widget.text.split("\n").map((item) => {
                        return (
                            <li>
                              {item}
                            </li>
                        )
                      })
                    }
                  </ul>
                }
              </>
        }
      </div>
  )
}
export default ListWidget