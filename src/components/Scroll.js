import react from "react";

const Scroll = (props) =>{   //css:overflow-y, jsx: overflowY
    return (
        <div style={{overflowY:'scroll', border: '1px solid',height: '800px'}}>    
            {props.children}
        </div>
    )
}

export default Scroll