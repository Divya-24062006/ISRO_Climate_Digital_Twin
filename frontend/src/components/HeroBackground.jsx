import { motion } from "framer-motion";

export default function HeroBackground() {

    return (

        <>

            {/* Blue Glow */}

            <motion.div

                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.25, 0.4, 0.25]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 8
                }}

                className="absolute top-24 right-20 w-[500px] h-[500px] rounded-full bg-blue-300 blur-[140px]"

            />

            {/* Cyan Glow */}

            <motion.div

                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.15, 0.3, 0.15]
                }}

                transition={{
                    repeat: Infinity,
                    duration: 10
                }}

                className="absolute bottom-0 left-10 w-[350px] h-[350px] rounded-full bg-cyan-300 blur-[120px]"

            />

            {/* Grid */}

            <div

                className="absolute inset-0 opacity-30"

                style={{

                    backgroundImage:

                    `linear-gradient(#dbeafe 1px, transparent 1px),

                     linear-gradient(90deg,#dbeafe 1px,transparent 1px)`,

                    backgroundSize: "45px 45px"

                }}

            />

        </>

    );

}