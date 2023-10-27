import PageIntro from "../components/home/PageIntro";
import NavBar from "../components/header/NavBar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const email = location.state && location.state.info;
  let nameUser = "";

  if (email) {
    nameUser = email.slice(0, email.indexOf("@"));
    nameUser = nameUser.charAt().toUpperCase() + nameUser.slice(1);
  }
  return (
    <>
      <NavBar />
        <div className=" relative h-[100vh]">
          <PageIntro />
          {/* Notification when Login successfully */}
          {location.state && nameUser ? (
            <h1 className="absolute top-0 left-[50%] -translate-x-1/2 ring-0 py-4 font-bold text-gray-900 dark:text-white lg:text-xl text-center select-none">
            Hello
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 ml-2 ">
              {nameUser}
            </span>{" "}
            and welcome to GratisReads
          </h1>
          ) : null}
        </div>
    </>
  );
};

export default Home;
