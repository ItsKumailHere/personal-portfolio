import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "@/public/my-nice-image.jpeg";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function ProfileCard() {
  return (
    <div className="w-80">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-6 sticky top-0 overflow-hidden"
      >
        <div className="sticky top-0 w-full h-64 mb-4 bg-[#FF5733] rounded-2xl overflow-hidden">
          <Image src={img} alt="Kumail Ali" layout="fill" />
        </div>
        <h2 className="text-black text-3xl font-bold mb-2">KUMAIL ALI</h2>
        <div className="w-12 h-12 bg-[#FF5733] rounded-full mb-4"></div>
        <p className="text-gray-600 mb-6">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="flex justify-center space-x-4">
          {[
            { icon: <FaXTwitter />, color: "hover:text-blue-400" },
            { icon: <AiFillInstagram />, color: "hover:text-pink-500" },
            { icon: <MdEmail />, color: "hover:text-red-500" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className={`text-gray-600 ${item.color}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{item.icon}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
