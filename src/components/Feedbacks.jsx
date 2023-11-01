import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {testimonials} from "../constants/index.js";

const FeedbackCard = ({index, testimonial, name, role, school, image, avatar}) => (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}
                className="shadow-capy backdrop-blur-sm backdrop-filter p-10 rounded-3xl xs:w-[320px] w-full font-font"
        >
        <img
            src={avatar}
            alt={`feedback-by-${avatar}`}
            className="w-10 h-10 m-5"
        />
        <div className="mt-1">
            <p className="text-white tracking-widest text-[18px]">{testimonial}</p>
            <div className="mt-7 flex justify-between items-center gap-10">
                <div className=" flex flex-1 flex-col">
                    <p className="text-white font-medium text-[16px]">
                        <span className="text-purple">@</span> {name}
                    </p>
                    <p className="mt-1 text-secondary text-[12px]">
                        {role} of {school}
                    </p>
                </div>
                <img
                    src={image}
                    alt={`feedback-by-${name}`}
                    className="w-20 h-20 rounded-full object-cover"
                />
            </div>
        </div>
    </motion.div>
)

const Feedbacks = () => {
    return (
        <div className="mt-12">
            <div className={`${styles.padding}bg-tertiary rounded-2xl min-h-[300px] text-right`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper (Feedbacks, "");