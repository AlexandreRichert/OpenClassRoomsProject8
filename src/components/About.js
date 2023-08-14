import React from 'react'
import image from '../assets/dev_frontend.png'

function About() {
  return (
    <div id='about' className="bg-about-pattern bg-cover bg-center w-full h-full py-10 flex flex-col justify-center items-center gap-6 ">
        <img className='mt-4 rounded-tl-[30%] rounded-br-[30%] bg-[#0a192f] w-60' src={image} alt="developpement web" />
        <h1 className=' my-4 pr-10 text-5xl text-[#0a192f] font-bold '>Parcours</h1>
        <p className='w-11/12 shadow-1 font-medium bg-[#075C74] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 py-6 px-6 mb-7'>Après 3 années passées en tant que chargé de terrain dans un institut de sondage et de statistiques, à cotoyer des développeurs webs et tester leur outils, je décide de me lancer moi aussi dans ce domaine.<br/>
        En commençant par une formation en autodidacte, je me rends compte que je souhaite me spécialiser dans le développement front-end sur le long terme.<br/>
        En ce mois d'août 2023, j'achève la formation de développeur intégrateur web d'Openclassrooms. <br/> 
        Je souhaite continuer à approfondir mes connaissances en effectuant une alternance et préparer un diplôme de concepteur développeur d'applications web. </p>
    </div>
    )
}

export default About