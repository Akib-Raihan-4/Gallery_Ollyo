import React from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities'
import {SinglePhoto} from './singlePhoto'

export const PhotoSort = (props) => {
    const sortable = useSortable({id: props.src})

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = sortable

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    return (
        <SinglePhoto ref={setNodeRef} style={style} {...props}
        {...attributes} {...listeners}/>

    )
}

