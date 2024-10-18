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
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-10 pointer-events-none cursor-default"
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
        <h1 className="whitespace-nowrap text-[2rem] sm:text-[3.0rem] font-bold">
          Stay
        </h1>
        <h1 className="whitespace-nowrap text-[2rem] sm:text-[3.0rem] font-bold">
          Informed,
        </h1>
        <h1 className="whitespace-nowrap text-[2rem] sm:text-[3.0rem] font-bold">
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
        <h2 className="whitespace-nowrap text-3xl font-semibold">
          Wannachok T.
        </h2>
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

function LandingPage() {
  return (
    <section className="flex flex-col sm:mt-40 sm:mx-40">
      <h1 className="font-medium text-2xl mt-10 mx-5">Latest articles</h1>
      <div className=" gap-16 w-full min-w-[50rem] mt-10 rounded-xl p-6 justify-between items-center bg-brown-100 shadow-sm hidden sm:flex">
        <div className="flex items-center">
          <LandingPageNavPc />
        </div>
        <div className="relative ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="6" stroke="#75716B" />
            <path d="M20 20L17 17" stroke="#75716B" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <div>
        <LandingPageNavMobile />
      </div>
    </section>
  );
}

function LandingPageNavPc() {
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <div className="flex space-x-4 gap-3">
      <h5
        className={`p-2 rounded-md hover:bg-brown-300 hover:scale-110 ${
          selectedButton === "Highlight" ? "bg-brown-400 text-white" : ""
        }`}
        onClick={() => handleButtonClick("Highlight")}
      >
        Highlight
      </h5>
      <h5
        className={`p-2 rounded-md hover:bg-brown-300 hover:scale-110 ${
          selectedButton === "Cat" ? "bg-brown-400 text-white" : ""
        }`}
        onClick={() => handleButtonClick("Cat")}
      >
        Cat
      </h5>
      <h5
        className={`p-2 rounded-md hover:bg-brown-300 hover:scale-110 ${
          selectedButton === "Inspiration" ? "bg-brown-400 text-white" : ""
        }`}
        onClick={() => handleButtonClick("Inspiration")}
      >
        Inspiration
      </h5>
      <h5
        className={`p-2 rounded-md hover:bg-brown-300 hover:scale-110 ${
          selectedButton === "General" ? "bg-brown-400 text-white" : ""
        }`}
        onClick={() => handleButtonClick("General")}
      >
        General
      </h5>
    </div>
  );
}

function LandingPageNavMobile() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Highlight");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-brown-300 w-screen flex justify-end items-center p-4 mt-5 md:hidden">
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="pl-5 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-400 w-full"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="6" stroke="#75716B" />
            <path d="M20 20L17 17" stroke="#75716B" strokeLinecap="round" />
          </svg>
        </div>
        <div className="relative mt-4 w-full max-w-md">
        <div className="flex flex-row justify-start items-center w-full">
          <h5 className="text-left mb-0">Category</h5>
        </div>
          <button
            onClick={toggleDropdown}
            className="w-full max-w-md py-2 border rounded-md bg-brown-400 text-white focus:outline-none flex justify-between items-center"
          >
            <span className="ml-5">{selectedOption}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path d="M18 9L12 15L6 9" stroke="#26231E" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10">
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick("Highlight")}
              >
                Highlight
              </div>
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick("Cat")}
              >
                Cat
              </div>
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick("Inspiration")}
              >
                Inspiration
              </div>
              <div
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick("General")}
              >
                General
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <LandingPage />
    </>
  );
}

export default App;
