import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {BlackholeCanvas} from "./canvas/index.js";


const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto ">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto justify-between flex flex-row items-start gap-5`}>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white sm:tracking-widest`}>Hello,<br/> my name is <br/>
                        <span className="text-purple"> Jan Nosek</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white tracking-widest`}>
                        I'm a student at KASV and <br className="sm:block hidden"/> this is my first 3D portfolio.
                    </p>

                </div>
                <div className="mt-16 w-[300px] h-[300px]">
                    <img alt="#" src="/src/assets/portrait_purple_bg.png" id={"animated-blob"}/>
                </div>
            </div>

            <BlackholeCanvas/>


            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple flex justify-center items-start p-2">
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop'
                            }}
                            className="w-3 h-3 rounded-full bg-purple"
                        />
                    </div>
                </a>

            </div>
        </section>
    )
}

export default Hero
