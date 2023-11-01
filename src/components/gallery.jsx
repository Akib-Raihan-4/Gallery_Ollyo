import React, { useState } from 'react';
import './gallery.css';
import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { PhotoSort } from './photoSort';
import photos from './photosUrl.json';
import { SinglePhoto } from './singlePhoto';


const Gallery = () => {
  

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const [activeId, setActiveId] = useState(null);
  const [items, setItems] = useState(photos);
  const [selectedImages, setSelectedImages] = useState([]);


  
  const handleDragStart = (e) =>{
    setActiveId(e.active.id)
  }

  const handleDragEnd = (e) => {
    const {active, over} = e;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  const handleDragCancel = () => {
    setActiveId(null)
  }

  const handleImageSelect = (src) => {
    const isSelected = selectedImages.includes(src);

    if (isSelected) {
      setSelectedImages(selectedImages.filter((selectedSrc) => selectedSrc !== src));
    } else {
      setSelectedImages([...selectedImages, src]);
    }
  };

  const handleDeleteSelectedImages = () => {
    setItems(items.filter((src) => !selectedImages.includes(src)));
    setSelectedImages([]);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext 
          items = {items}
          strategy={rectSortingStrategy}
        >
          <div
            className='gridLayout'
          >
            {items.map((src,index) => (
              <PhotoSort key={src}
              src= {src}
              index = {index}
              onImageSelect={handleImageSelect}
              selected={selectedImages.includes(src)}
              />
            ))}

          </div>
        </SortableContext>  
        <DragOverlay adjustScale={true}>
          {activeId ? (
            <SinglePhoto src={activeId} index={items.indexOf(activeId)} />
          ):null}
        </DragOverlay>      
      </DndContext>
      {selectedImages.length > 0 && (
        <div className='border border-b-[#a78282] border-transparent'>
          <h1 className='text-2xl font-bold my-6 ml-10'>
            {selectedImages.length} Image(s) Selected
          </h1>
          <button onClick={handleDeleteSelectedImages}>Delete Selected Images</button>
        </div>
      )}
    </>
  );
};

export default Gallery;
