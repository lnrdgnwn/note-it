import HeroCard from "./HeroCard";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      {/* Hero Section */}
      <div className="flex flex-col xl:flex-row items-center justify-center w-full pt-4 lg:pt-20">
        <div className="flex flex-wrap flex-col sm:flex-row w-full sm:w-1/2 gap-2 lg:gap-7">
          <h1 className="font-primary text-5xl font-bold sm:text-6xl">
            Notes That Keep Up With You
          </h1>
          <h2 className="font-primary text-2xl pt-2 sm:text-3xl text-jus">
            Write and Organize your thoughts, anytime, anywhere.
          </h2>
          <button className="bg-primary hover:bg-[#32312F] text-white font-normal text-xl py-3 px-5 rounded-lg w-full xl:w-max mt-4 sm:mt-6">
            Try it now!
          </button>
        </div>
        <img
          src="/images/hero/Hero-Image.svg"
          alt="Hero-Image"
          className="w-full h-full pt-10 xl:pt-0 lg:ml-3 sm:w-1/2 lg:w-1/3 xl:w-1/2 "
        />
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-10 pt-10 w-full ">
        <HeroCard image="images/hero/Hero-Image.svg" text={"Task List"} />
        <HeroCard image="images/hero/Hero-Image.svg" text={"Docs"} />
        <HeroCard image="images/hero/Hero-Image.svg" text={"Thoughts"} />
      </div>
    </section>
  );
}

export default Hero;
