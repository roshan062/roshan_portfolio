import React from "react";
import { motion } from "framer-motion";
import css from "./Projects.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Projects = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`} >
     
    {/* for navbar reference */}
    <a className="anchor" id="projects"></a>

      <div className={`innerWidth flexCenter ${css.container}`}  >
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Projects</span>
            <p style={{marginTop: "10px"}}>Keep Learning Keep Growing</p>
          </div>
          <span className="secondaryText">Projects are live</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://ai-image-generation-roshan.pages.dev/">
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./ai.png" alt="ai_image_generation" />
          </a>

          <a href="https://naminghub.pages.dev/">
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./naminghub.png" alt="naming_hub" />
          </a>
          
          <a href="https://keeper-webapp.pages.dev/">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./keeper.png" alt="keeper_app" />
          </a>

          <a href="https://roshan062.github.io/Net-Banking/">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./moneytracker.png" alt="money_tracker" />
          </a>

          <a href="https://roshan062.github.io/guessnumber/">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./guessnumber.png" alt="guess_my_number" />
          </a>

          <a href="https://roshan062.github.io/snakegame/">
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./snakegame.png" alt="snake_mania" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
