// ProjectsData.js

import project1Image from './Images/0.jpg';
import project2Image from './Images/1.jpeg';
import project3Image from './Images/2.png';
import project4Image from './Images/3.png';
import project5Image from './Images/4.png';
import project6Image from './Images/5.jpeg';
import project7Image from './Images/6.png';
import project8Image from './Images/7.png';

// VR/AR Project Images
import project101Image from './Images/101.png';
//import project102Image from './Images/102.jpg';
//import project103Image from './Images/103.png';
//import project104Image from './Images/104.jpg';

export const categories = [
  {
    title: 'Game Projects',
    maxProjects: 5, // Maximum number of projects to display
    projects: [
      {
        id: 1,
        title: 'Rite of Champions',
        description:
          'Rite of Champions is a top-down action hack and slash multiplayer game where you take the role of a "Hero" that gains powers with different weapons. Each weapon grants the hero a new class, each with three unique abilities. The hero can traverse through the world combating different enemy types, take on various quests, or battle in the arena, all of which can be done online with friends.',
        image: project1Image,
        link: 'https://example.com/rite-of-champions',
        technologies: ['Unity', 'C#'],
        role: 'Lead Developer',
        contributions:
          'Developed core gameplay mechanics, implemented multiplayer features, and optimized performance.',
        achievements:
          'Successfully launched on multiple platforms with positive user feedback.',
      },
      {
        id: 2,
        title: 'Retro Electro',
        description:
          'Retro Electro is a puzzle-oriented educational game focused on teaching the basics of programming by using drag-and-drop mechanics to give a list of directions to a robot with the goal of guiding it through a maze.',
        image: project2Image,
        link: 'https://example.com/retro-electro',
        technologies: ['Unity', 'C#'],
        role: 'Gameplay Programmer',
        contributions:
          'Designed and implemented puzzle levels, integrated educational content, and collaborated with the art team for cohesive visuals.',
        achievements: 'Enhanced user engagement by 25% through innovative puzzle design.',
      },
      {
        id: 3,
        title: "Rub-A-Belly's Cat",
        description:
          "An interactive game that combines adventure and puzzle-solving elements, engaging players in a whimsical world filled with challenges and surprises.",
        image: project3Image,
        link: 'https://302interactive.itch.io/rub-a-bellys-cat',
        technologies: ['Unity', 'C#'],
        role: 'Software Engineer',
        contributions:
          'Implemented game mechanics, developed AI behavior for NPCs, and optimized game performance.',
        achievements: 'Received positive reviews for gameplay mechanics and originality.',
      },
      {
        id: 4,
        title: 'Paraparazzi!',
        description:
          'Paraparazzi! is a fast-paced photography game where players must capture photos of elusive creatures in a vibrant environment.',
        image: project4Image,
        link: 'https://example.com/paraparazzi',
        technologies: ['Unity', 'C#'],
        role: 'Lead Programmer',
        contributions:
          'Developed the camera mechanics, designed levels, and integrated sound effects.',
        achievements:
          'Featured in indie game festivals and praised for its innovative gameplay.',
      },
      {
        id: 5,
        title: 'Rolf!',
        description:
          'Rolf! is an exciting platformer game where players navigate through challenging levels filled with obstacles and enemies.',
        image: project5Image,
        link: 'https://example.com/rolf',
        technologies: ['Unity', 'C#'],
        role: 'Game Developer',
        contributions:
          'Developed level designs, implemented physics-based mechanics, and collaborated with the art team for character animations.',
        achievements: 'Featured in indie game showcases and received excellent player reviews.',
      },
      {
        id: 6,
        title: 'Rogue Rally',
        description:
          'Rogue Rally is a thrilling racing game that combines rogue-like elements, offering a unique experience each time you play.',
        image: project6Image,
        link: 'https://example.com/rogue-rally',
        technologies: ['Unity', 'C#'],
        role: 'Gameplay Engineer',
        contributions:
          'Implemented procedural track generation, designed vehicle physics, and optimized game performance.',
        achievements:
          'Increased replayability and player retention through innovative game design.',
      },
      {
        id: 7,
        title: 'Suites',
        description:
          'Suites is a strategic card game that brings a new twist to classic gameplay, challenging players to think ahead.',
        image: project7Image,
        link: 'https://example.com/suites',
        technologies: ['Unity', 'C#'],
        role: 'Software Developer',
        contributions:
          'Programmed game logic, created AI opponents, and developed a multiplayer system.',
        achievements:
          'Successfully launched with a growing online community and positive reviews.',
      },
      {
        id: 8,
        title: 'Project C',
        description:
          'Project C is an experimental game exploring new mechanics in interactive storytelling and player choice.',
        image: project8Image,
        link: 'https://example.com/project-c',
        technologies: ['Unity', 'C#'],
        role: 'Developer',
        contributions:
          'Worked on narrative scripting, implemented choice-driven mechanics, and collaborated with writers.',
        achievements:
          'Recognized for innovation in narrative design at a local game developers conference.',
      },
      // ... Add more projects if needed
    ],
  },
  {
    title: 'VR/AR Projects',
    maxProjects: 4,
    projects: [
      {
        id: 101,
        title: 'Fanport',
        description:
          'Fanport is an immersive VR experience that connects fans with their favorite sports teams through virtual events and interactive content.',
        image: project101Image,
        link: 'https://example.com/fanport',
        technologies: ['Unity', 'C#', 'VR'],
        role: 'VR Developer',
        contributions:
          'Implemented VR interactions, optimized performance for VR devices, and collaborated with designers for user experience enhancements.',
        achievements: 'Improved frame rates by 15%, leading to a smoother VR experience.',
      },
      {
        id: 102,
        title: 'Medical Command Center Iron Dev',
        description:
          'A VR simulation designed to train medical professionals in emergency response scenarios within a command center environment.',
        image: '0',
        link: 'https://example.com/medical-command-center',
        technologies: ['Unity', 'C#', 'VR'],
        role: 'Lead VR Programmer',
        contributions:
          'Developed interactive VR modules, integrated realistic medical equipment models, and ensured compliance with training protocols.',
        achievements:
          'Contributed to a 20% increase in training effectiveness as measured by participant assessments.',
      },
      {
        id: 103,
        title: 'Nurse Trainer',
        description:
          'An AR application that assists nurses in learning patient care procedures through interactive, augmented reality simulations.',
        image: '0',
        link: 'https://example.com/nurse-trainer',
        technologies: ['Unity', 'C#', 'AR'],
        role: 'AR Developer',
        contributions:
          'Developed AR features, implemented gesture recognition, and collaborated with medical experts to ensure accuracy.',
        achievements:
          'Recognized for innovation in medical training technology at the HealthTech Conference.',
      },
      {
        id: 104,
        title: 'Decision Tactical Trainer',
        description:
          'A VR training program for law enforcement to practice tactical decision-making in simulated environments.',
        image: '0',
        link: 'https://example.com/decision-tactical-trainer',
        technologies: ['Unity', 'C#', 'VR'],
        role: 'Senior VR Engineer',
        contributions:
          'Engineered immersive scenarios, integrated AI-driven characters, and optimized the simulation for real-time performance.',
        achievements:
          'Adopted by multiple agencies for officer training, enhancing readiness and decision-making skills.',
      },
      // ... Add more projects if needed
    ],
  },
  // Add more categories as needed
];
