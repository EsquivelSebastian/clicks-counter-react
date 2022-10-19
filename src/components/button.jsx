import React from "react";

function Button({ text, bttnClick, controlClick }) {
  return (
    <button
      className={bttnClick ? "bttn-click" : "btn-reset"}
      onClick={controlClick}>
        
      {text}
    </button>
  )
}
export default Button;
