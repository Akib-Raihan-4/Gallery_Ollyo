import React from 'react';
import './gallery.css';

const Nav = ({ selectedImageCount, onDeleteSelectedImages }) => {
  return (
    <>
      <div className='border border-b-[#a78282] border-transparent'>
        {selectedImageCount > 0 ? (
          <div className='flex items-center'>
            
            <h1 className='md:text-2xl text-sm font-bold my-6 ml-10'>
              <input type='checkbox' checked={true} className='mr-2' style={{ width:18, height:18 }} />
              {selectedImageCount} {selectedImageCount === 1 ? 'image is' : 'images are'} selected
            </h1>
            <button className='lg:ml-[1000px] ml-[80px] bg-red-600 px-3 py-1 text-white rounded-[20px] deleteButton' onClick={onDeleteSelectedImages}>Delete</button>
          </div>
        ) : (
          <h1 className='text-2xl font-bold my-6 ml-10'>
            Gallery
          </h1>
        )}
      </div>
    </>
  );
};

export default Nav;
