"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import Head from "next/head";

const Encryption = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.1 } }
  };
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Experience
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Education
        </motion.div>
      </div>
      <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-10 w-full z-[20]"
    >
         <motion.div
      className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 py-2 text-white text-xl">
        <Head>
          <title>My Awesome Journey</title>
        </Head>

        <h1 className="text-3xl font-bold mb-5">My Awesome Journey</h1>

          <h2 className="text-xl font-bold mb-2">Experience</h2>
          
          <div className="flex items-center">
  <div className="border-l h-16 border-gray-400 mr-4"></div>
  <div className="items-center mb-4">
    <h3 className="mr-4">Coding Blocks Pvt Ltd</h3>
    <p>Product Engineer</p>
    <p>(August 2023 - Present)</p>
  </div>
</div>
<div className="flex items-center">
  <div className="border-l h-16 border-gray-400 mr-4"></div>
  <div className="items-center">
    <h3 className="mr-4">Siva Inotech</h3>
    <p>Software Engineer Intern</p>
    <p className="mb-6">(May 2022 - August 2022)</p>
  </div>
</div>
        

        <div>
          <h2 className="text-xl font-bold mb-2">Education</h2>
  <div className="flex items-center">

  <div className="border-l h-16 border-gray-400 mr-4"></div>
  
  <div>
    <p>Jaypee Institute of Information Technology </p>
    <p>Bachelor of Technology </p>
    <p>(2019 - 2023)</p>
  </div>
</div>

        </div>
      </div>
    </motion.div>
     

      <motion.div
        
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
    
    </div>
  );
};

export default Encryption;
