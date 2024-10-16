import "./App.css";

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
        <button className="bg-white border-[0.01rem] rounded-full border-black px-4 sm:px-6 font-semibold hidden sm:block">
          Log in
        </button>
        <button className="bg-black border-[0.01rem] rounded-full px-4 sm:px-6 font-semibold text-white hidden sm:block">
          Sign up
        </button>
        <button className="blockhidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75ZM3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12ZM3 17.25C3 17.0511 3.07902 16.8603 3.21967 16.7197C3.36032 16.579 3.55109 16.5 3.75 16.5H20.25C20.4489 16.5 20.6397 16.579 20.7803 16.7197C20.921 16.8603 21 17.0511 21 17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18H3.75C3.55109 18 3.36032 17.921 3.21967 17.7803C3.07902 17.6397 3 17.4489 3 17.25Z"
              fill="#75716B"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 sm:mt-44 px-4">
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
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt="รูปคนหมวกสีน้ำตาล"
        />
      </div>
      <div className="w-full sm:w-[20rem] h-auto flex flex-col p-4 rounded-lg">
        <a className="text-xl">-Author</a>
        <h2 className="text-3xl font-semibold">Thompson P.</h2>
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
    </section>
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
