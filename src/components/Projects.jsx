import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SmartBite',
      skills: 'HTML | CSS | Javascript | MERN Stack',
      about: 'SmartBite is an AI-powered diet planner designed to help users manage their nutrition effectively. It includes features like meal plan generation, inventory management for ingredients with expiry tracking, and recipe suggestions based on user preferences or available ingredients.',
      learning: 'While working on SmartBite, I gained hands-on experience with React for building dynamic user interfaces, managing state with hooks, integrating third-party APIs (Spoonacular and Clarifai), and implementing authentication with JWT.',
      visitLink: 'https://smartbite2.vercel.app/',
      sourceLink: 'https://github.com/ABHICHAUHAN1480/SmartBIte',
    },{
       title: "FoodHeaven",
       skills: "HTML | CSS | JavaScript | MERN Stack",
       about: "FoodHeaven is a restaurant web application that allows users to explore the menu, place food orders, and make online reservations seamlessly. It ensures a smooth user experience with secure authentication, an intuitive interface, and responsive design.",
       learning: "While working on FoodHeaven, I enhanced my skills in full-stack development using the MERN stack, integrated Clerk for authentication, optimized backend operations with Node.js and Express, and improved UI/UX using Tailwind CSS.",
       visitLink: 'https://food-haven-roan.vercel.app/',
      sourceLink: 'https://github.com/ABHICHAUHAN1480/Food-Haven',
    },
    // {
    //   title: 'Spotify Clone',
    //   skills: 'HTML | CSS | Javascript',
    //   about: 'Spotify Clone is a web-based music player inspired by the Spotify UI. It allows users to browse songs, play/pause tracks, navigate between songs, and control the seek bar with a clean and responsive design.',
    //   learning: 'This project helped me deepen my understanding of DOM manipulation, event handling, and creating responsive designs using CSS. Additionally, I learned how to dynamically render content and enhance user experience with intuitive controls.',
    //   visitLink: 'https://hissing-notebook-broad.on-fleek.app/',
    //   sourceLink: 'https://github.com/ABHICHAUHAN1480/spotifyclone',
    // },
  ];

  return (
    <section id="projects" className="bg-gradient-to-r from-blue-purple to-queen-pink min-h-[100vh] pb-8  p-1 ">
      <div    className="max-w-6xl  mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-20 ">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
          {projects.map(({ title, skills, about, learning, visitLink, sourceLink }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4">{skills}</p>
                <p className="text-gray-700 mb-4">{about}</p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Learnings:</span> {learning}
                </p>
                <div className="flex justify-between ">
                  <a
                    href={visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Visit Project
                  </a>
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
