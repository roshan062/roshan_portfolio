import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { BiPhoneCall } from 'react-icons/bi'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {

 const user={
    name: 'Roshan',
    githubHandle:'https://github.com/roshan062',
    linkedinHandle: 'https://www.linkedin.com/in/roshanprasad062/',
    instagramHandle: 'https://www.instagram.com/itsme.roshann/?igshid=ZDdkNTZiNTM%3D',
    
}

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`} >
      
      {/* for navbar reference */}
      <a className="anchor" id="footer"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:yroshan062@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>C-34 Vikas Puri, New Delhi-110059, India</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a href={user.linkedinHandle} target="_blank">
              <BsLinkedin className={css.footerIcons} />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={user.githubHandle} target="_blank">
              <BsGithub className={css.footerIcons} />
              GitHub
              </a>
            </li>
            <li>
              <a href={user.instagramHandle} target="_blank">
              <BsInstagram className={css.footerIcons} />
                Instagram
              </a>
            </li>
            <li>
              <BiPhoneCall size={"21px"} className={css.footerIcons} />
              +91 82**61**24
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
