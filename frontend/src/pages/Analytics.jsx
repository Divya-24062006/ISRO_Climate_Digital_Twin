import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";
import {

    ResponsiveContainer,

    LineChart,

    Line,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    Legend,

    PieChart,

    Pie,

    Cell,

    BarChart,

    Bar

} from "recharts";

export default function Analytics() {

const [summary, setSummary] = useState(null);

const [chartData, setChartData] = useState([]);

const [history, setHistory] = useState([]);

const [loading, setLoading] = useState(true);

const [error, setError] = useState("");

const loadAnalytics = async () => {

    try {

        setLoading(true);

        setError("");

        const [

            summaryResponse,

            chartResponse,

            historyResponse

        ] = await Promise.all([

            api.get("/analytics"),

            api.get("/analytics/charts"),

            api.get("/history")

        ]);

        setSummary(summaryResponse.data);

        console.log(summaryResponse.data);

        setChartData(chartResponse.data);

        console.log(chartResponse.data);

        setHistory(historyResponse.data);

    }

    catch (err) {

        console.error(err);

        setError("Unable to load analytics.");

    }

    finally {

        setLoading(false);

    }

};

useEffect(() => {

    loadAnalytics();

}, []);

if (loading) {

    return (

        <div className="min-h-screen flex items-center justify-center">

            <h1 className="text-3xl font-bold">

                Loading Analytics...

            </h1>

        </div>

    );

}

if (error) {

    return (

        <div className="min-h-screen flex items-center justify-center">

            <h1 className="text-2xl text-red-600 font-bold">

                {error}

            </h1>

        </div>

    );

}

const sourceData = summary
    ? Object.entries(summary.source_distribution || {}).map(
        ([name, value]) => ({
            name,
            value
        })
    )
    : [];

const floodRiskData = summary
    ? Object.entries(summary.flood_distribution || {}).map(
        ([name, value]) => ({
            name,
            value
        })
    )
    : [];

const COLORS = [

    "#2563eb",

    "#16a34a",

    "#dc2626",

    "#f59e0b"

];

return (

<div className="min-h-screen bg-slate-100 pt-28 pb-20">

    <div className="max-w-7xl mx-auto px-8">

        <motion.h1

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            className="text-5xl font-black"

        >

            Climate Analytics Dashboard

        </motion.h1>

        <p className="text-lg text-gray-600 mt-4">

            Analyze all previous climate simulations and predictions.

        </p>

        {/* ================= SUMMARY ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 mt-12">

    <div className="bg-white rounded-3xl shadow-xl mt-10 p-10">

    <h2 className="text-3xl font-bold mb-8">

        Overall Climate Health

    </h2>

    <div className="flex flex-col lg:flex-row items-center justify-between">

        {/* Left */}

        <div className="text-center">

            <div
                className={`text-8xl font-black ${
                    summary.average_climate_health >= 80
                        ? "text-green-600"
                        : summary.average_climate_health >= 60
                        ? "text-yellow-500"
                        : "text-red-600"
                }`}
            >

                {summary.average_climate_health}

            </div>

            <p className="text-2xl mt-3 font-semibold">

                /100

            </p>

        </div>

        {/* Right */}

        <div className="flex-1 lg:ml-16 mt-10 lg:mt-0">

            <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden">

                <div

                    className={`h-full transition-all duration-1000 ${
                        summary.average_climate_health >= 80
                            ? "bg-green-500"
                            : summary.average_climate_health >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}

                    style={{

                        width: `${summary.average_climate_health}%`

                    }}

                />

            </div>

            <p className="text-gray-600 mt-5 text-lg">

                Higher values indicate a healthier and more stable simulated climate.

            </p>

        </div>

    </div>

</div>

    {/* Total Simulations */}

    <div className="bg-white rounded-3xl shadow-xl mt-10 p-10">

        <div className="text-5xl mb-5">

            📊

        </div>

        <h3 className="text-gray-500 font-semibold">

            Total Simulations

        </h3>

        <p className="text-4xl font-black mt-4 text-blue-700">

            {summary.total_simulations}

        </p>

    </div>

    {/* Average Rainfall */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            🌧

        </div>

        <h3 className="text-gray-500 font-semibold">

            Avg Rainfall

        </h3>

        <p className="text-4xl font-black mt-4 text-blue-600">

            {summary.average_rainfall}

        </p>

        <p className="text-gray-500 mt-2">

            mm

        </p>

    </div>

    {/* Maximum Temperature */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            🌡

        </div>

        <h3 className="text-gray-500 font-semibold">

            Avg Max Temp

        </h3>

        <p className="text-4xl font-black mt-4 text-red-600">

            {summary.average_max_temperature}

        </p>

        <p className="text-gray-500 mt-2">

            °C

        </p>

    </div>

    {/* Minimum Temperature */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            ❄

        </div>

        <h3 className="text-gray-500 font-semibold">

            Avg Min Temp

        </h3>

        <p className="text-4xl font-black mt-4 text-cyan-600">

            {summary.average_min_temperature}

        </p>

        <p className="text-gray-500 mt-2">

            °C

        </p>

    </div>

    {/* Climate Health */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            🌱

        </div>

        <h3 className="text-gray-500 font-semibold">

            Avg Climate Health

        </h3>

        <p className="text-4xl font-black mt-4 text-green-600">

            {summary.average_climate_health}

        </p>

        <p className="text-gray-500 mt-2">

            /100

        </p>

    </div>

</div>

{/* ================= CLIMATE TRENDS ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

    {/* Rainfall */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">

            Rainfall Trend

        </h2>

        <ResponsiveContainer width="100%" height={300}>

            <LineChart data={chartData}>

                <CartesianGrid strokeDasharray="3 3"/>

                <XAxis dataKey="simulation"/>

                <YAxis/>

                <Tooltip/>

                <Legend/>

                <Line

                    dataKey="rainfall"

                    stroke="#2563eb"

                    strokeWidth={3}

                />

            </LineChart>

        </ResponsiveContainer>

    </div>

    {/* Temperature */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">

            Temperature Trend

        </h2>

        <ResponsiveContainer width="100%" height={300}>

            <LineChart data={chartData}>

                <CartesianGrid strokeDasharray="3 3"/>

                <XAxis dataKey="simulation"/>

                <YAxis/>

                <Tooltip/>

                <Legend/>

                <Line

                    dataKey="max_temperature"

                    stroke="#dc2626"

                    strokeWidth={3}

                />

                <Line

                    dataKey="min_temperature"

                    stroke="#06b6d4"

                    strokeWidth={3}

                />

            </LineChart>

        </ResponsiveContainer>

    </div>

</div>

{/* ================= DISTRIBUTIONS ================= */}

<div className="grid lg:grid-cols-2 gap-8 mt-16">

    {/* Source Distribution */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">

            Simulation Source

        </h2>

        <ResponsiveContainer width="100%" height={300}>
    <PieChart>

        <Pie
            data={sourceData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
        >
            {sourceData.map((entry, index) => (

                <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                />

            ))}
        </Pie>

        <Tooltip />
        <Legend />

    </PieChart>
</ResponsiveContainer>

    </div>

    {/* Flood Risk */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <h2 className="text-2xl font-bold mb-6">

            Flood Risk Distribution

        </h2>

        <ResponsiveContainer width="100%" height={300}>

            <BarChart data={floodRiskData}>

    <CartesianGrid strokeDasharray="3 3" />

    <XAxis dataKey="name" />

    <YAxis allowDecimals={false} />

    <Tooltip />

    <Legend />

    <Bar

        dataKey="value"

        fill="#2563eb"

        radius={[8,8,0,0]}

    />

</BarChart>

        </ResponsiveContainer>

    </div>

</div>

{/* ================= RECENT HISTORY ================= */}

<div className="mt-16">

    <div className="flex justify-between items-center mb-8">

        <h2 className="text-4xl font-black">

            Recent Simulations

        </h2>

        <span className="text-gray-500">

            {history.length} Records

        </span>

    </div>

    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="overflow-x-auto">

            <table className="min-w-full">

                <thead className="bg-blue-700 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">

                            ID

                        </th>

                        <th className="px-6 py-4 text-left">

                            Source

                        </th>

                        <th className="px-6 py-4 text-center">

                            Rainfall

                        </th>

                        <th className="px-6 py-4 text-center">

                            Max Temp

                        </th>

                        <th className="px-6 py-4 text-center">

                            Min Temp

                        </th>

                        <th className="px-6 py-4 text-center">

                            Health

                        </th>

                        <th className="px-6 py-4 text-center">

                            Date

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        history.map((row)=>(

                            <tr

                                key={row[0]}

                                className="border-b hover:bg-slate-50 transition"

                            >

                                <td className="px-6 py-4">

                                    #{row[0]}

                                </td>

                                <td className="px-6 py-4">

                                    <span

                                        className={`

                                        px-3

                                        py-1

                                        rounded-full

                                        text-sm

                                        font-semibold

                                        ${

                                            row[4] === "prediction"

                                            ?

                                            "bg-blue-100 text-blue-700"

                                            :

                                            "bg-green-100 text-green-700"

                                        }

                                        `}

                                    >

                                        {row[4]}

                                    </span>

                                </td>

                                <td className="text-center">

                                    {row[6]} mm

                                </td>

                                <td className="text-center">

                                    {row[7]} °C

                                </td>

                                <td className="text-center">

                                    {row[8]} °C

                                </td>

                                <td className="text-center">

                                    <span

                                        className={`font-bold

                                        ${

                                            row[9] >= 80

                                            ?

                                            "text-green-600"

                                            :

                                            row[9] >= 60

                                            ?

                                            "text-blue-600"

                                            :

                                            row[9] >= 40

                                            ?

                                            "text-yellow-600"

                                            :

                                            "text-red-600"

                                        }

                                        `}

                                    >

                                        {row[9]}

                                    </span>

                                </td>

                                <td className="text-center">

                                    {new Date(row[13] + " UTC").toLocaleString("en-IN", {
                                    dateStyle: "medium",
                                    timeStyle: "medium",
                                    timeZone: "Asia/Kolkata"
                                })}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    </div>

</div>

{/* ================= AI INSIGHTS ================= */}

<div className="mt-16">

    <h2 className="text-4xl font-black mb-8">

        AI Climate Insights

    </h2>

    <div className="grid md:grid-cols-2 gap-8">

        {/* Insight 1 */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-5xl mb-5">

                🌧

            </div>

            <h3 className="text-xl font-bold mb-4">

                Rainfall Analysis

            </h3>

            <p className="text-gray-600 leading-8">

                Average simulated rainfall across all scenarios is

                <span className="font-bold text-blue-700">

                    {" "} {summary.average_rainfall} mm

                </span>.

                This indicates the overall precipitation level observed in your simulations.

            </p>

        </div>

        {/* Insight 2 */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-5xl mb-5">

                🌡

            </div>

            <h3 className="text-xl font-bold mb-4">

                Temperature Analysis

            </h3>

            <p className="text-gray-600 leading-8">

                The average maximum temperature is

                <span className="font-bold text-red-600">

                    {" "} {summary.average_max_temperature}°C {" "}

                </span>

                while the average minimum temperature is

                <span className="font-bold text-cyan-600">

                    {" "} {summary.average_min_temperature}°C.
                
                </span>

                These values help identify long-term warming trends.

            </p>

        </div>

        {/* Insight 3 */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-5xl mb-5">

                🌱

            </div>

            <h3 className="text-xl font-bold mb-4">

                Climate Health

            </h3>

            <p className="text-gray-600 leading-8">

                The overall climate health score is

                <span className="font-bold text-green-600">

                    {" "} {summary.average_climate_health}/100

                </span>.

                Higher scores indicate healthier environmental conditions across simulations.

            </p>

        </div>

        {/* Insight 4 */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <div className="text-5xl mb-5">

                📊

            </div>

            <h3 className="text-xl font-bold mb-4">

                Simulation Summary

            </h3>

            <p className="text-gray-600 leading-8">

                A total of

                <span className="font-bold text-blue-700">

                    {" "} {summary.total_simulations} {" "}

                </span>

                climate simulations have been performed and stored for analysis.

            </p>

        </div>

    </div>

</div>

    </div>

</div>

);
}