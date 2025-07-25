import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work4 from "../../assets/Images/work4.png";
import work5 from "../../assets/Images/work5.png";
import work6 from "../../assets/Images/work6.png";
import work7 from "../../assets/Images/work7.png";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Saas App",
      year: "2025",
      img: work7,
      title: "The future of AI-powered learning companions.",
      detail:
        "A fully functioning Saas app with an AI-powered learning companion tailored to your needs. The app uses machine learning algorithms to provide personalized learning experiences.",
      imageUrl: "https://saas-app-iota-ten.vercel.app",
    },
    {
      client: "Ultraverse NFT World",
      year: "2024",
      img: work4,
      title: "NFT Marketplace for the next generation.",
      detail:
        "Ultraverse is a decentralized NFT marketplace that allows creators to mint, sell, and buy NFTs. The platform is built on the Ethereum blockchain and uses IPFS for storage.",
      imageUrl: "https://cam-marketplaceinternship.vercel.app",
    },
    {
      client: "Spotify",
      year: "2024",
      img: work5,
      title: "Listen to your favorite music on the go.",
      detail:
        "A Spotify clone built using React and Tailwind CSS. The app allows users to create playlists and listen to music. It also features a dark mode and responsive design.",
      imageUrl: "https://spotify-clone-psi-mocha.vercel.app",
    },
    {
      client: "Iphone 15 ",
      year: "2024",
      img: work6,
      title: "The future of smartphones.",
      detail:
        "A landing page for the iPhone 15 Pro concept. The page is built using React, Tailwind CSS, and GSAP. It features a responsive design, 3D animations and smooth scrolling",
      imageUrl: "https://cam-iphone.com",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
