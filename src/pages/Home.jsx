import HomeHeader from "../components/HomeHeader";
import Hero from "../components/Hero";
import About from "../components/About";
import Benefit from "../components/Benefit";
import HomeFooter from "../components/HomeFooter";
import Quote from "../components/Quote";

function Home() {
  return (
    <>
      <HomeHeader />
      <main className="px-[6%] lg:px-[13%]">
        <Hero />
        <About />
        <Benefit />
        <Quote />
        <HomeFooter />
      </main>
    </>
  );
}

export default Home;
