import "./App.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        className="text-3xl focus:outline-none md:hidden"
        onClick={toggleMenu}
      >
        <Hamburger />
      </button>
      <nav
        className={`${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none cursor-default"
        }transition-all duration-300 ease-in-out absolute top-20 left-1/2 transform -translate-x-1/2 w-full shadow-xl bg-brown-100 p-20 rounded-lg md:flex md:static md:bg-transparent md:w-auto`}
      >
        <div className="flex flex-col items-center gap-5">
          <button className="whitespace-nowrap transition hover:scale-105 hover:shadow-xl bg-white border-[0.01rem] rounded-full  border-black px-40 py-2 sm:px-6 font-semibold mb-2">
            Log in
          </button>
          <button className="whitespace-nowrap transition hover:scale-105 hover:shadow-xl bg-black border-[0.01rem] rounded-full px-40 py-2 sm:px-6 font-semibold text-white">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="border-b-[0.1rem] flex items-center justify-between p-2 px-4 py-4">
      <img className=" size-14 " src="/logo.svg" alt="OleangLogo" />
      <div className="flex space-x-4 pr-4 sm:pr-20 ">
        <button className="transition hover:scale-105 hover:shadow-xl bg-white border-[0.01rem] rounded-full border-black px-4 sm:px-6 font-semibold hidden sm:block">
          Log in
        </button>
        <button className="transition hover:scale-105 hover:shadow-xl bg-black border-[0.01rem] rounded-full px-4 sm:px-6 font-semibold text-white hidden sm:block">
          Sign up
        </button>
        <div className=" block sm:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <main className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 sm:mt-44 px-4">
      <div className="w-full sm:w-[25rem] h-auto flex flex-col items-center sm:items-end p-5 rounded-lg">
        <h1 className="text-[2rem] sm:text-[3.0rem] font-bold">Stay</h1>
        <h1 className="text-[2rem] sm:text-[3.0rem] font-bold">Informed,</h1>
        <h1 className="text-[2rem] sm:text-[3.0rem] font-bold">
          Stay Inspired
        </h1>
        <p className="text-center sm:text-right text-[1rem] mt-4">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
      <div className="w-full sm:w-[30rem] h-[20rem] sm:h-[40rem] overflow-hidden rounded-lg shadow-2xl">
        <img
          className="w-full h-full object-cover"
          src="https://img5.pic.in.th/file/secure-sv1/oleang-img1.jpg"
          alt="Oleang"
        />
      </div>
      <div className="w-full sm:w-[20rem] h-auto flex flex-col p-4 rounded-lg">
        <a className="text-xl">-Author</a>
        <h2 className="text-3xl font-semibold">Wannachok T.</h2>
        <p className="mt-4">
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness.
        </p>
        <p className="mt-4">
          When I’m not writing, I spend time volunteering at my local animal
          shelter, helping cats find loving homes.
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
