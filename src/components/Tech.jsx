import {BallCanvas} from "./canvas/index.js";
import {SectionWrapper} from "../hoc/index.js";
import {technologies} from "../constants/index.js";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="mb-8">
                <p className={styles.sectionSubText}>What I worked with</p>
                <h2 className={styles.sectionHeadText}>Technologies.</h2>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Tech, "");
