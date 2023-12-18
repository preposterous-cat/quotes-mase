"use client";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "200vw" }} // Posisi awal di luar layar sebelah kiri
      animate={{ opacity: 1, x: 0 }} // Posisi akhir di posisi awal (x: 0)
      transition={{ duration: 1 }}
      className="mb-5 flex flex-col "
    >
      <div className="text-7xl font-bold">Quotes Of The Day Mase</div>
      <div className="lg:mx-auto">By. Ngappers</div>
    </motion.div>
  );
};

export default Header;
