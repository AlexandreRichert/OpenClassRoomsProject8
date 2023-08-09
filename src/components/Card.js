import React from 'react'

function Card(props) {
  return (
    <div className='shadow-1 rounded-lg'>
      <img src={props.imageUrl} alt={props.title} className='object-cover rounded-t-lg'/>
      <div className='w-full bg-green-950 rounded-b-lg'>
        <h2 >{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card