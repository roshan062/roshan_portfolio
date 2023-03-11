import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./Testimonials.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren } from "../../utils/motion";
const Testimonials = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

    {/* for navbar reference */}
          <a className="anchor" id="testimonials"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


         <div className={`flexCenter ${css.heading}`}>
         <span className="primaryText">My Projects Testimonials</span>
           <p style={{ marginTop: "2rem" }} className={css.review}>
           I had showed my projects to different individuals and recorded their reviews.
           </p>
           <p>
           Now, Showcasing their views here.
        </p>
         </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default Testimonials;
