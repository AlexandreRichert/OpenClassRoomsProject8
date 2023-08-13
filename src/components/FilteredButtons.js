import React from 'react'

function FilteredButtons({ filterStatus, setFilterStatus }) {
  
    return (
        <div className='flex mb-5 gap-10'>
        <button onClick={() => setFilterStatus('Tous')}>Tous</button>
        <button onClick={() => setFilterStatus('terminé')}>Terminé</button>
        <button onClick={() => setFilterStatus('en cours')}>En cours</button>
        </div>
    );
}
export default FilteredButtons