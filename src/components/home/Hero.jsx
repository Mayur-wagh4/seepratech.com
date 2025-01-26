import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
const Hero = () => {
  return (
    <div className="relative  py-20 md:py-32  bg-black text-white">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating SVGs */}
        <img
          src="/clouds.svg"
          alt="Floating Cloud"
          className="absolute  top-32 left-10 w-24 md:w-32 opacity-60 floating"
        />
        <img
          src="/solution.svg"
          alt="Floating Solution"
          className="absolute bottom-20 right-20 w-28 md:w-36 opacity-60 floating-slow"
        />
        <img
          src="/teamup.svg"
          alt="Floating Collaboration"
          className="absolute top-32 right-10 w-20 md:w-28 opacity-60 floating"
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl mt-4 md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text text-white">
            Unlock Limitless Potential with Technology
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            At <span className="text-orange-500 font-semibold">Seepratech</span>
            , we redefine innovation with
            <span className="text-blue-400 font-semibold">
              {" "}
              Cloud Solutions
            </span>
            ,
            <span className="text-green-400 font-semibold">
              {" "}
              AI Technologies
            </span>
            , and
            <span className="text-purple-400 font-semibold">
              {" "}
              Custom Development
            </span>
            . Empower your business with solutions built for the future.
          </p>

          {/* Highlights /}
<div className="space-y-6">
  {/ Cloud Infrastructure */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-400 text-3xl font-bold">
              <i className="fas fa-cloud"></i>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Cloud Infrastructure
              </h3>
              <p className="text-gray-300">
                Scalable and secure solutions tailored to your business needs.
              </p>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-400 text-3xl font-bold">
              <i className="fas fa-robot"></i>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                AI & Automation
              </h3>
              <p className="text-gray-300">
                Optimize processes with intelligent automation tools.
              </p>
            </div>
          </div>

          {/* Custom Applications */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-400 text-3xl font-bold">
              <i className="fas fa-cogs"></i>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Custom Applications
              </h3>
              <p className="text-gray-300">
                Tailored solutions designed to meet your unique requirements.
              </p>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-400 text-3xl font-bold">
              <i className="fas fa-chart-line"></i>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Data Analytics
              </h3>
              <p className="text-gray-300">
                Transform data into actionable insights for informed
                decision-making.
              </p>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="flex items-start space-x-4">
            <span className="text-orange-400 text-3xl font-bold">
              <i className="fas fa-shield-alt"></i>
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Cybersecurity
              </h3>
              <p className="text-gray-300">
                Protect your digital assets with robust security measures.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content with Static SVGs */}
        <div className="flex justify-center items-center relative">
          <div className="w-60 h-60 md:w-80 md:h-80 relative">
            <img
              src="/clouds.svg"
              alt="Cloud Services"
              className="absolute w-32 md:w-40 top-0 left-0"
            />
            <img
              src="/solution.svg"
              alt="Solutions"
              className="absolute w-28 md:w-36 bottom-0 left-8"
            />
            <img
              src="/teamup.svg"
              alt="Team Collaboration"
              className="absolute w-32 md:w-40 bottom-0 right-0"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <Link to="/contact">
            <Button
              variant="outline"
              className="text-white  border-orange-600"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
