import project1Image from './Images/0.png';
import project2Image from './Images/0.webp';


export const categories = [
    {
      title: 'Featured Projects',
      maxProjects: 5, // Maximum number of projects to display
      projects: [
        {
          id: 1,
          title: 'Project One',
          description: 'Description for Project One.',
          image: project1Image,
          link: 'https://example.com/project-one', // Add this line
          technologies: ['React', 'CSS', 'JavaScript', 'Unity'], // We'll use this later
        },
        {
          id: 2,
          title: 'Project Two',
          description: 'Description for Project Two.',
          image:'0',
          link: 'https://example.com/project-one', // Add this line
          technologies: ['React', 'CSS', 'JavaScript'], // We'll use this later
        },
        // ... Add more projects
      ],
    },
    {
      title: 'Recent Works',
      maxProjects: 3,
      projects: [
        {
          id: 101,
          title: 'Recent Project One',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10',
          image: project2Image,
          link: 'https://example.com/project-one', // Add this line
          technologies: ['React', 'CSS', 'JavaScript'], // We'll use this later
        },
        {
          id: 102,
          title: 'Recent Project Two',
          description: 'Description for Recent Project Two.',
          image: '/images/recent2.jpg',
          link: 'https://example.com/project-one', // Add this line
          technologies: ['React', 'CSS', 'JavaScript'], // We'll use this later
        },
        // ... Add more projects
      ],
    },
    // Add more categories as needed
  ];