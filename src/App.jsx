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
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }transition-all duration-300 ease-in-out absolute top-20 left-1/2 transform -translate-x-1/2 w-full shadow-xl bg-brown-100 p-20 rounded-lg md:flex md:static md:bg-transparent md:w-auto`}
      >
        <div className="flex flex-col items-center gap-5">
          <button className="transition hover:scale-105 hover:shadow-xl bg-white border-[0.01rem] rounded-full border-black px-40 py-2 sm:px-6 font-semibold mb-2">
            Log in
          </button>
          <button className="transition hover:scale-105 hover:shadow-xl bg-black border-[0.01rem] rounded-full px-40 py-2 sm:px-6 font-semibold text-white">
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
      <div className="pl-4 sm:pl-32">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.97279 15.657C11.2048 15.657 12.2999 15.921 13.2581 16.449C14.2359 16.977 14.9986 17.7592 15.5461 18.7956C16.1132 19.8321 16.3968 21.0836 16.3968 22.5503V32.0836H13.0821V23.049C13.0821 21.6018 12.7204 20.497 11.9968 19.7343C11.2732 18.9521 10.2857 18.561 9.03413 18.561C7.78257 18.561 6.78524 18.9521 6.04213 19.7343C5.31857 20.497 4.95679 21.6018 4.95679 23.049V32.0836H1.61279V10.377H4.95679V17.7983C5.5239 17.1138 6.23768 16.5858 7.09813 16.2143C7.97813 15.8427 8.93635 15.657 9.97279 15.657Z"
            fill="#43403B"
          />
          <path
            d="M29.0223 15.657C30.2543 15.657 31.3494 15.921 32.3076 16.449C33.2854 16.977 34.0481 17.7592 34.5956 18.7956C35.1627 19.8321 35.4463 21.0836 35.4463 22.5503V32.0836H32.1316V23.049C32.1316 21.6018 31.7698 20.497 31.0463 19.7343C30.3227 18.9521 29.3352 18.561 28.0836 18.561C26.8321 18.561 25.8347 18.9521 25.0916 19.7343C24.3681 20.497 24.0063 21.6018 24.0063 23.049V32.0836H20.6623V10.377H24.0063V17.7983C24.5734 17.1138 25.2872 16.5858 26.1476 16.2143C27.0276 15.8427 27.9858 15.657 29.0223 15.657Z"
            fill="#43403B"
          />
          <path
            d="M41.0611 32.289C40.4549 32.289 39.9464 32.0836 39.5358 31.673C39.1251 31.2623 38.9198 30.7538 38.9198 30.1476C38.9198 29.5414 39.1251 29.033 39.5358 28.6223C39.9464 28.2116 40.4549 28.0063 41.0611 28.0063C41.6478 28.0063 42.1464 28.2116 42.5571 28.6223C42.9678 29.033 43.1731 29.5414 43.1731 30.1476C43.1731 30.7538 42.9678 31.2623 42.5571 31.673C42.1464 32.0836 41.6478 32.289 41.0611 32.289Z"
            fill="#12B379"
          />
        </svg>
      </div>
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
