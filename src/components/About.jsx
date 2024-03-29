import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc/index.js";

const ServiceCard = ({index, title, icon}) => {
    return(
        <Tilt className="xs:w-[250px] w-full ">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-capy backdrop-blur-sm backdrop-filter"
            >
                <div options={{
                    max : 45,
                    scale : 1,
                    speed : 450
                }}
                     className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-purple text-[20px] font-font tracking-widest text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="text-right">
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>
            <motion.p variants={fadeIn("","",0.1, 1)}
                          className="mt-4 text-secondary text-[17px] sm:max-w-full sm:pl-[300px] leading-[30px] tracking-widest text-right font-font"
            >
                Hey there! I'm a second-grade student at KASV with a passion for creating webpages through design,
                styling, and UI/UX. I'm currently learning React, Angular
                and Figma to become a skilled frontend developer and designer.
                Also my dream is to design captivating games in the future.
                Excited to make a mark in the digital world! 🚀
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-center ">
                {services.map((service, index) => (
                    <ServiceCard key = {service.title} index = {index} {...service}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper (About, "about")