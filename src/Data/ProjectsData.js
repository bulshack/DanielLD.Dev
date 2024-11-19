//Project Data
import project1Image from './Images/0.jpg';
import project2Image from './Images/1.jpeg';
import project3Image from './Images/2.png';
import project4Image from './Images/3.png';
import project5Image from './Images/4.png';
import project6Image from './Images/5.jpeg';
import project7Image from './Images/6.png';
import project8Image from './Images/7.png';
import project9Image from './Images/8.png';

// VR/AR Project Images
import project101Image from './Images/101.png';
import project102Image from './Images/102.jpg';
import project104Image from './Images/205.jpg';
import project201Image from './Images/DirectX.jpeg';

// Media Retro Electro Images
import mediaImage1 from './media/retro_electro_media/image.png';
import mediaImage2 from './media/retro_electro_media/image2.png';
import mediaImage3 from './media/retro_electro_media/image3.png';
import mediaImage4 from './media/retro_electro_media/image4.png';




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
        link: '/Projects_Index/index.html',
        technologies: ['Unity', 'C#'],
        media: [project1Image],
          // Add more media items]
        role: 'Lead Developer',
        contributions:
          'Developed core gameplay mechanics, led the networking architecture, collaborated in all design elements, and implemented both player and enemy mechanics for a balanced and immersive experience.',
        achievements:
          'Delivered a fully functional prototype as part of an educational project, demonstrating the game’s potential and receiving positive feedback from instructors and peers, showcasing professional-level quality and depth',
        tags: ['Game Projects'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 2,
        title: 'Retro Electro',
        description:
          'Retro Electro is a puzzle-oriented educational game focused on teaching the basics of programming by using drag-and-drop mechanics to give a list of directions to a robot with the goal of guiding it through a maze.',
        image: project2Image,
        link:  'https://example.com',
        technologies: ['Unity', 'C#'],
        media: [
          mediaImage1,
          mediaImage2,
          mediaImage3,
          mediaImage4,
          // Add more media items
        ],
        role: 'Gameplay Programmer',
        contributions:
          'Developed player movement and logic using a "player command" system, enabling precise sequential actions. Collaborated in designing and implementing each player command for an intuitive yet challenging gameplay experience.',
        achievements: [
          'Created a cohesive and enjoyable gameplay loop that balances fun with cognitive challenge. ',
          'Contributed to the project’s evolution from a purely educational tool to an engaging puzzle game, increasing its appeal and depth ',
          'Successfully implemented a unique block-based command system that enhances player engagement and strategic thinking.'
        ],
        tags: ['Game Projects', 'Education'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: false, // Optional: Explicitly show "Visit Project" button
        
      },
      {
        id: 3,
        title: "Rub-A-Belly's Cat",
        description:
          'RUB THE BELLY! is a humor-driven, reflex-based game inspired by the classic "red light, green light" mechanic. Players must rub a virtual cat\'s belly while watching closely for mood shifts that signal when to stop rubbing. As in "red light, green light," timing is key: rub as much as you can, but be ready to pause as soon as the cat shows signs of irritation, or risk getting scratched! With progressively challenging stages, players balance risk and reward in this quirky simulation that captures the unpredictable nature of petting a feisty cat.',
        image: project3Image,
        link: 'https://302interactive.itch.io/rub-a-bellys-cat',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Gameplay Engineer and Designer',
        contributions:
          'As the gameplay programmer, developed core systems including cat behavior reactions, UI functionality, code architecture, and asset integration to create a seamless and engaging player experience.',
        achievements: 'Successfully identified and refined the game’s core “fun factor” through extensive design collaboration and gameplay iteration, navigating design debates and technical challenges to achieve a highly engaging player experience.',
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 4,
        title: 'Paraparazzi!',
        description:
          'Dive into the high-stakes world of *Paparazzi*, a gravity-defying action game where players take on the role of a movie star in a daring freefall. As you plummet through dynamic cityscapes, strike iconic poses to capture picture-perfect shots while dodging relentless enemies determined to throw you off course. Rack up points by seizing every photo opportunity and avoid getting “bagged” by adversaries trying to ruin your shot. Miss too many photo ops, and you’ll have to reshoot the scene! Can you handle the pressure and achieve the perfect take in this thrilling celebrity escapade?',
        image: project4Image,
        link: 'https://302interactive.itch.io/paraparazzi',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Gameplay Engineer and Designer',
        contributions:
          'Designed and implemented key systems, including the enemy spawner, enemy behavior cycles, and player interactions with both paparazzi and enemies. Developed the paparazzi photo cone dimensions for accurate scoring, and integrated a state machine system for streamlined player and enemy behavior management, ensuring responsive and dynamic gameplay.',
        achievements:
          'Engineered a responsive state machine architecture that improved performance and streamlined player-enemy interactions, increasing overall gameplay fluidity.',
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 5,
        title: 'Rolf!',
        description:
          'Rolf is a unique twist on the mini-golf genre, combining precision gameplay with rogue-lite mechanics. Players progress through increasingly challenging holes, gaining buffs or debuffs after each hole that impact their strategy and performance. This unpredictable element adds depth to traditional mini-golf, requiring players to adapt on the fly, balancing accuracy and strategic thinking to reach the final hole before running out of strokes. Rolf offers a refreshing blend of skill-based and tactical gameplay, delivering an engaging experience beyond typical mini-golf.',
        image: project5Image,
        link: 'https://302interactive.itch.io/rolf',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Gameplay Engineer and Designer',
        contributions:
          'Developed core elements to simulate mini-golf physics, including shot indicators, force mechanics, and interactions with rogue-lite elements. Contributed to design decisions and asset implementation, ensuring cohesive gameplay and a polished player experience.',
        achievements: 'Achieved a balanced gameplay loop that maintains the fun of mini-golf while introducing new strategic layers, enhancing player satisfaction.',
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 6,
        title: 'Rogue Rally',
        description:
          'Rogue Rally is a 3D futuristic racing game that combines high-speed car mechanics with roguelike elements. Inspired by the iconic style of Mario Kart, Rogue Rally introduces randomized, pseudo-generated tracks that make each race unique, challenging players to adapt on the fly. With a mix of skill-based racing and strategic roguelike elements, players experience the thrill of unpredictability as they navigate obstacles, utilize power-ups, and compete for victory on ever-changing courses.',
        image: project6Image,
        link: 'https://x.com/roguerally',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Tools Engineer and Gameplay Programmer',
        contributions:
          'Developed a pseudo-randomized track generation tool using Bézier curve principles, ensuring each race offers a fresh challenge. Implemented key car mechanics, including collision handling and dash functionality, to enhance gameplay dynamics. Designed and integrated UI settings for video options, allowing players to customize resolution, refresh rate, and other visual elements.',
        achievements:
          'Enhanced player control and experience with responsive car mechanics and customizable UI settings, contributing to an immersive and personalized gameplay environment.',
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 7,
        title: 'Suites',
        description:
          'The Suites is an interactive virtual world where players can personalize their own suites and invite friends for immersive social experiences. Inside their suites, players can engage in mini-games, watch live TV, share screens, and enjoy real-time communication, similar to the social functionalities of platforms like Discord but set within a 3D virtual space.',
        image: project7Image,
        link: 'https://thirdtimegames.com/introducing-the-suites/',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Networking Engineer',
        contributions:
          'Engineered core networking functionalities, including room management, disconnection/reconnection handling, and player synchronization. Integrated chat, voice communication, and streaming, allowing seamless, real-time interactions. Implemented Ready Player Me for personalized avatars using facial data, enhancing player identity within the virtual environment.',
        achievements:
          'Successfully integrated third-party libraries (Agora, Ready Player Me, Photon Network) to create a multi-functional social space with advanced communication features. Developed reliable networking systems for consistent player experiences, facilitating interactive features like screen sharing and live TV streaming.',
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 8,
        title: 'Project C',
        description:
          'Project C is an RPG action prototype set in a futuristic world filled with aliens and unique creatures. Players can switch between different classes—such as warrior, mage, and shooter—in real-time to experience diverse combat styles and defeat enemies. This prototype was designed to explore dynamic class-based combat within an immersive sci-fi universe.',
        image: project8Image,
        link: 'https://example.com/project-c',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Lead Programmer',
        contributions:
          'Handled all programming aspects, including asset integration, game controller setup, enemy implementation, UI design, and core game logic, delivering a complete and playable prototype.',
        achievements:
          'Received strong feedback from instructors and peers for developing a polished, playable prototype that demonstrated advanced programming and design skills within a collaborative student project.',
        tags: ['Game Projects', 'Education'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      { 
        id: 9,
        title: 'TTYL',
        description:
          'TTYL is a narrative-driven, time-management game that captures the chaos of teenage life. Players navigate the social world of a high schooler juggling friendships, romance, and family—while contending with a broken phone. With only outdated technology at your disposal, your social status depends on responding to texts and calls promptly. Maintain connections with friends, keep your boyfriend happy, and, crucially, stay on Mom’s good side to secure that long-awaited phone upgrade.',
        image: project9Image,
        link: 'https://302interactive.itch.io/ttyl',
        technologies: ['Godot', 'GDScript'],
        media: [],
        role: 'Quality Assurance and Design Feedback',
        contributions:
          'Tested gameplay extensively to ensure a smooth player experience, identified bugs, and provided design feedback to enhance narrative immersion and pacing.',
        achievements:
          [
            'Contributed to a polished user experience by identifying and addressing key gameplay issues through thorough quality assurance.',
            'Influenced design improvements, enhancing player engagement and narrative flow.',
            'Received positive feedback for helping create a game that resonates with players through relatable scenarios and fast-paced interaction dynamics.',
          ],
        tags: ['Game Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
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
          'Mixed reality platform unveiled at the Augmented World Expo (AWE) in LA. Designed to merge physical and digital worlds, FanPort combines large LED screens or projected displays with AR glasses to allow “holographic” content to seamlessly interact with the audience’s physical space. It creates a shared, social experience where users can interact with virtual objects, reach “into” the screen, and collaborate with others in real-time, enhancing immersive engagements for brand and entertainment experiences.',
        image: project101Image,
        link: 'https://fanport.drawandcode.com/',
        technologies: ['Unity', 'C#', 'UDP', 'NatNet', 'VR', 'AR'],
        media: [],
        role: 'Lead Networking Developer',
        contributions:
          'Engineered a high-performance networking solution, managing real-time data flow at 240Hz to maintain smooth interactions and avoid motion sickness. Integrated NatNet cameras and connected data streams through a UDP server to Unity clients, ensuring synchronized AR/VR experiences. Developed a JSON management system for seamless connection/disconnection handling and headset management, and conducted rigorous motion-to-photon latency testing to optimize user experience.',
        achievements: 'Contributed to a fully functional and socially interactive mixed reality experience that was launched successfully at AWE 2024, generating significant interest and positive feedback from attendees. Achieved high data transmission rate of 240Hz to deliver fluid, immersive interactions within mixed reality space.',
        tags: ['Mixed Reality Projects', '302 Interactive'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 102,
        title: 'Medical Command Center Iron Dev',
        description:
          'The teams who took part in the annual Iron Dev competition at I/ITSEC 2020. Iron Dev is a team competition similar to competitive cooking shows, where teams will be given a challenge and “secret ingredient” to develop a training solution to improve warfighter readiness. Teams will consist of diverse members with skills in AR/VR development, simulation networking/distribution, graphic design, simulation development, and training development. Listen in as the teams share who they are and what they did for this year\'s competition.',
        image: project102Image,
        link: 'https://www.fox35orlando.com/video/874113',
        technologies: ['Unity', 'C#', 'VR'],
        media: [],
        role: 'VR Developer',
        contributions:
          'Implemented assets within the VR environment, coordinated with the art team for cohesive visual integration, and managed feature implementation. Developed the networking and management system to enable virtual resource exchange and communication, simulating a command center setup for hospitals.',
        achievements: 
        [
          'Awarded “Most Innovative” at Iron Dev 2020 for creating a VR command center solution focused on pandemic-related resource management and coordination.',
          'Delivered a fully interactive and immersive VR command center that enabled effective resource sharing and emergency preparedness training.',
          'Recognized for advancing virtual simulation solutions aligned with real-world emergency protocols and healthcare coordination needs.',
        ],
        tags: ['Mixed Reality Projects'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 103,
        title: 'Nurse Trainer',
        description:
          'Nurse Train is a VR simulation project created to provide medical students with realistic training on the use of X-ray machines. Recognizing the limited hands-on time available with actual equipment, this immersive simulation replicates a clinical environment where students can learn X-ray machine operations, improve technique, and build confidence before handling real equipment.',
        image: project102Image,
        link: 'https://example.com/nurse-trainer',
        technologies: ['Unity', 'C#', 'AR'],
        media: [],
        role: 'VR Developer',
        contributions:
          'Developed the VR logic and implemented a realistic, interactive X-ray machine simulation. Managed networking aspects using Photon Networking, enabling multi-user interactions for collaborative training sessions.',
        achievements:
          'Enhanced student learning experiences by creating a high-fidelity X-ray simulation environment. Increased student confidence and proficiency in X-ray machine operation through hands-on practice in a safe, controlled setting.',
        tags: ['Mixed Reality Projects'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      {
        id: 104,
        title: 'Decision Tactical Trainer',
        description:
          'Decision Tactical Trainer started as a VR and mixed reality program developed to enhance tactical decision-making skills for law enforcement officers. The simulation recreates realistic, high-stakes scenarios on a large screen, where officers engage in situational exercises using advanced sensor integration. This system provides precise feedback on actions, helping officers improve response and decision-making in controlled, immersive environments.',
        image: project104Image,
        link: 'https://decisiontactical.com/',
        technologies: ['Unity', 'C#'],
        media: [],
        role: 'Senior VR Engineer',
        contributions:
          'Engineered immersive and interactive scenarios, integrated AI-driven characters for dynamic responses, and optimized real-time performance. Developed a mixed reality system using laser-point detection and custom gun attachments that send signals to the server, accurately registering shot placement and actions within the virtual scenario.',
        achievements:
        [
          'Contributed to the foundational prototype, which has since evolved into a full-fledged business, widely adopted by law enforcement agencies for tactical training.',
          'Delivered precise real-time feedback through advanced sensor integration, enabling officers to evaluate their performance within realistic, high-pressure scenarios.',
        ],
        tags: ['Mixed Reality Projects'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
      // ... Add more projects if needed
    ],
  },
  // Add more categories as needed
  {
    title: 'Personal Research Projects',
    maxProjects: 100,
    projects: [
      {
        id: 201,
        title: 'Split-Screen Graphics Exploration',
        description: 'This project focuses on exploring GPU capabilities and core computer graphics concepts using C++ and the DirectX API. It features a split-screen setup with two visually distinct themes: an expansive space universe and a Super Smash Brothers-inspired arena. Key elements include custom shader development, dynamic lighting, and real-time rendering optimizations to harness GPU performance. The FPS camera system allows smooth, free navigation, enabling an immersive exploration of both 3D worlds.',
        image: project201Image,
        link: 'https://example.com/fanport',
        technologies: ['C++', 'DirectX', 'Shaders', 'GPU Optimization'],
        media: [],
        role: 'Solo Developer',
        contributions:
          'Designed and implemented custom shaders and dynamic lighting effects to enhance visual realism across split-screen themes. Optimized GPU usage to achieve smooth real-time rendering, pushing the DirectX API to handle complex graphics tasks. Developed an FPS camera system, providing fluid, interactive navigation within diverse 3D environments. Gained hands-on experience with GPU programming and rendering techniques foundational to computer graphics.',
        achievements: 
        [
          'Designed and implemented custom shaders and dynamic lighting effects to enhance visual realism across split-screen themes.',
          'Optimized GPU usage to achieve smooth real-time rendering, pushing the DirectX API to handle complex graphics tasks.',
          'Developed an FPS camera system, providing fluid, interactive navigation within diverse 3D environments.',
          'Gained hands-on experience with GPU programming and rendering techniques foundational to computer graphics.',
        ],
        tags: ['Education'],
        showGallery: true, // Optional: Explicitly show gallery
        showVisitButton: true, // Optional: Explicitly show "Visit Project" button
      },
    ],
  },
];


export const projects = categories.flatMap((category) => category.projects);

// ... Add more projects if needed

// Add more categories as needed



