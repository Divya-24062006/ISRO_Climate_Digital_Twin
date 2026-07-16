import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroIllustration from "./HeroIllustration";
import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
export default function Hero() {

    return (

        <section className="relative overflow-hidden min-h-[95vh] bg-white">

            <HeroBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-28">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE */}

                    <motion.div

                        initial={{ opacity: 0, x: -50 }}

                        animate={{ opacity: 1, x: 0 }}

                        transition={{ duration: 0.8 }}

                    >

                        <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">

                            AI Powered Climate Intelligence

                        </span>

                        <h1 className="mt-8 text-6xl font-black leading-tight text-slate-900">

                           <span className="text-blue-700">

                            AI Climate

                            </span>

                            <br />

                            Digital Twin

                        </h1>

                        <p className="mt-8 text-xl leading-9 text-gray-600">

                            An intelligent climate analytics platform that combines
                            Machine Learning, Digital Twin technology and real-time
                            weather forecasting to predict future climate conditions,
                            simulate environmental scenarios and support climate-aware
                            decision making.

                        </p>

                        <div className="flex gap-6 mt-12">

                            <Link

                                to="/prediction"

                                className="bg-blue-700 text-white px-8 py-4 rounded-2xl
                                font-semibold shadow-lg hover:shadow-2xl
                                hover:-translate-y-1 transition-all duration-300"

                            >

                                Start Prediction

                            </Link>

                            <Link

                                to="/simulator"

                                className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300"

                            >

                                Open Simulator

                            </Link>

                        </div>

                        <HeroStats />

                    </motion.div>

                    {/* RIGHT SIDE */}

                    <motion.div

                    initial={{ opacity: 0, scale: 0.8 }}

                    animate={{ opacity: 1, scale: 1 }}

                    transition={{ duration: 1 }}

                    className="flex justify-center"

                    >

                        <HeroIllustration />

        </motion.div>

                </div>

            </div>

        </section>

    );

}