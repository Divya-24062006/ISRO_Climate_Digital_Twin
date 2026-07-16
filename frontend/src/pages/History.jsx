import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

export default function History() {

    /* ===============================
            STATES
    =============================== */

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [sourceFilter, setSourceFilter] = useState("all");

    /* ===============================
            LOAD HISTORY
    =============================== */

    const loadHistory = async () => {

        try {

            setLoading(true);

            setError("");

            const response = await api.get("/history");

            setHistory(response.data);

        }

        catch (err) {

            console.error(err);

            setError("Unable to load history.");

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadHistory();

    }, []);

    /* ===============================
            DELETE HISTORY
    =============================== */

    const deleteRecord = async (id) => {

        if (!window.confirm("Delete this simulation?")) {

            return;

        }

        try {

            await api.delete(`/history/${id}`);

            loadHistory();

        }

        catch (err) {

            console.error(err);

            alert("Unable to delete record.");

        }

    };

    const deleteAllRecords = async () => {

    if (

        !window.confirm(

            "Delete ALL simulation history?"

        )

    ) return;

    try {

        await api.delete("/history");

        loadHistory();

    }

    catch (err) {

        console.error(err);

    }

};

    const [selectedRecord, setSelectedRecord] = useState(null);

    /* ===============================
        EXPORT CSV
================================ */

const exportCSV = () => {

    if (filteredHistory.length === 0) {

        alert("No history available to export.");

        return;

    }

    const headers = [

        "ID",

        "Latitude",

        "Longitude",

        "Day",

        "Source",

        "Simulation Days",

        "Rainfall (mm)",

        "Max Temperature (°C)",

        "Min Temperature (°C)",

        "Climate Health",

        "Flood Risk",

        "Heatwave Risk",

        "Drought Risk",

        "Created At"

    ];

    const rows = filteredHistory.map(row => row.join(","));

    const csvContent =

        [headers.join(","), ...rows].join("\n");

    const blob = new Blob(

        [csvContent],

        {

            type: "text/csv;charset=utf-8;"

        }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "simulation_history.csv";

    link.click();

    URL.revokeObjectURL(url);

};

    /* ===============================
            FILTER DATA
    =============================== */

    const filteredHistory = history.filter((row) => {

        const source = row[4]?.toLowerCase();

        const searchMatch = source.includes(search.toLowerCase());

        const sourceMatch =

            sourceFilter === "all"

                ? true

                : source === sourceFilter;

        return searchMatch && sourceMatch;

    });

    /* ===============================
            LOADING
    =============================== */

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <h1 className="text-3xl font-bold">

                    Loading History...

                </h1>

            </div>

        );

    }

    /* ===============================
            ERROR
    =============================== */

    if (error) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <h1 className="text-red-600 text-2xl font-bold">

                    {error}

                </h1>

            </div>

        );

    }

    /* ===============================
            PAGE START
    =============================== */

    return (

        <div className="min-h-screen bg-slate-100 pt-28 pb-20">

            <div className="max-w-7xl mx-auto px-8">

                <motion.h1

                    initial={{ opacity: 0, y: 20 }}

                    animate={{ opacity: 1, y: 0 }}

                    className="text-5xl font-black"

                >

                    Simulation History

                </motion.h1>

                <p className="text-lg text-gray-600 mt-4">

                    Browse and manage all previously simulated climate scenarios.

                </p>
                {/* ===============================
                        SEARCH & FILTER
                    ================================ */}

<div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

    <div className="grid lg:grid-cols-2 gap-6">

        {/* Search */}

        <div>

            <label className="block font-semibold mb-3">

                Search by Source

            </label>

            <input

                type="text"

                value={search}

                onChange={(e)=>setSearch(e.target.value)}

                placeholder="Prediction / Weather"

                className="w-full
                border
                rounded-2xl
                h-14
                px-5"

            />

        </div>

        {/* Filter */}

        <div>

            <label className="block font-semibold mb-3">

                Filter

            </label>

            <select

                value={sourceFilter}

                onChange={(e)=>setSourceFilter(e.target.value)}

                className="w-full
                border
                rounded-2xl
                h-14
                px-5"

            >

                <option value="all">

                    All Sources

                </option>

                <option value="prediction">

                    AI Prediction

                </option>

                <option value="weather">

                    Current Weather

                </option>

            </select>

        </div>

    </div>

</div>

{/* ===============================
        SUMMARY CARDS
================================ */}

<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

    {/* Total Records */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            📄

        </div>

        <p className="text-gray-500">

            Total Records

        </p>

        <h2 className="text-4xl font-black mt-4">

            {filteredHistory.length}

        </h2>

    </div>

    {/* Prediction */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            🤖

        </div>

        <p className="text-gray-500">

            AI Prediction

        </p>

        <h2 className="text-4xl font-black mt-4 text-blue-700">

            {

                filteredHistory.filter(

                    row=>row[4]==="prediction"

                ).length

            }

        </h2>

    </div>

    {/* Weather */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            ☁

        </div>

        <p className="text-gray-500">

            Current Weather

        </p>

        <h2 className="text-4xl font-black mt-4 text-green-700">

            {

                filteredHistory.filter(

                    row=>row[4]==="weather"

                ).length

            }

        </h2>

    </div>

    {/* Average Health */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-5xl mb-5">

            🌱

        </div>

        <p className="text-gray-500">

            Avg Climate Health

        </p>

        <h2 className="text-4xl font-black mt-4 text-green-600">

            {

                filteredHistory.length

                ?

                Math.round(

                    filteredHistory.reduce(

                        (sum,row)=>sum+row[9],

                        0

                    )

                    /

                    filteredHistory.length

                )

                :

                0

            }

            %

        </h2>

    </div>

</div>
{/* ===============================
        HISTORY TABLE
================================ */}

<div className="bg-white rounded-3xl shadow-xl p-8 mt-12">

    <div className="flex justify-between items-center mb-8">

    <h2 className="text-3xl font-bold">

        Simulation Records

    </h2>

    <div className="flex gap-3">

<button

onClick={exportCSV}

className="bg-blue-700
hover:bg-blue-800
text-white
px-5
py-2
rounded-xl"

>

Export CSV

</button>

<button

onClick={deleteAllRecords}

className="bg-red-600
hover:bg-red-700
text-white
px-5
py-2
rounded-xl"

>

Delete All

</button>

</div>

</div>

    <div className="overflow-x-auto">

        <table className="min-w-full">

            <thead>

                <tr className="border-b bg-slate-100">

                    <th className="py-4 px-4 text-left">

                        ID

                    </th>

                    <th className="px-4 text-left">

                        Date

                    </th>

                    <th className="px-4 text-left">

                        Source

                    </th>

                    <th className="px-4 text-center">

                        Rainfall

                    </th>

                    <th className="px-4 text-center">

                        Max Temp

                    </th>

                    <th className="px-4 text-center">

                        Min Temp

                    </th>

                    <th className="px-4 text-center">

                        Climate Health

                    </th>

                    <th className="px-4 text-center">

                        Action

                    </th>

                </tr>

            </thead>

            <tbody>

            {

                filteredHistory.length === 0

                ?

                (

                    <tr>

                        <td

                            colSpan="8"

                            className="text-center py-16 text-gray-500"

                        >

                            No History Found

                        </td>

                    </tr>

                )

                :

                (

                    filteredHistory

                    .slice()

                    .reverse()

                    .map((row)=>(

                        <tr

                            key={row[0]}

                            className="border-b hover:bg-slate-50 transition"

                        >

                            <td className="py-5 px-4 font-semibold">

                                #{row[0]}

                            </td>

                            <td className="px-4">

                                {row[13]}

                            </td>

                            <td className="px-4">

                                <span

                                    className={`

                                    px-3

                                    py-1

                                    rounded-full

                                    text-sm

                                    font-semibold

                                    ${

                                        row[4]==="prediction"

                                        ?

                                        "bg-blue-100 text-blue-700"

                                        :

                                        "bg-green-100 text-green-700"

                                    }

                                    `}

                                >

                                    {

                                        row[4]==="prediction"

                                        ?

                                        "AI Prediction"

                                        :

                                        "Current Weather"

                                    }

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

                                        "text-yellow-500"

                                        :

                                        "text-red-600"

                                    }

                                    `}

                                >

                                    {row[9]}

                                </span>

                            </td>

                            <td className="text-center">

    <div className="flex justify-center gap-2">

        <button

            onClick={()=>setSelectedRecord(row)}

            className="bg-blue-600
            hover:bg-blue-700
            text-white
            px-4
            py-2
            rounded-xl"

        >

            View

        </button>

        <button

            onClick={()=>deleteRecord(row[0])}

            className="bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-xl"

        >

            Delete

        </button>

    </div>

</td>

                        </tr>

                    ))

                )

            }

            </tbody>

        </table>

    </div>

</div>

{selectedRecord && (

<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

<div className="bg-white rounded-3xl shadow-2xl p-10 w-[700px]">

<h2 className="text-3xl font-black mb-8">

Simulation Details

</h2>

<div className="grid grid-cols-2 gap-6">

<div>

<b>Latitude</b>

<p>{selectedRecord[1]}</p>

</div>

<div>

<b>Longitude</b>

<p>{selectedRecord[2]}</p>

</div>

<div>

<b>Source</b>

<p>{selectedRecord[4]}</p>

</div>

<div>

<b>Simulation Days</b>

<p>{selectedRecord[5]}</p>

</div>

<div>

<b>Rainfall</b>

<p>{selectedRecord[6]} mm</p>

</div>

<div>

<b>Maximum Temperature</b>

<p>{selectedRecord[7]} °C</p>

</div>

<div>

<b>Minimum Temperature</b>

<p>{selectedRecord[8]} °C</p>

</div>

<div>

<b>Climate Health</b>

<p>{selectedRecord[9]}/100</p>

</div>

<div>

<b>Flood Risk</b>

<p>{selectedRecord[10]}</p>

</div>

<div>

<b>Heatwave Risk</b>

<p>{selectedRecord[11]}</p>

</div>

<div>

<b>Drought Risk</b>

<p>{selectedRecord[12]}</p>

</div>

<div>

<b>Date</b>

<p>{selectedRecord[13]}</p>

</div>

</div>

<div className="flex justify-end mt-8">

<button

onClick={()=>setSelectedRecord(null)}

className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl"

>

Close

</button>

</div>

</div>

</div>

)}
        </div>   

    </div>     

);

}