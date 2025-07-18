import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";

import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import bkacad from "../../assets/images/bkacad.png";
import hvt from "../../assets/images/hvt.png";
import tranphu from "../../assets/images/tranphu.png";

const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", () => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            I{`'`}m a programmer from Vietnam with a strong desire to grow 
            and improve through new challenges. I value teamwork and enjoy 
            learning from others while offering help when I can. My curiosity 
            drives me to explore not only new ideas in programming but also 
            the world around me.  
            <br />
            <br />
            Outside of work, I love traveling to new places, discovering 
            different cultures, and finding inspiration in these experiences. 
            In my free time, I enjoy music, movies, and gaming, which help
            me stay creative and balanced.
          </Paragraph>
          <Educations>
            <AboutItem
              color={blue}
              active
              data={{
                title: "BKACAD Academy of Technology",
                p: "Software Engineering (2019-2022, Ha Noi)",
                image: bkacad,
              }}
            />
            <AboutItem
              color={green}
              data={{
                title: "Hoang Van Thu High School",
                p: "High School (2016-2019, Ha Noi)",
                image: hvt,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Tran Phu Secondary School",
                p: "Secondary Education (20012-2016, Ha Noi)",
                image: tranphu,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};

export default About;
