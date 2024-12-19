import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { projects } from "../Data/ProjectsData.js";
import Category from "./Category";
import { loadFull } from "tsparticles";
import "./Portfolio.css";

const Portfolio = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInit((prev) => !prev); // toggle to re-render the particles if needed
    };

    window.addEventListener("resize", handleResize);

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setInit(true);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check if mobile (simple heuristic)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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
          // Disable hover/click interactions on mobile for performance
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
          onClick: {
            enable: !isMobile,
            mode: "repulse",
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
          value: isMobile ? 20 : 50, // Fewer particles on mobile
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#00ff99",
        },
        shape: {
          // Simplify shapes on mobile (just circles) for performance
          type: isMobile ? "circle" : ["circle", "square", "triangle", "polygon", "star"],
          options: {
            polygon: [
              {
                sides: 5,
              },
              {
                sides: 6,
              },
            ],
          },
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 3, max: 8 },
          random: true,
        },
        links: {
          enable: !isMobile, // Disable links on mobile
          distance: 150,
          color: "#00ff99",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.5 : 1, // Slower movement on mobile
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
    [isMobile]
  );

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
      <div className="particles-container">
        <Particles init={setInit} options={particlesOptions} />
      </div>

      {tagOrder.map((tag) =>
        projectsByTag[tag] ? (
          <Category key={tag} category={{ title: tag, projects: projectsByTag[tag] }} />
        ) : null
      )}
      {Object.keys(projectsByTag)
        .filter((tag) => !tagOrder.includes(tag))
        .map((tag) => (
          <Category key={tag} category={{ title: tag, projects: projectsByTag[tag] }} />
        ))}
    </div>
  );
};

export default Portfolio;
