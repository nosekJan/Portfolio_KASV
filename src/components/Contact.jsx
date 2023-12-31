import {useState, useRef} from "react";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser'
import {styles} from "../styles.js";
import {PlanetCanvas} from "./canvas/index.js";
import {SectionWrapper} from "../hoc/index.js";
import {slideIn} from "../utils/motion.js";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_go6un6b',
                'template_sj7tujr',
                {
                    from_name: form.name,
                    to_name: 'Jan Nosek',
                    form_email: form.email,
                    to_email: 'janosek1628@gmail.com',
                    message: form.message,
                },
                'g-qMp0eyZrxFpgsOv'
            )
            .then(() => {
                setLoading(false);
                alert('Thank you. I will get back to you ASAP.');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                alert('Something went wrong.');
            });
    };

    const [loading, setLoading] = useState(false);

    return (
        <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden font-font">
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                className="flex-[0.75] backdrop-blur-sm backdrop-filter p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch with me</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-purple font-bold mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-[#28282B] py-4 px-6 placeholder:text-secondary
                                       text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-purple font-bold mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-[#28282B] py-4 px-6 placeholder:text-secondary
                                       text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-purple font-bold mb-4">Your Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-[#28282B]  py-4 px-6 placeholder:text-secondary
                                       text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-black py-3 px-8 outline-none w-fit text-purple
                                   font-bold shadow-lg shadow-purple rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <PlanetCanvas/>
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, "contact");