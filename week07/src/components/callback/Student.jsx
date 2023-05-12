import React from "react";

function Student({ name, isHome, action }) {
    console.log({ name, isHome });
    return (
      <div>
        <button style={{width:"100px", height:"50px", fontSize:"24px"}} onClick={action}>
          {name}
          {isHome ? "🕺" : "🙈"}
        </button>
      </div>
    );
  }
  
  export default React.memo(Student);