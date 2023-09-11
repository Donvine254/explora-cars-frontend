"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title xsm:text-4xl">
          Find, book and rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <button className="bg-primary-blue text-white rounded-full mt-10 hero-btn-primary">
          <a href="/cars">Explore Cars</a>
        </button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="https://github.com/adrianhajdin/project_next13_car_showcase/blob/main/public/hero.png?raw=true"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
