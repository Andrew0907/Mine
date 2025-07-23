import { Canvas } from "@react-three/fiber";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import Monkey3d from "./Monkey";
import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

const positions = [
  {
    name: "Vietnamese-Japanese Interpreter",
    color: "#164950ff",
  },
  {
    name: "BRSE",
    color: "#8133b4ff",
  },
  {
    name: "hello world",
    color: "#f08d49ff",
  },
];

const Home = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const setPage = useContext(NavbarContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView) setPage("home");
  }, [inView, setPage]);

  // Vòng lặp qua từng vị trí mỗi 3 giây
useEffect(() => {
  const timeouts = [3000, 3000, 3000]; // thời gian cho từng dòng (ms)
  const timeout = setTimeout(() => {
    setCurrentIndex((prev) => (prev + 1) % positions.length);
  }, timeouts[currentIndex]);

  return () => clearTimeout(timeout);
}, [currentIndex]);

  const produceSpans = (name) =>
    name.split("").map((letter, index) => (
      <AnimatedSpan index={index} letter={letter} aria-hidden="true" key={index}>
        {letter}
      </AnimatedSpan>
    ));

  return (
    <HomeWrapper ref={ref} id="home-page">
      <TextContainer>
        <Name>PHẠM VI THÀNH</Name>
        <Position>
          {positions.map((position, index) => (
            <div
              key={index}
              className="text"
              style={{
                position: index === currentIndex ? "relative" : "absolute",
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 0.6s ease",
                color: position.color,
              }}
              aria-label={position.name}
            >
              {produceSpans(position.name)}
            </div>
          ))}
        </Position>
      </TextContainer>
      <DogContainer>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <Monkey3d />
        </Canvas>
      </DogContainer>
    </HomeWrapper>
  );
};

export default Home;
