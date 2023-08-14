import React from 'react'
import image from '../assets/dev_frontend.png'

function About() {
  return (
    <div id='about' className="bg-blue-100 w-full h-screen pb-20 flex flex-col justify-center items-center gap-6 ">
        <img className='w-52' src={image} alt="developpement web" />
        <h1>Parcours</h1>
        <p>Après 3 années passées en tant que chargé de terrain dans un institut de sondage et de statistiques, à cotoyer des développeurs webs et tester leur outils, je décide de me lancer moi aussi dans ce domaine.<br/>
        En commençant par une formation en autodidacte, je me rends compte que je souhaite me spécialiser dans le développement front-end sur le long terme.<br/>
        En ce mois d'août 2023, j'achève la formation de développeur intégrateur web d'Openclassrooms. <br/> 
        Je souhaite continuer à approfondir mes connaissances en effectuant une alternance et préparer un diplôme de concepteur développeur d'applications web. </p>
    </div>
    )
}

export default About