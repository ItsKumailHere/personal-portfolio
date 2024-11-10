import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaFolder, FaPencilAlt } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-none">
      <div className="flex justify-center mb-12 ">
        <ul className="flex space-x-8 ">
          {[
            { icon: <FaHome />, label: "" },
            { icon: <FaFolder />, label: "about" },
            { icon: <FaPencilAlt />, label: "contact" },
          ].map((item) => (
            <motion.li
              key={item.label}
              className="text-gray-400 hover:text-white cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">
                <Link href={`/${item.label}`}>{item.icon}</Link>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
