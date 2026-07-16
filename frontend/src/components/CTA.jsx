import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {

    return (

        <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600">

            <div className="max-w-6xl mx-auto px-8 text-center text-white">

                <motion.h2

                    initial={{ opacity: 0, y: 20 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    className="text-5xl font-black"

                >

                    Ready to Explore Future Climate?

                </motion.h2>

                <motion.p

                    initial={{ opacity: 0 }}

                    whileInView={{ opacity: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: 0.2 }}

                    className="mt-8 text-xl leading-8 max-w-4xl mx-auto text-blue-100"

                >

                    Use Artificial Intelligence, Digital Twin technology and
                    Machine Learning to predict climate conditions, simulate
                    future environmental scenarios and support climate-aware
                    decision making.

                </motion.p>

                <div className="flex flex-wrap justify-center gap-6 mt-12">

                    <Link

                        to="/prediction"

                        className="bg-white text-blue-700 px-8 py-4 rounded-2xl
                        font-bold shadow-xl hover:scale-105 transition"

                    >

                        Start Prediction

                    </Link>

                    <Link

                        to="/simulator"

                        className="border-2 border-white px-8 py-4 rounded-2xl
                        font-bold hover:bg-white hover:text-blue-700 transition"

                    >

                        Launch Simulator

                    </Link>

                </div>

            </div>

        </section>

    );

}