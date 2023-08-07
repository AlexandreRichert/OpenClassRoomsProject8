import React from 'react'
import Data from '../data/data.json';
import Card from './Card';

function Portfolio() {
  return (
    <div>
        {Data.map((data)=> (
            <Card key={data.id} id={data.id} title={data.title} imageUrl={data.imageUrl} github ={data.lienGithub} />
        ))}
    </div>
  )
}

export default Portfolio