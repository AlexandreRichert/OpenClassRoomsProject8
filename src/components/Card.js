import React from 'react'

function Card(props) {
  return (
    <div>
        <img src={props.imageUrl} alt={props.title} />
        <span>{props.title}</span>
    </div>
  )
}

export default Card