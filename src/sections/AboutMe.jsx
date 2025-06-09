import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// src/components/AboutMe.jsx
const AboutMe = () => {
  return (
    <section id="about" className="about-section px-6 pt-16 pb-0 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
        <p className="text-white-50 text-lg md:text-xl leading-relaxed">
          Entrepreneur, Founder and CEO of CipherCortex, blending encryption with cognitive computing. I’m a passionate Full Stack Blockchain Developer & SAAS Developer focused on leveraging Blockchain
 and AI Technologies to create scalable solutions and drive growth in tech-driven industries by building beautiful and performant web and mobile applications. With experience in React, React Native, TailwindCSS, and GSAP animations. I love creating smooth, interactive experiences that engage users and bring ideas to life.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
