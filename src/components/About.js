import React from 'react'
import image from '../assets/dev_frontend.webp'

function About() {
  return (
    <div id='about' className="bg-about-pattern bg-cover bg-center w-full h-full py-10 flex flex-col justify-center items-center gap-6 ">
        <img className='mt-4 rounded-tl-[30%] rounded-br-[30%] bg-[#0a192f] w-60' src={image} alt="developpement web" />
        <h1 className=' my-4 pr-10 text-4xl sm:text-6xl text-[#0a192f] font-bold '>A propos</h1>
        <p className='sm:text-lg w-11/12 shadow-1 font-medium bg-[#075C74] rounded-md backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 py-6 px-6 mb-7'>
        Lors de mes 3 années en tant que chargé de terrain à BVA group, un institut de sondages et de statistiques, j'ai eu l'occasion de côtoyer les développeurs de l'entreprise et de tester les outils en cours de développement.Depuis, je suis attiré par ce domaine.<br/> 
        Après une formation en auto-didacte afin d'assouvir cette curiosité, je me tourne vers des ressources sur le développement front-end. Le processus d'intégration et de design d'un site web m'intéressant, je décide de me lancer dans une formation qui me permettra d'acquérir les compétences nécessaires : La formation de développeur intégrateur web d'OpenclassRoom. <br/>
        Cette formation proposait un apprentissage accéléré en 7 mois, à distance et avec l'aide d'un mentor, permettant de solidifier les connaissances de base ainsi que d'approfondir les compétences sur les différents langages utiles au développement front-end (JavaScript, React).<br/>
        Actuellement, il me paraît important de continuer sur cette voie en effectuant une alternance afin de préparer un diplôme de concepteur développeur d'applications web. Cela me permettrait de mettre l'ensemble des connaissances acquises dans un cadre professionnel. <br/>
        Le métier de développeur web étant en perpétuelle évolution, il reste important de maintenir l'autoformation. Ainsi, en parallèle, des projets sont à venir comme la refonte d'un site vitrine pour un auto-entrepreneur tapissier sur meuble ainsi que la création d'un site vitrine pour un botaniste qui souhaite partager ses conseils et ses réalisations.        
        </p>
    </div>
    )
}

export default About