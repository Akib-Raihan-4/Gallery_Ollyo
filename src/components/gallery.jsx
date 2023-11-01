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
    </>
  );
};

export default Gallery;
