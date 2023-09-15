import React from 'react';
import {
  SiVisualstudiocode,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';
import technos from '../data/technos.json';

function Skills() {
  return (
    <div className='w-full mb-8 sm:mb-16'>
      <h2 className='my-10 text-center text-4xl text-[#0a192f] font-bold'>Mes compétences</h2>
      <div>
        <ul className='mt-24 grid place-items-center gap-9 sm:gap-14 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
          {technos.map((techno, index) => (
            <li key={index} className="flex gap-2 items-center justify-center mb-2 bg-[#083953] flex-col w-[100px] h-[80px] hover:scale-110">
              <span className="text-blue-500 text-4xl"> {/* Encapsulez l'icône dans un élément avec les classes Tailwind */}
                {renderIcon(techno.icon)}
              </span>
              <span className="text-white">{techno.title}</span>
            </li>          
          ))}
        </ul>
      </div>
    </div>
  );
}

function renderIcon(iconName) {
  switch (iconName) {
    case 'SiVisualstudiocode':
      return <SiVisualstudiocode />;
    case 'SiFigma':
      return <SiFigma />;
    case 'SiGit':
      return <SiGit />;
    case 'SiGithub':
      return <SiGithub />;
    case 'SiHtml5':
      return <SiHtml5 />;
    case 'SiCss3':
      return <SiCss3 />;
    case 'SiTailwindcss':
      return <SiTailwindcss />;
    case 'SiJavascript':
      return <SiJavascript />;
    case 'SiReact':
      return <SiReact />;
    case 'SiNodedotjs':
      return <SiNodedotjs />;
    case 'SiExpress':
      return <SiExpress />;
    case 'SiMongodb':
      return <SiMongodb />;
    default:
      return null; // Gérer le cas où le nom de l'icône n'est pas trouvé
  }
}

export default Skills;
