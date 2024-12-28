function HomeFooter() {
  return (
    <footer className="mx-[6%] lg:mx-[13%] text-primary border-t border-[#D1D0D0] pb-24 ">
      <div className="container mx-auto px-2 lg:px-32 flex flex-col lg:flex-row justify-between pt-10 gap-6">
        {/* Logo dan Copyright */}
        <div className="flex flex-col ">
          <img
            src="/images/Note-it.svg"
            alt="Note-it Logo"
            className="w-[150px] h-auto"
          />
          <p className="p-2 text-md font-regular text-primary text-inter">
            &copy; 2024 Note-it. All rights reserved.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex w-full pl-2 justify-between lg:justify-evenly">
          <div className="flex flex-col gap-2 text-md">
            <h3 className="font-bold text-lg">Navigation</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#hero-section" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-section" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#benefit-section" className="hover:text-gray-400">
                  Benefit
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col gap-2 pr-2 text-md text-inter">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#" className="hover:text-gray-400 ">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/login"
            className="text-inter text-right font-bold hover:text-[#5a5953]"
          >
            Try it now →
          </a>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
