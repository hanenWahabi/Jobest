import React from "react";
function Feature(props) {
  return (
  <div className={props.type==='inverse'? "wrapperInverse"    :"wrapper" }>
  <div className="left">
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
        <div className="right">
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
/*
    <div className="wrapper">
      <div className="one">
        {props.type === "inverse" ? (
          <div className="content">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
          </div>
        ) : (
          <img src={props.srcPicture} className="picture" alt="logo" />
        )}
      </div>
      <div className="two">
        {props.type == "inverse" ? (
          <img src={props.srcPicture} className="picture" alt="logo" />
        ) : (
          <div className="content">
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
          </div>
        )}
      </div>
    </div>




*/
