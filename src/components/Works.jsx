import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { figma } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                    }}
                className="backdrop-blur-sm backdrop-filter shadow-capy p-5 rounded-2xl sm:w-[360px] w-full font-font"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link,"_blank")}
                            className="flex justify-end"
                        >
                            <img
                                src={figma}
                                alt="figma"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={tag.name} className={`text-[17px] text-purple`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

function Works() {
    return (
       <>
           <motion.div variants={textVariant()}>
               <p className={`${styles.sectionSubText} text-center`}>
                   My recent works
               </p>
               <h2 className={`${styles.sectionHeadText} text-center`}>
                   Projects.
               </h2>
           </motion.div>

           <div className="text-center">
               <motion.p
                   variants={fadeIn("", "", 0.1, 1)}
                   className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl mx-auto"
               >
                   The projects below demonstrate my skills and experience through examples of my work.
                   Each project is briefly described with links to the Figma files.
                   They showcase my ability to design and work effectively in this design platform.
               </motion.p>
           </div>

           <div className="mt-20 flex flex-wrap gap-7">
               {projects.map((project, index) => (
                   <ProjectCard
                          key={`project-${index}`}
                          index={index}
                          {...project}
                   />
                ))}
           </div>
       </>
    )
}

export default SectionWrapper (Works, "works");
