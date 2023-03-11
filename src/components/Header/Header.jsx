import React, { useEffect, useRef, useState } from "react";
import css from './Header.module.scss'
import { BiPhoneCall, BiMenuAltRight} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(null);

  // to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div
        className={`flexCenter innerWidth ${css.container}`}>
        <a href="#">
        <div className={css.name}>
        <BsFillPersonFill size={"26px"} className={css.nameIcon} />
          Roshan
        </div>
        </a>


        <ul
        ref={menuRef}
         className={`flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
           >
          <li><a href="#experties">Experties</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
          <a href="#footer">
              <BiPhoneCall size={"40px"} />
              </a>
          
          </li>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />

        </div>

      </div>
    </motion.div>
  )
}

export default Header