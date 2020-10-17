import React from 'react'
import Card from './Card/Card'
import './Gallery.css'


export default function Gallery(props) {
    const cards = props.data
    return (
        <div className="gallery">
            { 
                cards.map( (item, index) => {
                    return <Card key={index} info={item} />
                })
            }
        </div>
    )
}