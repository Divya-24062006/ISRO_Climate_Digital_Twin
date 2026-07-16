import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
export default function Simulator() {

    /* ===========================
            STATES
    =========================== */

    const [prediction, setPrediction] = useState(null);

    const [simulationSource, setSimulationSource] = useState("prediction");

    const [simulationDays, setSimulationDays] = useState(7);

    const [rainfallChange, setRainfallChange] = useState(0);

    const [temperatureChange, setTemperatureChange] = useState(0);

    const [loading, setLoading] = useState(false);

    const [simulationResult, setSimulationResult] = useState(null);

    const [error, setError] = useState("");

    /* ===========================
        LOAD PREDICTION
    =========================== */

    useEffect(() => {

        const saved = sessionStorage.getItem("latestPrediction");

        if(saved){

        const data = JSON.parse(saved);

        setPrediction(data);

    }

    }, []);

    const runSimulation = async () => {

    try {

        setLoading(true);
        setError("");

        const payload = {
            latitude: prediction.latitude,
            longitude: prediction.longitude,
            day: new Date(prediction.predictionDate).getDate(),
            simulation_type: simulationSource,
            simulation_days: simulationDays,
            rainfall_change: rainfallChange,
            temperature_change: temperatureChange
        };

        console.log("Simulation Request:", payload);

        const response = await api.post("/simulate", payload);

        console.log("Simulation Response:", response.data);

        setSimulationResult(response.data);

    }

    catch (err) {

    console.error(err);

    if (err.response) {

        console.log(err.response.data);

        setError(err.response.data.detail || "Simulation Failed.");

    } else {

        setError(err.message);

    }

}

    finally {

        setLoading(false);

    }

};
    /* ===========================
        NO PREDICTION
    =========================== */

    if (!prediction) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

                    <h2 className="text-4xl font-bold">

                        No Prediction Found

                    </h2>

                    <p className="text-gray-500 mt-5">

                        Please generate a climate prediction first.

                    </p>

                </div>

            </div>

        );

    }

    /* ===========================
            PAGE
    =========================== */

    return (

        <div className="min-h-screen bg-slate-100 pt-28 pb-20">

            <div className="max-w-7xl mx-auto px-8">

                <motion.h1

                    initial={{ opacity: 0, y: 20 }}

                    animate={{ opacity: 1, y: 0 }}

                    className="text-5xl font-black"

                >

                    Climate Digital Twin Simulator

                </motion.h1>

                <p className="mt-4 text-lg text-gray-600">

                    Simulate future climate conditions using AI prediction.

                </p>

                <div className="grid lg:grid-cols-5 gap-8 mt-10">

                    {/* ================= LEFT PANEL ================= */}

<div className="lg:col-span-2">

    <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-28">

        <h2 className="text-2xl font-bold mb-8">

            Climate Overview

        </h2>

        {/* Location */}

        <div className="mb-8">

            <h3 className="font-semibold text-slate-700 mb-4">

                📍 Location

            </h3>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Latitude</span>

                    <span className="font-bold">

                        {prediction.latitude.toFixed(4)}

                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Longitude</span>

                    <span className="font-bold">

                        {prediction.longitude.toFixed(4)}

                    </span>

                </div>

            </div>

        </div>

        <hr className="my-6" />

        {/* Base Climate */}

        <div className="mb-8">

            <h3 className="font-semibold text-slate-700 mb-4">

                🌦 Base Climate

            </h3>

            <div className="space-y-3">

                <div className="flex justify-between">

                    <span>Rainfall</span>

                    <span className="font-bold">

                        {prediction?.predictionData?.prediction?.rainfall ?? "--"} mm

                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Maximum Temp</span>

                    <span className="font-bold text-red-600">

                        {prediction?.predictionData?.prediction?.max_temperature ?? "--"} °C

                    </span>

                </div>

                <div className="flex justify-between">

                    <span>Minimum Temp</span>

                    <span className="font-bold text-cyan-600">

                        {prediction?.predictionData?.prediction?.min_temperature ?? "--"} °C

                    </span>

                </div>

            </div>

        </div>

        <hr className="my-6" />

        {/* Prediction Date */}

        <div className="mb-8">

            <h3 className="font-semibold text-slate-700 mb-4">

                📅 Prediction

            </h3>

            <div className="flex justify-between">

                <span>Date</span>

                <span className="font-bold">

                    {prediction.predictionDate}

                </span>

            </div>

        </div>

        <hr className="my-6" />

        {/* Climate Health */}

        <div>

            <h3 className="font-semibold text-slate-700 mb-5">

                🌱 Climate Health

            </h3>

            <div className="bg-slate-100 rounded-2xl p-6 text-center">

                <div className="text-5xl font-black text-green-600">

                    {

                        simulationResult

                        ?

                        simulationResult.climate_health_score

                        :

                        "--"

                    }

                </div>

                <div className="mt-3 text-gray-600">

                    /100

                </div>

            </div>

        </div>

    </div>

</div>

                    {/* RIGHT */}

                    <div className="lg:col-span-3">

                    <div className="bg-white rounded-3xl shadow-xl p-10">

                    <h2 className="text-3xl font-bold mb-8">

                        Simulation Controls

                    </h2>

                    {/* ================= SOURCE ================= */}

                    <div className="mb-8">

                    <label className="block font-semibold mb-3">

                        Simulation Source

                    </label>

                    <select

                        value={simulationSource}

                        onChange={(e)=>setSimulationSource(e.target.value)}

                        className="w-full
                            border
                            rounded-2xl
                            h-14
                            px-5"

                    >

                    <option value="prediction">

                        AI Prediction

                    </option>

                    <option value="weather">

                        Current Weather

                    </option>

                    </select>

                </div>

{/* ================= DAYS ================= */}

<div className="mb-8">

<div className="flex justify-between mb-3">

<label className="font-semibold">

Simulation Duration

</label>

<span className="font-bold text-blue-700">

{simulationDays} Days

</span>

</div>

<input

type="range"

min="1"

max="30"

value={simulationDays}

onChange={(e)=>

setSimulationDays(

Number(e.target.value)

)

}

className="w-full"

/>

</div>

{/* ================= RAINFALL ================= */}

<div className="mb-8">

    <div className="flex justify-between mb-3">

        <label className="font-semibold">

            Rainfall Change (%)

        </label>

        <span className="font-bold text-green-600">

            {rainfallChange > 0 ? "+" : ""}

            {rainfallChange} %

        </span>

    </div>

    <input

        type="range"

        min="-100"

        max="100"

        value={rainfallChange}

        onChange={(e) =>

            setRainfallChange(Number(e.target.value))

        }

        className="w-full"

    />

</div>

{/* ================= TEMPERATURE ================= */}

<div className="mb-10">

<div className="flex justify-between mb-3">

<label className="font-semibold">

Temperature Change

</label>

<span className="font-bold text-red-600">

{temperatureChange > 0 ? "+" : ""}

{temperatureChange} °C

</span>

</div>

<input

type="range"

min="-10"

max="10"

value={temperatureChange}

onChange={(e)=>

setTemperatureChange(

Number(e.target.value)

)

}

className="w-full"

/>

</div>


{/* ================= PREVIEW ================= */}

<div className="bg-slate-50 rounded-2xl border p-6 mb-8">

<h3 className="font-bold text-xl mb-5">

Simulation Preview

</h3>

<div className="space-y-3">

<div className="flex justify-between">

<span>Source</span>

<span className="font-semibold">

{simulationSource === "prediction"

?

"AI Prediction"

:

"Current Weather"}

</span>

</div>

<div className="flex justify-between">

<span>Duration</span>

<span className="font-semibold">

{simulationDays} Days

</span>

</div>

<div className="flex justify-between">

<span>Rainfall</span>

<span className="font-semibold">

{rainfallChange} %

</span>

</div>

<div className="flex justify-between">

<span>Temperature</span>

<span className="font-semibold">

{temperatureChange} °C

</span>

</div>

</div>

</div>

<button

onClick={runSimulation}

disabled={loading}

className="w-full
h-16
rounded-2xl
bg-gradient-to-r
from-blue-700
to-cyan-500
hover:from-blue-800
hover:to-cyan-600
text-white
font-bold
text-xl
shadow-xl"

>

{

loading

?

"Running Simulation..."

:

"Run Simulation"

}

</button>

{

error && (

<div className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-5">

<p className="text-red-600">

{error}

</p>

</div>

)

}

{/* ================= RESULTS ================= */}

{simulationResult && (

<div className="mt-16">

    <h2 className="text-4xl font-black mb-8">

        Simulation Results

    </h2>

    {/* ===== SUMMARY CARDS ===== */}

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        {/* Rainfall */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

            <div className="text-5xl mb-4">🌧</div>

            <h3 className="font-semibold text-gray-600">

                Average Rainfall

            </h3>

            <p className="text-4xl font-black text-blue-700 mt-4">

                {simulationResult.average.rainfall}

            </p>

            <p className="text-gray-500 mt-2">

                mm

            </p>

        </div>

        {/* Max Temp */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

            <div className="text-5xl mb-4">🌡</div>

            <h3 className="font-semibold text-gray-600">

                Avg Max Temp

            </h3>

            <p className="text-4xl font-black text-red-600 mt-4">

                {simulationResult.average.max_temperature}

            </p>

            <p className="text-gray-500 mt-2">

                °C

            </p>

        </div>

        {/* Min Temp */}

        <div className="bg-white rounded-3xl shadow-xl p-6">

            <div className="text-5xl mb-4">❄</div>

            <h3 className="font-semibold text-gray-600">

                Avg Min Temp

            </h3>

            <p className="text-4xl font-black text-cyan-600 mt-4">

                {simulationResult.average.min_temperature}

            </p>

            <p className="text-gray-500 mt-2">

                °C

            </p>

        </div>

    </div>

</div>

)}

{/* ================= RISK ANALYSIS ================= */}

{simulationResult && (

<div className="mt-16">

    <h2 className="text-4xl font-black mb-8">

        Climate Risk Analysis

    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Flood */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-6xl mb-5">

                🌊

            </div>

            <h3 className="text-xl font-bold">

                Flood Risk

            </h3>

            <div

                className={`

                mt-6

                inline-block

                px-5

                py-2

                rounded-full

                font-bold

                ${
                    simulationResult.risk.flood_risk === "High"

                        ? "bg-red-100 text-red-700"

                        : simulationResult.risk.flood_risk === "Medium"

                        ? "bg-yellow-100 text-yellow-700"

                        : "bg-green-100 text-green-700"

                }

                `}

            >

                {simulationResult.risk.flood_risk}

            </div>

        </div>

        {/* Heatwave */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-6xl mb-5">

                🔥

            </div>

            <h3 className="text-xl font-bold">

                Heatwave Risk

            </h3>

            <div

                className={`

                mt-6

                inline-block

                px-5

                py-2

                rounded-full

                font-bold

                ${
                    simulationResult.risk.heatwave_risk === "High"

                        ? "bg-red-100 text-red-700"

                        : simulationResult.risk.heatwave_risk === "Medium"

                        ? "bg-yellow-100 text-yellow-700"

                        : "bg-green-100 text-green-700"

                }

                `}

            >

                {simulationResult.risk.heatwave_risk}

            </div>

        </div>

        {/* Drought */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-6xl mb-5">

                🌾

            </div>

            <h3 className="text-xl font-bold">

                Drought Risk

            </h3>

            <div

                className={`

                mt-6

                inline-block

                px-5

                py-2

                rounded-full

                font-bold

                ${
                    simulationResult.risk.drought_risk === "High"

                        ? "bg-red-100 text-red-700"

                        : simulationResult.risk.drought_risk === "Medium"

                        ? "bg-yellow-100 text-yellow-700"

                        : "bg-green-100 text-green-700"

                }

                `}

            >

                {simulationResult.risk.drought_risk}

            </div>

        </div>

    </div>

</div>

)}

{/* ================= CLIMATE HEALTH ================= */}

{simulationResult && (

<div className="mt-16">

    <h2 className="text-4xl font-black mb-8">

        Climate Health

    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

        <div className="text-7xl font-black text-green-600">

            {simulationResult.climate_health_score}

        </div>

        <div className="text-xl text-gray-500 mt-3">

            /100

        </div>

        <div className="mt-8">

            <div className="w-full bg-gray-200 rounded-full h-5">

                <div

                    className="bg-green-600 h-5 rounded-full"

                    style={{

                        width:

                        `${simulationResult.climate_health_score}%`

                    }}

                />

            </div>

        </div>

    </div>

</div>

)}

{/* ================= AI RECOMMENDATIONS ================= */}

{simulationResult && (

<div className="mt-16">

    <h2 className="text-4xl font-black mb-8">

        AI Recommendations

    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-10">

        <div className="space-y-5">

            {simulationResult.recommendations.map((item,index)=>(

                <div

                    key={index}

                    className="flex items-start gap-4"

                >

                    <div className="text-2xl">

                        ✅

                    </div>

                    <div className="text-lg text-gray-700">

                        {item}

                    </div>

                </div>

            ))}

        </div>

    </div>

</div>

)}

{/* ================= FORECAST TABLE ================= */}

{simulationResult && (

<div className="mt-16">

<h2 className="text-4xl font-black mb-8">

7-Day Climate Forecast

</h2>

<div className="bg-white rounded-3xl shadow-xl overflow-hidden">

<table className="w-full">

<thead className="bg-blue-700 text-white">

<tr>

<th className="py-4">

Day

</th>

<th>

🌧 Rainfall

</th>

<th>

🌡 Max

</th>

<th>

❄ Min

</th>

</tr>

</thead>

<tbody>

{

simulationResult.simulation.map((day)=>(

<tr

key={day.day}

className="border-b hover:bg-slate-50"

>

<td className="text-center py-4">

Day {day.day}

</td>

<td className="text-center">

{day.rainfall} mm

</td>

<td className="text-center">

{day.max_temperature} °C

</td>

<td className="text-center">

{day.min_temperature} °C

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

)}

</div>

</div>

                </div>

            </div>

        </div>

    );

}