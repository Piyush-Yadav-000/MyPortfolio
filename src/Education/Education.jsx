import React from "react";
import Timeline from "./Timeline";

const Education = () => {
  return (
    <section className="relative w-full" id="education" >
      <div className="max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mx-auto">
        <div className="flex flex-col space-y-6 text-center mb-12">
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white font-["Bricolage Grotesque"]'>
            <span className='hover:border-b-4 border-cyan-500 pb-2 transition-all duration-100'>
              Education
            </span>
          </h2>
          <p className='text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white font-["Bricolage Grotesque"]'>
            My professional journey and achievements
          </p>
        </div>
        
        <Timeline />
      </div>
    </section>
  );
};

export default Education;
