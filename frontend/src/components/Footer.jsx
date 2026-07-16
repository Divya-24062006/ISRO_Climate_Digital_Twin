import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaGlobe
} from "react-icons/fa";

export default function Footer() {

    return (

        <footer className="bg-slate-900 text-white">

            <div className="max-w-7xl mx-auto px-8 py-16">

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

                    {/* Project */}

                    <div>

                        <h2 className="text-2xl font-black">

                            AI Climate Digital Twin

                        </h2>

                        <p className="mt-5 text-slate-300 leading-7">

                            An AI-powered climate intelligence platform
                            for prediction, simulation and environmental
                            decision support.

                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="text-xl font-bold mb-5">

                            Navigation

                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link to="/" className="hover:text-blue-400">

                                Home

                            </Link>

                            <Link to="/prediction" className="hover:text-blue-400">

                                Prediction

                            </Link>

                            <Link to="/simulator" className="hover:text-blue-400">

                                Simulator

                            </Link>

                            <Link to="/analytics" className="hover:text-blue-400">

                                Analytics

                            </Link>

                        </div>

                    </div>

                    {/* Technologies */}

                    <div>

                        <h3 className="text-xl font-bold mb-5">

                            Technologies

                        </h3>

                        <div className="space-y-3 text-slate-300">

                            <p>React.js</p>

                            <p>FastAPI</p>

                            <p>Scikit-learn</p>

                            <p>WeatherAPI</p>

                            <p>SQLite</p>

                        </div>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-bold mb-5">

                            Connect

                        </h3>

                        <div className="flex gap-5 text-2xl">

                            <FaGithub className="cursor-pointer hover:text-blue-400 transition"/>

                            <FaLinkedin className="cursor-pointer hover:text-blue-400 transition"/>

                            <FaEnvelope className="cursor-pointer hover:text-blue-400 transition"/>

                            <FaGlobe className="cursor-pointer hover:text-blue-400 transition"/>

                        </div>

                    </div>

                </div>

                <hr className="border-slate-700 my-10"/>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-slate-400">

                        © 2026 AI Climate Digital Twin. All Rights Reserved.

                    </p>

                    <p className="text-slate-400">

                        Developed as an AI-based Climate Intelligence Platform.

                    </p>

                </div>

            </div>

        </footer>

    );

}