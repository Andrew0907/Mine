import { useFrame, extend } from "@react-three/fiber";
import SpriteText from "three-spritetext";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useIsMobile } from "../../hooks";
extend({ SpriteText });

const Skills = () => {
  const { isMobile } = useIsMobile();

  const getPos = (k) => {
    let a = Math.random();
    let b = Math.random();
    return b > 0.5 ? a * k : a * -1 * k; // random position in range [-k, k]
  };

  const getColor = () => {
    let colors = ["#FAFF81", "#E06D06", "#F4A261", "#2A9D8F"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Python",
    "Java",
    "Spring Boot",
    "React",
    "Angular",
    "Node.js",
    "Vue.js",
    "Nuxt.js",
    "Next.js",
    "Laravel",
    "CakePHP",
    "Three.js",
    "Socket.io",
    "WordPress",
    "Linux",
    "Docker",
    "Nginx",
    "Apache",
    "Jenkins",
    "Firebase",
    "AWS",
    "Redis",
    "Elasticsearch",
    "MySQL",
    "MongoDB",
  ];
  const g = useRef();
  useFrame(() => {
    g.current.rotation.x += 0.00053;
    g.current.rotation.y += 0.00053;
    g.current.rotation.z += 0.001;
  });
  
  return (
    <>
      {isMobile ? null : <OrbitControls enablePan={false} enableZoom={false} />}
      <pointLight position={[-2, 2, 2]} args={["#fff", 0.3]} />
      <group ref={g} position={[0, 2, 0]} scale={0.1}>
        {skills.map((a, i) => {
          return (
            <spriteText
              text={a}
              key={i}
              fontSize={50}
              position={[getPos(80), getPos(80), getPos(80)]}
              fontFace={"'Fira Code','Roboto Mono', monospace"}
              color={getColor()}
            />
          );
        })}
      </group>
    </>
  );
};

export default Skills;
