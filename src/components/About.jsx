function About() {
  return (
    <section className="flex py-10 scroll-mt-20" id="about-section">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto xl:px-6 text-center">
        <img src="/images/logo/Logo.svg" alt="logo" className="w-48 lg:64" />
        <div>
          <h2 className="text-2xl lg:text-3xl text-inter font-bold text-gray-800 mb-6">
            About Note-it
          </h2>
          <p className="text-2xl lg:text-3xl text-inter text-bold text-primary px-12 lg:px-26 mb-8">
            Note-it is a Powerful Tool for Organizing Tasks, Managing Documents,
            and Capturing Your thougths, All in One Place.
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-primary text-white text-inter font-semibold py-3 px-6 text-xl rounded-md hover:bg-[#32312F]"
            >
              Get Started with Note-it
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
