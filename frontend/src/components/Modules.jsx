import { motion } from "framer-motion";
import {
    FaHome,
    FaCloudSun,
    FaGlobe,
    FaChartBar,
    FaHistory,
    FaInfoCircle
} from "react-icons/fa";

const modules = [

    {
        icon: <FaHome size={30} />,
        title: "Home",
        description: "Platform overview and quick access to climate intelligence tools.",
        color: "from-blue-500 to-cyan-500"
    },

    {
        icon: <FaCloudSun size={30} />,
        title: "Climate Prediction",
        description: "Predict rainfall and temperature using Machine Learning models.",
        color: "from-green-500 to-emerald-500"
    },

    {
        icon: <FaGlobe size={30} />,
        title: "Digital Twin Simulation",
        description: "Simulate future climate scenarios under different conditions.",
        color: "from-indigo-500 to-blue-600"
    },

    {
        icon: <FaChartBar size={30} />,
        title: "Analytics",
        description: "Visualise climate trends, model outputs and performance.",
        color: "from-orange-500 to-red-500"
    },

    {
        icon: <FaHistory size={30} />,
        title: "History",
        description: "Review previous predictions and simulation records.",
        color: "from-purple-500 to-pink-500"
    },

    {
        icon: <FaInfoCircle size={30} />,
        title: "About",
        description: "Learn about the project, objectives and technologies used.",
        color: "from-slate-500 to-slate-700"
    }

];

export default function Modules() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-black text-center text-slate-900">

                    Platform Modules

                </h2>

                <p className="text-center text-gray-600 mt-4 mb-16 max-w-3xl mx-auto">

                    Explore every module of the AI Climate Digital Twin platform,
                    from intelligent prediction to advanced climate simulation.

                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {modules.map((module, index) => (

                        <motion.div

                            key={index}

                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}

                            transition={{ duration: 0.25 }}

                            className="rounded-3xl bg-slate-50 shadow-lg overflow-hidden border border-slate-200"

                        >

                            <div className={`h-2 bg-gradient-to-r ${module.color}`} />

                            <div className="p-8">

                                <div className="text-blue-600 mb-6">

                                    {module.icon}

                                </div>

                                <h3 className="text-2xl font-bold mb-4">

                                    {module.title}

                                </h3>

                                <p className="text-gray-600 leading-7">

                                    {module.description}

                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}