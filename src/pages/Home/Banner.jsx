import { easeIn } from "motion";
import { motion } from "motion/react";
import team1 from "../../../public/team/team01.jpg";
import team2 from "../../../public/team/team02.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{y:[50, 100, 50]}}
            transition={{duration:10, repeat:Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{x:[100, 150, 100]}}
            transition={{duration:10, repeat:Infinity}}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 100 }}
            transition={{
              duration: 3,
              delay: 1,
              ease: easeIn,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{
                color: [
                  "#2ea7d1",
                  "#2368dc",
                  "#7e1ae5",
                  "#be1be4",
                  "#c94436",
                  "#d39c2c",
                ],
              }}
              transition={{ repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
