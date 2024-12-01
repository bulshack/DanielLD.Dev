import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { projects } from "../Data/ProjectsData.js";
import Category from "./Category";
import { loadFull } from "tsparticles";
import "./Portfolio.css";

const Portfolio = () => {
 
  // Initialize particles using the `init` prop
  const [init, setInit ] = useState(false);

 // this should be run only once per application lifetime
 useEffect(() => {

const handleResize = () => {
  setInit((prev) => !prev); // toggle the init state to re-render the particles
;}

window.addEventListener("resize", handleResize);

initParticlesEngine(async (engine) => {
    console.log("particlesInit called");
    // Load all features
    await loadFull(engine);
    console.log("particles loaded");
  }).then(() => {
    setInit(true);
  });

return () => {
  window.removeEventListener("resize", handleResize);
  };
}, []);




  const particlesOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Use 'grab' mode for subtle interaction
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.3,
            },
          },
          trail: {
            delay: 0.1,
            pauseOnStop: true,
            quantity: 1,
            particles: {
              color: {
                value: "#ff0000",
              },
              move: {
                speed: 20,
                direction: "none",
                outModes: {
                  default: "destroy",
                },
              },
              size: {
                value: 5,
                random: true,
              },
              opacity: {
                value: 0.2,
              },
            },
          },
        },
      },
      particles: {
        number: {
          value: 50, // Reduced particle count
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#00ff99", // Adjusted to a cool tech color
        },
        shape: {
          type: ["circle", "square", "triangle"], // Simplified shapes for a cleaner look
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 3, max: 8 },
          random: true,
        },
        links: {
          enable: true, // Enable particle links
          distance: 150,
          color: "#00ff99",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Group projects by tags (unchanged)
  const groupProjectsByTags = (projects) => {
    const tagGroups = {};
    projects.forEach((project) => {
      if (project.tags && Array.isArray(project.tags)) {
        project.tags.forEach((tag) => {
          if (!tagGroups[tag]) {
            tagGroups[tag] = [];
          }
          tagGroups[tag].push(project);
        });
      }
    });
    return tagGroups;
  };

  const projectsByTag = groupProjectsByTags(projects);

  const tagOrder = [
    "Game Projects",
    "Mixed Reality Projects",
    "302 Interactive",
    "Education",
  ];

  return (
    <div className="portfolio">
      {/* Particle Background */}
      <div className="particles-container">
        <Particles
          init={setInit}
          options={particlesOptions}
        />
      </div>

      {/* Content */}
      {tagOrder.map((tag) =>
        projectsByTag[tag] ? (
          <Category
            key={tag}
            category={{ title: tag, projects: projectsByTag[tag] }}
          />
        ) : null
      )}
      {Object.keys(projectsByTag)
        .filter((tag) => !tagOrder.includes(tag))
        .map((tag) => (
          <Category
            key={tag}
            category={{ title: tag, projects: projectsByTag[tag] }}
          />
        ))}
    </div>
  );
};

export default Portfolio;
