import React, { useState } from 'react';
import Data from '../data/data.json';
import Card from './Card';
import FilteredButtons from './FilteredButtons';

function Portfolio() {

  const [filterStatus, setFilterStatus] = useState('Tous');

  const filteredData = Data.filter(data => {
    if (filterStatus === 'Tous') {
      return true;
    }
    return data.statut === filterStatus;
  });

  return (
    <section id='portfolio' className=' bg-blue-200 flex flex-col justify-center items-center py-10'>
      <h1 className='text-4xl mb-14 font-bold'>Mes projets</h1>
      <FilteredButtons filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <div className='w-full h-3/4 grid gap-16 place-items-center sm:grid-cols-2 2xl:grid-cols-3'>
        {filteredData.map((data) => (
          <Card key={data.id} id={data.id} title={data.title} imageUrl={data.imageUrl} github={data.lienGithub} description={data.description} tags={data.technos} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio