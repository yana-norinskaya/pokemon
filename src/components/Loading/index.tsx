import { FC } from "react";
import { motion } from "framer-motion";
import pik from "../../assets/pik.gif";

export const Loading: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[100vh] flex justify-center items-center"
    >
      <img className="w-[200px] h-[200px] rounded-xl" src={pik} alt="" />
    </motion.div>
  );
};
