"use client";

import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import ProfileCard from "../components/profileCard";
import SkillsSection from "../components/skills";

export default function About() {
  return (
    <div className="p-6">
      <Navbar />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[400px,1fr] gap-0">
        <ProfileCard />
        {/* next to profileCard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-12 flex flex-col gap-6">
            <div className="flex gap-4">
              <h1 className="text-5xl font-semibold">ABOUT</h1>
              <h1 className="text-5xl font-medium text-gray-600">ME</h1>
            </div>
            <div className=" flex flex-wrap w-full text-white  gap-5">
              {[
                "Full Stack Web Dev",
                "Karachi, Pakistan",
                "Student Of A-Levels",
                "Student Of GIAIC",
                "Open For Small Projects",
              ].map((item) => (
                <p className="flex justify-center items-center rounded-full font-semibold py-3 bg-gray-500 px-3">
                  {item}
                </p>
              ))}
              {/* <p className=" flex justify-center items-center rounded-full bg-gray-500 w-40">
                Full-Stack Web dev{" "}
              </p>
              <p className="flex justify-center items-center rounded-full bg-gray-500 w-40"><i></i>Karachi, Pakistan</p>
              <p className="flex justify-center items-center rounded-full bg-gray-500 w-40">Student</p> */}
            </div>
          </div>
          <div className="flex font-semibold gap-4">
            <h2 className="text-4xl text-gray-400">TECH</h2>
            <h2 className="text-4xl">STACK</h2>
          </div>
          <SkillsSection />
        </motion.div>
      </div>
    </div>
  );
}
