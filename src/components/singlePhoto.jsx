import React, {forwardRef, useState} from 'react';

export const SinglePhoto = forwardRef(({src, index, faded, style, ...props}, ref) => {
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    borderRadius:10,
    border:1,
    borderColor:'#000',
    // backgroundImage: `url("${src}")`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    ...style,
  };

  const inlineImgStyles = {
    height: index === 0 ? 410 : 200,
    borderRadius:10,
    width: "100%",
  }

  const [src1, setSrc1] = useState(src)
  console.log(src1)

  return(
    <div ref={ref} style={inlineStyles} {...props} >
      <img src={src1} alt="" style={ inlineImgStyles}/>
    </div>
  ) 
  
});
