import React, { forwardRef, useState } from 'react';

export const SinglePhoto = forwardRef(({ src, index, faded, style, onImageSelect, selected, ...props }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(selected);

  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    borderRadius: 20,
    position: 'relative',
    ...style,
  };

  if (window.innerWidth <= 480) {
    inlineStyles.width = "100%";
  }

  const inlineImgStyles = {
    height: index === 0 ? 410 : 200,
    borderRadius: 20,
    width: "100%",
    border: '1px solid #c3c3c3',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderRadius: 20,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCheckboxChange = () => {
    onImageSelect(src);
  };

  const handleImageClick = () => {
    if (window.innerWidth <= 480) {
      setIsSelected(!isSelected); // Toggle the selection on mobile
    }
  };

  return (
    <div
      ref={ref}
      style={inlineStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleImageClick} // Add onClick event
    >
      {isHovered && (
        <div style={overlayStyles} {...props}>
        </div>
      )}
      {isSelected && (
        <div style={overlayStyles} {...props}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            style={{ position: 'absolute', top: 10, left: 20, zIndex: 2, height: 15, width: 15 }}
          />
        </div>
      )}
      <img src={src} alt="" style={inlineImgStyles} {...props} />
      {isHovered && !isSelected && (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
          style={{ position: 'absolute', top: 10, left: 20, zIndex: 2, height: 15, width: 15 }}
        />
      )}
    </div>
  );
});
