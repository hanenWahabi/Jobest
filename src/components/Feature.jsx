import React from "react";
function Feature(props) {
  return (
  <div className={props.type==='inverse'? "wrapperInverse"    :"wrapper" }>
  <div className= {props.type==='inverse'? "leftInverse"    :"left"}>
  {props.type==='inverse'?
  <div className="content">
  <p className="title">{props.title}</p>
  <p className="description">{props.description}</p>
</div>
:
<div className="justifyPicture">
<img src={props.srcPicture} className="pictureLeft" alt="logo" />
</div>
  }
        </div>
        <div className={props.type==='inverse'? "rightInverse"    :"right"}>
        {props.type==='inverse'?  
        <div className="justifyPicture">
                  <img src={props.srcPicture} className="picture" alt="logo" />

           </div>
  :

<div className="content">
<p className="title">{props.title}</p>
<p className="description">{props.description}</p>
</div>
}
       
          </div>
        </div>

      
  );
}

export default Feature;