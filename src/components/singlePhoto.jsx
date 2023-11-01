import React, {forwardRef, useState} from 'react';

export const SinglePhoto = forwardRef(({src, index, faded, style, ...props}, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    borderRadius:20,
    ...style,
  };

  const inlineImgStyles = {
    height: index === 0 ? 410 : 200,
    borderRadius:20,
    width: "100%",
    border: '1px solid #c3c3c3',
  }

  const [src1, setSrc1] = useState(src)
  console.log(src1)

  return(
    <div ref={ref} style={inlineStyles} {...props} >
      <img src={src1} alt="" style={ inlineImgStyles}/>
    </div>
  ) 
  
});
