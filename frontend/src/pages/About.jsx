import { motion } from "framer-motion";

export default function About() {

    return (

        <div className="min-h-screen bg-slate-100 pt-28 pb-20">

            <div className="max-w-7xl mx-auto px-8">

                {/* =======================================
                        HERO SECTION
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.7 }}

                    className="bg-gradient-to-r
                    from-blue-700
                    via-cyan-600
                    to-green-500
                    rounded-[40px]
                    shadow-2xl
                    overflow-hidden"

                >

                    <div className="grid lg:grid-cols-2 gap-10 items-center p-14">

                        {/* LEFT */}

                        <div>

                            <span className="inline-block bg-white/20 text-white px-5 py-2 rounded-full font-semibold">

                                AI Powered Climate Intelligence

                            </span>

                            <h1 className="text-6xl font-black text-white mt-8 leading-tight">

                                AI Climate

                                <br />

                                Digital Twin

                            </h1>

                            <p className="text-blue-100 text-xl leading-9 mt-8">

                                A Machine Learning powered climate prediction,

                                simulation and analytics platform designed to

                                forecast environmental conditions, assess

                                climate risks and support intelligent

                                decision making using Artificial Intelligence.

                            </p>

                            <div className="flex gap-5 mt-10">

                                <button className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition">

                                    Learn More

                                </button>

                                <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-blue-700 transition">

                                    Documentation

                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <motion.div

                            animate={{

                                y: [0, -15, 0]

                            }}

                            transition={{

                                repeat: Infinity,

                                duration: 4

                            }}

                            className="flex justify-center"

                        >

                            <div className="w-80 h-80 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">

                                <span className="text-[130px]">

                                    🌍

                                </span>

                            </div>

                        </motion.div>

                    </div>

                </motion.div>

                {/* =======================================
                        PROJECT OVERVIEW
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="bg-white rounded-3xl shadow-xl p-12 mt-12"

                >

                    <h2 className="text-4xl font-black">

                        Project Overview

                    </h2>

                    <p className="text-gray-600 text-lg leading-9 mt-8">

                        AI Climate Digital Twin is an intelligent climate

                        analytics platform that combines Machine Learning,

                        weather forecasting, simulation techniques and

                        interactive dashboards to predict future climate

                        conditions.

                    </p>

                    <p className="text-gray-600 text-lg leading-9 mt-6">

                        The system allows users to generate climate

                        predictions, simulate future environmental changes,

                        analyze risks such as floods, droughts and heatwaves,

                        monitor climate health and visualize historical

                        simulation records through an intuitive dashboard.

                    </p>

                </motion.div>
                                {/* =======================================
                        CORE FEATURES
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-16"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Core Features

                    </h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {/* Feature 1 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                🤖

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                AI Climate Prediction

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Uses Machine Learning to predict rainfall,

                                maximum temperature and minimum temperature

                                based on geographical location.

                            </p>

                        </motion.div>

                        {/* Feature 2 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                🌍

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                Digital Twin Simulation

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Simulates future climate scenarios by allowing

                                rainfall and temperature adjustments to analyze

                                possible environmental outcomes.

                            </p>

                        </motion.div>

                        {/* Feature 3 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                ⚠

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                Risk Assessment

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Automatically evaluates Flood Risk,

                                Heatwave Risk and Drought Risk from simulated

                                climate conditions.

                            </p>

                        </motion.div>

                        {/* Feature 4 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                🌱

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                Climate Health Score

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Generates a climate health score representing

                                the overall environmental stability of each

                                simulated scenario.

                            </p>

                        </motion.div>

                        {/* Feature 5 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                📊

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                Analytics Dashboard

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Interactive charts and visual analytics provide

                                insights into rainfall trends, temperature,

                                simulation history and climate health.

                            </p>

                        </motion.div>

                        {/* Feature 6 */}

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-6xl">

                                🗂

                            </div>

                            <h3 className="text-2xl font-bold mt-6">

                                Simulation History

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Stores every simulation in a local database,

                                allowing users to review, search, export and

                                manage previous climate analyses.

                            </p>

                        </motion.div>

                    </div>

                </motion.div>
                                {/* =======================================
                        TECHNOLOGY STACK
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Technology Stack

                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {/* React */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                ⚛️

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                React

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Interactive frontend built with reusable

                                components and modern React Hooks.

                            </p>

                        </motion.div>

                        {/* Tailwind */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                🎨

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Tailwind CSS

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Utility-first CSS framework used for building

                                responsive and modern user interfaces.

                            </p>

                        </motion.div>

                        {/* FastAPI */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                ⚡

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                FastAPI

                            </h3>

                            <p className="text-gray-600 mt-4">

                                High-performance backend framework powering

                                all REST APIs and climate services.

                            </p>

                        </motion.div>

                        {/* Python */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                🐍

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Python

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Core programming language for machine learning,

                                simulation engine and backend logic.

                            </p>

                        </motion.div>

                        {/* Machine Learning */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                🧠

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Scikit-Learn

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Machine Learning library used to train and

                                evaluate the climate prediction model.

                            </p>

                        </motion.div>

                        {/* SQLite */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                🗄️

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                SQLite

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Lightweight relational database storing

                                simulation history and analytics.

                            </p>

                        </motion.div>

                        {/* Weather API */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                ☁️

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Weather API

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Provides live weather information used for

                                prediction comparison and simulations.

                            </p>

                        </motion.div>

                        {/* Framer Motion */}

                        <motion.div

                            whileHover={{

                                y:-8,

                                scale:1.05

                            }}

                            className="bg-white rounded-3xl shadow-xl p-8 text-center"

                        >

                            <div className="text-6xl">

                                ✨

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Framer Motion

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Smooth animations and transitions creating a

                                modern and engaging user experience.

                            </p>

                        </motion.div>

                    </div>

                </motion.div>

                                {/* =======================================
                        PROJECT STATISTICS
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Project Statistics

                    </h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-5xl">

                                🤖

                            </div>

                            <h3 className="text-5xl font-black mt-6">

                                6

                            </h3>

                            <p className="mt-4 text-lg">

                                Intelligent Modules

                            </p>

                        </motion.div>

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-5xl">

                                📄

                            </div>

                            <h3 className="text-5xl font-black mt-6">

                                8+

                            </h3>

                            <p className="mt-4 text-lg">

                                Backend APIs

                            </p>

                        </motion.div>

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-5xl">

                                🧠

                            </div>

                            <h3 className="text-5xl font-black mt-6">

                                ML

                            </h3>

                            <p className="mt-4 text-lg">

                                Prediction Engine

                            </p>

                        </motion.div>

                        <motion.div

                            whileHover={{ scale: 1.05 }}

                            className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl shadow-xl p-8"

                        >

                            <div className="text-5xl">

                                🗄️

                            </div>

                            <h3 className="text-5xl font-black mt-6">

                                SQLite

                            </h3>

                            <p className="mt-4 text-lg">

                                Persistent Database

                            </p>

                        </motion.div>

                    </div>

                </motion.div>

                {/* =======================================
                        SYSTEM WORKFLOW
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="bg-white rounded-3xl shadow-xl p-12 mt-20"

                >

                    <h2 className="text-4xl font-black mb-12 text-center">

                        AI Climate Digital Twin Workflow

                    </h2>

                    <div className="grid md:grid-cols-5 gap-8 text-center">

                        <div>

                            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-5xl">

                                📍

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                User Input

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Latitude, Longitude & Date

                            </p>

                        </div>

                        <div>

                            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto text-5xl">

                                🤖

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                AI Prediction

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Predicts rainfall and temperatures

                            </p>

                        </div>

                        <div>

                            <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto text-5xl">

                                🌍

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Simulation

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Creates future climate scenarios

                            </p>

                        </div>

                        <div>

                            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto text-5xl">

                                ⚠️

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Risk Analysis

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Flood, Heatwave & Drought Detection

                            </p>

                        </div>

                        <div>

                            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mx-auto text-5xl">

                                📊

                            </div>

                            <h3 className="font-bold text-xl mt-6">

                                Analytics

                            </h3>

                            <p className="text-gray-600 mt-4">

                                Dashboard & Historical Insights

                            </p>

                        </div>

                    </div>

                </motion.div>

                                {/* =======================================
                        PROJECT OBJECTIVES
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Project Objectives

                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white rounded-3xl shadow-xl p-10">

                            <ul className="space-y-6 text-lg text-gray-700">

                                <li>✅ Predict rainfall and temperature using Machine Learning.</li>

                                <li>✅ Simulate future climate scenarios through a Digital Twin.</li>

                                <li>✅ Assess Flood, Heatwave and Drought risks.</li>

                                <li>✅ Generate an overall Climate Health Score.</li>

                            </ul>

                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-10">

                            <ul className="space-y-6 text-lg text-gray-700">

                                <li>✅ Store every simulation for future analysis.</li>

                                <li>✅ Visualize climate trends through interactive dashboards.</li>

                                <li>✅ Assist researchers and decision-makers with AI-driven insights.</li>

                                <li>✅ Provide an extensible platform for future climate research.</li>

                            </ul>

                        </div>

                    </div>

                </motion.div>

                {/* =======================================
                        REAL-WORLD APPLICATIONS
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Real-World Applications

                    </h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

                            <div className="text-6xl">🌾</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Agriculture

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Support crop planning and irrigation decisions using predicted climate conditions.

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

                            <div className="text-6xl">🏙️</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Smart Cities

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Assist urban planners in preparing for changing weather patterns.

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

                            <div className="text-6xl">🚨</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Disaster Management

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Improve preparedness for floods, droughts and heatwaves through scenario analysis.

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

                            <div className="text-6xl">🔬</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Climate Research

                            </h3>

                            <p className="text-gray-600 mt-5 leading-8">

                                Enable researchers to study climate trends and evaluate future environmental scenarios.

                            </p>

                        </div>

                    </div>

                </motion.div>

                {/* =======================================
                        FUTURE SCOPE
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <h2 className="text-4xl font-black mb-10">

                        Future Scope

                    </h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">

                            <div className="text-5xl">🛰️</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Satellite Integration

                            </h3>

                            <p className="mt-5 leading-8">

                                Integrate satellite observations for improved climate monitoring.

                            </p>

                        </div>

                        <div className="bg-gradient-to-br from-green-600 to-emerald-500 text-white rounded-3xl p-8 shadow-xl">

                            <div className="text-5xl">📡</div>

                            <h3 className="text-2xl font-bold mt-6">

                                IoT Sensors

                            </h3>

                            <p className="mt-5 leading-8">

                                Collect real-time environmental data using distributed sensor networks.

                            </p>

                        </div>

                        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8 shadow-xl">

                            <div className="text-5xl">🧠</div>

                            <h3 className="text-2xl font-bold mt-6">

                                Deep Learning

                            </h3>

                            <p className="mt-5 leading-8">

                                Enhance prediction accuracy using advanced neural network architectures.

                            </p>

                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-3xl p-8 shadow-xl">

                            <div className="text-5xl">🌍</div>

                            <h3 className="text-2xl font-bold mt-6">

                                3D Digital Twin

                            </h3>

                            <p className="mt-5 leading-8">

                                Develop an interactive 3D visualization of climate simulations for immersive analysis.

                            </p>

                        </div>

                    </div>

                </motion.div>

                                {/* =======================================
                        DEVELOPER
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7 }}

                    className="mt-20"

                >

                    <div className="bg-white rounded-[40px] shadow-2xl p-14">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left */}

                            <div className="flex justify-center">

                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-green-500 flex items-center justify-center shadow-2xl">

                                    <span className="text-[120px]">

                                        👨‍💻

                                    </span>

                                </div>

                            </div>

                            {/* Right */}

                            <div>

                                <h2 className="text-4xl font-black">

                                    Developer

                                </h2>

                                <h3 className="text-3xl font-bold text-blue-700 mt-8">

                                    Divya Samarpan Das

                                </h3>

                                <p className="text-lg text-gray-600 mt-6 leading-8">

                                    B.Tech Computer Science Engineering

                                    <br />

                                    AI • Machine Learning • Data Science

                                </p>

                                <p className="text-lg text-gray-600 mt-6 leading-8">

                                    This project demonstrates the practical

                                    application of Machine Learning,

                                    Digital Twin technology and modern web

                                    development for intelligent climate

                                    prediction and simulation.

                                </p>

                                <div className="grid grid-cols-2 gap-6 mt-10">

                                    <div className="bg-slate-100 rounded-2xl p-5">

                                        <h4 className="font-bold">

                                            Project

                                        </h4>

                                        <p className="text-gray-600 mt-2">

                                            AI Climate Digital Twin

                                        </p>

                                    </div>

                                    <div className="bg-slate-100 rounded-2xl p-5">

                                        <h4 className="font-bold">

                                            Category

                                        </h4>

                                        <p className="text-gray-600 mt-2">

                                            Machine Learning

                                        </p>

                                    </div>

                                    <div className="bg-slate-100 rounded-2xl p-5">

                                        <h4 className="font-bold">

                                            Backend

                                        </h4>

                                        <p className="text-gray-600 mt-2">

                                            FastAPI + Python

                                        </p>

                                    </div>

                                    <div className="bg-slate-100 rounded-2xl p-5">

                                        <h4 className="font-bold">

                                            Frontend

                                        </h4>

                                        <p className="text-gray-600 mt-2">

                                            React + Tailwind CSS

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* =======================================
                        FOOTER
                ======================================= */}

                <motion.div

                    initial={{ opacity: 0 }}

                    whileInView={{ opacity: 1 }}

                    viewport={{ once: true }}

                    className="mt-20"

                >

                    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-[40px] text-white shadow-2xl p-14">

                        <div className="text-center">

                            <div className="text-7xl">

                                🌍

                            </div>

                            <h2 className="text-5xl font-black mt-8">

                                AI Climate Digital Twin

                            </h2>

                            <p className="text-blue-200 text-xl mt-8 max-w-4xl mx-auto leading-9">

                                An intelligent climate prediction and simulation platform

                                powered by Machine Learning, Digital Twin technology,

                                FastAPI and React.

                            </p>

                            <div className="grid md:grid-cols-4 gap-8 mt-14">

                                <div>

                                    <h3 className="text-3xl font-black">

                                        AI

                                    </h3>

                                    <p className="text-blue-200 mt-3">

                                        Machine Learning

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-3xl font-black">

                                        DT

                                    </h3>

                                    <p className="text-blue-200 mt-3">

                                        Digital Twin

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-3xl font-black">

                                        API

                                    </h3>

                                    <p className="text-blue-200 mt-3">

                                        FastAPI Backend

                                    </p>

                                </div>

                                <div>

                                    <h3 className="text-3xl font-black">

                                        UI

                                    </h3>

                                    <p className="text-blue-200 mt-3">

                                        React Frontend

                                    </p>

                                </div>

                            </div>

                            <div className="border-t border-white/20 mt-14 pt-10">

                                <p className="text-blue-200">

                                    © 2026 AI Climate Digital Twin

                                </p>

                                <p className="text-blue-300 mt-3">

                                    Developed for academic research and educational purposes.

                                </p>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>

    );

}