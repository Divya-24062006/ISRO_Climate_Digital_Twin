import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaBrain,
    FaCloudSunRain,
    FaProjectDiagram,
    FaRobot
} from "react-icons/fa";

export default function Overview() {

    return (

        <section className="py-24 bg-slate-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}

                    <motion.div

                        initial={{ opacity: 0, x: -40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                    >

                        <h2 className="text-4xl font-black text-slate-900">

                            AI Powered Climate Intelligence

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-gray-600">

                            AI Climate Digital Twin combines Machine Learning,
                            Digital Twin technology and real-time weather
                            forecasting to predict climate conditions,
                            simulate future scenarios and generate intelligent
                            environmental insights.

                        </p>

                        <div className="mt-10 space-y-5">

                            <Feature text="Machine Learning Prediction Models" />

                            <Feature text="Digital Twin Climate Simulation" />

                            <Feature text="Environmental Risk Assessment" />

                            <Feature text="AI Recommendation System" />

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div

                        initial={{ opacity: 0, x: 40 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                    >

                        <div className="bg-white rounded-3xl shadow-xl p-10">

                            <Workflow />

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>

    );

}

function Feature({ text }) {

    return (

        <div className="flex items-center gap-4">

            <div className="w-3 h-3 rounded-full bg-blue-600"></div>

            <p className="text-gray-700">

                {text}

            </p>

        </div>

    );

}

function Workflow() {

    const steps = [

        {

            icon: <FaBrain />,

            title: "Prediction"

        },

        {

            icon: <FaCloudSunRain />,

            title: "Weather"

        },

        {

            icon: <FaProjectDiagram />,

            title: "Simulation"

        },

        {

            icon: <FaRobot />,

            title: "AI Insights"

        }

    ];

    return (

        <div>

            <h3 className="text-2xl font-bold mb-10 text-center">

                Platform Workflow

            </h3>

            {steps.map((step, index) => (

                <div key={index}>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-5">

                            <div className="text-blue-600 text-3xl">

                                {step.icon}

                            </div>

                            <h4 className="text-xl font-semibold">

                                {step.title}

                            </h4>

                        </div>

                        {index !== steps.length - 1 &&

                            <FaArrowRight className="text-blue-600" />

                        }

                    </div>

                    {index !== steps.length - 1 &&

                        <div className="h-10"></div>

                    }

                </div>

            ))}

        </div>

    );

}