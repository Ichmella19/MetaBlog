import React from "react";

const Home = ({ theme }) => {
  return (
    <main
      className={`w-full h-full mt-[40px] min-h-screen overflow-hidden px-4 md:px-[30px] lg:px-[100px] ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
     
   
    </main>
  );
};

export default Home;
