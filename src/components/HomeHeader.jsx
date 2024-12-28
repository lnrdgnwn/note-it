import { useState } from "react";
import { Link } from "react-router-dom";

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky z-50 border-b-[1px] bg-white border-b-black flex items-center top-0 left-0 right-0 p-5 w-full">
        <div className="flex items-center w-full justify-between">
          {/* Logo */}
          <img
            src="/images/Note-it.svg"
            alt="Note-it logo"
            className="w-[176px] h-full"
          />

          {/* Hamburger Button */}
          <button
            className="text-2xl font-bold lg:hidden p-2"
            onClick={toggleMenu}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center w-full justify-between">
            <ul className="flex items-center font-inter text-primary gap-2 pl-6 text-xl">
              <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
                <a href="#hero-section">Home</a>
              </li>
              <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
                <a href="#about-section">About</a>
              </li>
              <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
                <a href="#benefit-section">Benefit</a>
              </li>
            </ul>
            <div className="flex gap-4 items-center">
              <Link
                to="/login"
                className="border border-[#D1D0D0] hover:bg-[#F2F2F2] font-normal py-2 px-4 rounded text-xl text-center"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-primary hover:bg-[#32312F] text-white font-normal text-xl py-2 px-4 rounded text-center"
              >
                Start for free
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b border-[#D1D0D0]">
            <img
              src="/images/Note-it.svg"
              alt="Note-it logo"
              className="w-[176px] h-full"
            />
            <button className="text-2xl font-bold" onClick={toggleMenu}>
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pb-5">
            <ul className="text-lg font-semibold">
              <li>
                <Link
                  to="/home"
                  className="block border-b text-inter text-bold border-[#D1D0D0] hover:bg-[#F2F2F2] p-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block border-b text-inter text-bold border-[#D1D0D0] hover:bg-[#F2F2F2] p-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/benefit"
                  className="block border-b text-inter text-bold border-[#D1D0D0] hover:bg-[#F2F2F2] p-4"
                >
                  Benefit
                </Link>
              </li>
            </ul>
          </div>

          <footer className="p-5 border-t border-[#D1D0D0]">
            <div className="flex flex-col gap-3 justify-between">
              <button className="bg-black hover:bg-[#32312F] text-white py-2 px-4 rounded">
                Try Note-it Free
              </button>
              <button className="border border-[#D1D0D0] hover:bg-[#F2F2F2] py-2 px-4 rounded">
                Log in
              </button>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default HomeHeader;
