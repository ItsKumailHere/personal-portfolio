"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SiFramer, SiWordpress, SiReact } from "react-icons/si";
import Navbar from "./components/navbar";
import ProfileCard from "./components/profileCard";
import Link from "next/link";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <Navbar />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[400px,1fr] gap-0">
        <ProfileCard />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-2">SOFTWARE</h1>
            <h2 className="text-6xl font-bold text-gray-600 mb-6">ENGINEER</h2>
            <p className="text-gray-400 max-w-2xl">
              A 16 y/o creating intuitive and engaging user experiences. I
              Specialize in transforming ideas into beautifully crafted digital
              products.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { number: "+1", text: "YEARS OF EXPERIENCE" },
              { number: "+15", text: "PROJECTS COMPLETED" },
              { number: "+7", text: "WORLDWIDE CLIENTS" },
            ].map((stat) => (
              <motion.div
                key={stat.text}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-sm text-gray-400">{stat.text}</p>
              </motion.div>
            ))}
          </div>

          <div className=" font-semibold mb-10 text-5xl">
            <h3 className="text-gray-600">RECENT</h3>
            <h3>PROJECTS</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href={"https://ecommerce-site-five-rho.vercel.app/"}>
              <motion.div
                className="bg-[#FF5733] rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
                onHoverStart={() => setHoveredCard("animation")}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <SiFramer className="text-3xl mb-4" />
                  <h3 className="text-2xl font-bold mb-1">ECOMMERCE</h3>
                  <h3 className="text-2xl font-bold">SITE</h3>
                </div>
                <motion.div
                  className="absolute right-6 bottom-6"
                  animate={{
                    x: hoveredCard === "animation" ? 10 : 0,
                  }}
                >
                  →
                </motion.div>
              </motion.div>
            </Link>

            <Link href={"https://simple-dashboard-ui-one.vercel.app/"}>
              <motion.div
                className="bg-[#CCFF00] text-black rounded-2xl p-6 cursor-pointer relative overflow-hidden group"
                onHoverStart={() => setHoveredCard("tools")}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <div className="flex space-x-2 mb-4">
                    <SiWordpress className="text-3xl" />
                    <SiReact className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    DASHBOARD INTERFACE
                  </h3>
                </div>
                <motion.div
                  className="absolute right-6 bottom-6"
                  animate={{
                    x: hoveredCard === "tools" ? 10 : 0,
                  }}
                >
                  →
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
