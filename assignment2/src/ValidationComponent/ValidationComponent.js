import React from 'react';

const Validation = (props) => {
  let len = props.len;
  let text= null;
  if(len <= 5){
    text = (
      <p style={{color: 'red'}}>Text too short </p>
      );
  }else{
    text = (
      <p style={{color: 'green'}}>Text long enough </p>
      );
  }

  return (
    <div >
      {text}
    </div>
  );
}

export default Validation;
