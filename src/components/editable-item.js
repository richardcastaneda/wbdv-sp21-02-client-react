import React from 'react'

const EditableItem = (
    {
      item={title: "Some Title", _id: "ABC"}
    }) => {
    return(
      <>
        {item.title}
        <input/>
        <i className="fas fa-check float-right"></i>
      </>
    )
}

export default EditableItem