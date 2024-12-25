function HomeHeader() {
  return (
    <header className="sticky z-50 border-b-[1px] bg-white border-b-black flex items-center top-0 left-0 right-0 p-5 w-full ">
      <div className="flex items-center w-full gap-3">
        <img
          src="/images/Note-it.svg"
          alt="Note-it logo"
          className="w-[176px] h-full"
        />
        <nav className="flex items-center w-full justify-between ">
          <ul className="flex items-center font-inter text-primary gap-2 text-xl ">
            <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="py-2 px-4 rounded hover:bg-[#F2F2F2] cursor-pointer">
              <a href="">Contact Us</a>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <button className=" hover:bg-[#F2F2F2] font-normal py-2 px-4 rounded text-xl">
              Log in
            </button>
            <button className=" bg-primary hover:bg-[#32312F] text-white font-normal text-xl py-2 px-4 rounded">
              Start for free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HomeHeader;
