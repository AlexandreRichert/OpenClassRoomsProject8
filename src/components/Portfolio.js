import React from 'react'
import Data from '../data/data.json';
import Card from './Card';

function Portfolio() {
  return (
    <section id='portfolio' className=' bg-blue-200 flex flex-col justify-center items-center py-10'>
      <h1 className='text-7xl mb-14'>Mes projets</h1>
      <div className='w-11/12 h-3/4 grid gap-16 place-items-center lg:grid-cols-2'>
          {Data.map((data)=> (
              <Card key={data.id} id={data.id} title={data.title} imageUrl={data.imageUrl} github ={data.lienGithub} description = {data.description} tags={data.technos} />
          ))}
      </div>
    </section>
  )
}

export default Portfolio