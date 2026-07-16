import { motion } from "framer-motion";
import {
    FaCloudRain,
    FaGlobeAsia,
    FaShieldAlt,
    FaChartLine
} from "react-icons/fa";

const features = [

    {
        icon: <FaCloudRain size={34} />,
        title: "Climate Prediction",
        description:
            "Predict rainfall and temperature using trained Machine Learning models."
    },

    {
        icon: <FaGlobeAsia size={34} />,
        title: "Digital Twin Simulation",
        description:
            "Simulate future climate scenarios under different environmental conditions."
    },

    {
        icon: <FaShieldAlt size={34} />,
        title: "Climate Risk Assessment",
        description:
            "Assess flood, drought and heatwave risks using intelligent analysis."
    },

    {
        icon: <FaChartLine size={34} />,
        title: "Decision Support",
        description:
            "Generate climate insights and recommendations for informed decision making."
    }

];

export default function Features() {

    return (

        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-8">

                <motion.h2

                    initial={{ opacity: 0, y: 20 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    className="text-4xl font-black text-center text-slate-900"

                >

                    Core Capabilities

                </motion.h2>

                <p className="text-center text-gray-600 mt-4 mb-16 max-w-3xl mx-auto">

                    AI-powered tools designed to predict, simulate and analyse
                    climate conditions through an intelligent digital twin platform.

                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((feature, index) => (

                        <motion.div

                            key={index}

                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}

                            transition={{ duration: 0.25 }}

                            className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100"

                        >

                            <div className="text-blue-600 mb-6">

                                {feature.icon}

                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">

                                {feature.title}

                            </h3>

                            <p className="text-gray-600 leading-7">

                                {feature.description}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}