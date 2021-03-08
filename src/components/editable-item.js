import React, {useState} from 'react'

const EditableItem = (
    {
      deleteItem,
      updateItem,
      item={title: "Some Title", _id: "ABC"}
    }) => {

  const [editing, setEditing] = useState(false);
  const [cachedItem, setCachedItem] = useState(item);

  return(
    <>
        {
          !editing &&
          <>
            <a className='nav-link' href='#'>
              {item.title}
            </a>
            <i onClick={() =>
                setEditing(true)}
               className="fas fa-edit float-right">
            </i>
          </>
        }
        {
          editing &&
          <>
            <input
              onChange={(e) => setCachedItem({
                ...cachedItem,
                title: e.target.value
              })}
            value={cachedItem.title}/>
            <i onClick={() =>
            {
              updateItem(cachedItem)
              setEditing(false)
              }
            } className="fas fa-check float-right">
            </i>
            <i onClick={() =>
              deleteItem(item)}
              className="fas fa-times float-right">
            </i>
          </>
        }
    </>
  )
}

export default EditableItem