import LageMat from "../assets/lage-mat.jpg";

const About = () => {
    return (
        <section className="py-12 px-4 flex flex-col md:flex-row items-center gap-8 w-full">
            <img src={LageMat} alt="Restaurant" className="w-full md:w-1/2 rounded-lg shadow-lg"/>
            <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">OM OSS</h2>
            <p className="text-gray-600 mt-4">
            Det burmesiske kjøkkenet kan best ​beskrives som en herlig miks av velkjente asiatiske kjøkken som thai, ​kinesisk og indisk. Vi serverer hjemmelaget burmesisk mat​, basert på mammas oppskrifter.​
            </p>
            </div>
        </section>
        );
    };
    
    export default About;