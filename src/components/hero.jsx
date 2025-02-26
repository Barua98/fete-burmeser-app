


const Hero = () => {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center w-full" 
        style={{ backgroundImage: "url('/assets/hero.png')" }}>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg w-full md:w-3/4 lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold">DEN FETE BURMESER</h1>
          <p className="text-lg mt-4">DET BESTE BURMESISKE SPISESTEDET I OSLO</p>
        </div>
      </section>
      );
    };
    
    export default Hero;