import LageMat from "../assets/lage-mat.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 w-full bg-[#F5E9E2]">
            <motion.img 
                src={LageMat} 
                alt="Restaurant" 
                className="w-full md:w-1/3 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6 }}
            />

            <motion.div 
                className="text-center md:text-left md:w-1/2"
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-4xl font-bold text-[#B05C40]">OM OSS</h2>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                    Det burmesiske kjøkkenet kan best beskrives som en herlig miks av velkjente 
                    asiatiske kjøkken som thai, kinesisk og indisk. 
                    Vi serverer <span className="text-[#B05C40] font-semibold">hjemmelaget burmesisk mat</span>, 
                    basert på mammas oppskrifter.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
