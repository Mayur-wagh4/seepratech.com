import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative flex flex-col items-center">
        {/* Main Container with Rings */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
          {/* Outer Rotating Ring - Clockwise */}
          <div className="absolute inset-0 rounded-full border-2 md:border-3 lg:border-4 border-t-orange-400 border-r-orange-400 border-b-transparent border-l-transparent animate-[spin_1.5s_linear_infinite]"
            style={{
              top: '-20px',
              left: '-20px',
              right: '-20px',
              bottom: '-20px',
            }}
          />

          {/* Middle Rotating Ring - Counter-clockwise */}
          <div className="absolute inset-0 rounded-full border-2 md:border-3 lg:border-4 border-t-slate-400 border-l-slate-400 border-b-transparent border-r-transparent animate-[spin_1.5s_linear_infinite_reverse]"
            style={{
              top: '-10px',
              left: '-10px',
              right: '-10px',
              bottom: '-10px',
            }}
          />

          {/* Logo Container */}
          <div className="relative z-10 h-full w-full">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full  p-2 lg:p-6"
            />
          </div>

          {/* Inner Pulsing Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 md:border-3 lg:border-4 border-blue-400/30 animate-pulse"
            style={{
              top: '-5px',
              left: '-5px',
              right: '-5px',
              bottom: '-5px',
            }}
          />
        </div>
        <h1 className="relative z-10 mt-12 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-orange-200 to-slate-200 
                     text-base md:text-xl lg:text-3xl xl:text-4xl font-bold text-center max-w-3xl">
          Your One-Stop Tech Hub: Simplifying Every Digital Need
        </h1>

      </div>
    </div>
  );
};

export default Loader;