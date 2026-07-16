import { motion } from "framer-motion";

export default function HeroIllustration() {

    return (

        <div className="relative w-[500px] h-[500px] flex items-center justify-center">

            {/* Main Circle */}

            <motion.div

                animate={{

                    rotate:360

                }}

                transition={{

                    repeat:Infinity,

                    duration:50,

                    ease:"linear"

                }}

                className="absolute w-80 h-80 rounded-full border-2 border-blue-300"

            />

            {/* Second Circle */}

            <motion.div

                animate={{

                    rotate:-360

                }}

                transition={{

                    repeat:Infinity,

                    duration:35,

                    ease:"linear"

                }}

                className="absolute w-64 h-64 rounded-full border border-cyan-300"

            />

            {/* Center */}

            <motion.div

                animate={{

                    scale:[1,1.08,1]

                }}

                transition={{

                    repeat:Infinity,

                    duration:3

                }}

                className="w-44 h-44 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-2xl flex items-center justify-center"

            >

                <span className="text-6xl">

                    🌍

                </span>

            </motion.div>

            {/* Floating Icons */}

            <motion.div

                animate={{

                    y:[0,-15,0]

                }}

                transition={{

                    repeat:Infinity,

                    duration:4

                }}

                className="absolute top-10 left-12 text-5xl"

            >

                ☁️

            </motion.div>

            <motion.div

                animate={{

                    y:[0,15,0]

                }}

                transition={{

                    repeat:Infinity,

                    duration:5

                }}

                className="absolute right-12 bottom-24 text-5xl"

            >

                🌦️

            </motion.div>

            <motion.div

                animate={{

                    y:[0,-10,0]

                }}

                transition={{

                    repeat:Infinity,

                    duration:6

                }}

                className="absolute bottom-10 left-24 text-5xl"

            >

                ☀️

            </motion.div>

        </div>

    );

}