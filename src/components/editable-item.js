import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
      to = '/something/to/go',
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
            <Link className='nav-link' to={to}>
              {item.title}
            </Link>
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
};

export default EditableItem