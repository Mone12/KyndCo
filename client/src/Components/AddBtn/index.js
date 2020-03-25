import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <span
      className="delete-btn"
      {...props}
      role="button"
      tabIndex="0"
      kindnum={props.kindAttr}
      onClick={() => props.addAct()}
    >
      +
    </span>
  );
}

export default AddBtn;
