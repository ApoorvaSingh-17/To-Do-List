import React from "react";

function Todoitem(props) {
    return (
    <div onClick={() => {
      props.onChecked(props.id)
    }}>
    <li>{props.text}</li>
    </div>
    );
    
}

export default Todoitem;


































// import React, { useState } from "react";

// function Todoitem(props) {
//     const [isClicked, setisClicked] = useState(false);

//     function handleClick() {
//      setisClicked(prevValue => {
//         return !prevValue;
//      })
//     }
    
//     return (
//     <div onClick={handleClick}>
//     <li style={{textDecoration: isClicked ? "line-through" : "none"}}>{props.text}</li>
//     </div>
//     );
    
// }

// export default Todoitem;