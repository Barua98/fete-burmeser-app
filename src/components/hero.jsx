
import logo from "../assets/Fete-Burmeser-logo.png";


const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-[#F5E9E2] bg-cover bg-center w-full ">
        <div className=" bg-[#F5E9E2] p-6 w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl text-[#B05C40] md:text-6xl font-bold " style={{ fontFamily: '"Rubik Dirt", cursive' }}>DEN FETE BURMESER</h1>
          <p className="text-lg text-gray-700 mt-4">THE BEST BURMESE IN OSLO</p>
        </div>
      </section>
      );
    };
    
    export default Hero;