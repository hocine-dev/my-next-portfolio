import React from "react";
import { motion} from "framer-motion";

const LiIcon = () => {


  return (<figure className="absolute -left-[5.3rem] stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
         
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
