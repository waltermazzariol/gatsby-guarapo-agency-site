import React from "react"

function List(props) {

  return (
      <ul>
    {props.data.map((key) =>
        <li key={key.text} ><i className="far fa-dot-circle"></i>
          {key.text}
        </li>
      )}
      </ul>
)}

export default List