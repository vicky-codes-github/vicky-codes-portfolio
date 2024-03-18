import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#68d8e0]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a dynamic Full Stack Developer, I bring years of
            experience in crafting visually stunning and user-friendly websites
            and applications. Proficient in HTML, CSS, JavaScript, and a range
            of Full-Stack technologies and frameworks, I excel in delivering
            top-quality projects on time and within budget. My expertise extends
            to back-end technologies such as Core PHP including frameworks like
            Laravel, CodeIgniter and Symfony, enabling me to provide end-to-end
            solutions. With a detail-oriented and solutions-driven approach, I
            continuously seek opportunities to enhance my skills and contribute
            value to every project. My skill set includes HTML, CSS, Bootstrap,
            JavaScript, PHP, Laravel, CodeIgniter, Symfony, React, MVC
            architecture, and OSSN (Open Source Social Network). I am dedicated
            to elevating your projects to the next level.{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
