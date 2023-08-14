import React from 'react'

function FilteredButtons({ filterStatus, setFilterStatus }) {
  
  return (
<div className='flex mb-10 bg-white rounded-3xl'>
  <button
    className={`${
      filterStatus === 'Tous' ? 'bg-[#083953] text-white ': ' text-gray-700'
    }  py-2 px-4 rounded-l-3xl transition duration-500 ease-in-out`}
    onClick={() => setFilterStatus('Tous')}
  >
    Tous
  </button>
  <button
    className={`${
      filterStatus === 'terminé' ? 'bg-[#083953] text-white ' : ' text-gray-700'
    } py-2 px-4 transition duration-500 ease-in-out`}
    onClick={() => setFilterStatus('terminé')}
  >
    Terminé
  </button>
  <button
    className={`${
      filterStatus === 'en cours' ? 'bg-[#083953] text-white ' : ' text-gray-700'
    } py-2 px-4 rounded-r-3xl transition duration-500 ease-in-out`}
    onClick={() => setFilterStatus('en cours')}
  >
    En cours
  </button>
</div>
  );
}

export default FilteredButtons;





