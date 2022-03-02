import React from "react";
import Particles from "react-tsparticles";
type Props = {};

function Particle({}: Props) {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 1, smooth: 100 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 150,
              duration: 0.3,
              opacity: 2,
              size: 5,
            },
            grab: { distance: 400, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#fff" },
          links: {
            color: "#ffffff",
            distance: 500,
            enable: false,
            opacity: 0.1,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            direction: "bottom",
            enable: true,
            outMode: "out",
            random: false,
            size: true,
            speed: 1,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 400 },
          opacity: {
            random: true,
            value: 0.1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
