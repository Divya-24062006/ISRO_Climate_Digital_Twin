import { useState, useEffect } from "react";
import IndiaMap from "../components/IndiaMap";
import api from "../services/api";
import PredictionCard from "../components/PredictionCard";
import { useNavigate } from "react-router-dom";
export default function Prediction() {

    /* ===========================
            STATES
    =========================== */

    const [position, setPosition] = useState(null);

    const [latitude, setLatitude] = useState("");

    const [longitude, setLongitude] = useState("");

    const [predictionDate, setPredictionDate] = useState("");

    const [citySearch, setCitySearch] = useState("");

    const [filteredCities, setFilteredCities] = useState([]);

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [error, setError] = useState("");

    const navigate = useNavigate();


    /* ===========================
          MAP → INPUT SYNC
    =========================== */

    useEffect(() => {

        if (position) {

            setLatitude(position.lat.toFixed(6));

            setLongitude(position.lng.toFixed(6));

        }

    }, [position]);

    useEffect(() => {

    const saved = sessionStorage.getItem("latestPrediction");

    if (saved) {

        const data = JSON.parse(saved);

        setResult(data.predictionData);

    }

}, []);


    /* ===========================
          CITY DATABASE
    =========================== */

    const cities = {

        Delhi: {
            lat: 28.6139,
            lng: 77.2090
        },

        Mumbai: {
            lat: 19.0760,
            lng: 72.8777
        },

        Kolkata: {
            lat: 22.5726,
            lng: 88.3639
        },

        Chennai: {
            lat: 13.0827,
            lng: 80.2707
        },

        Bengaluru: {
            lat: 12.9716,
            lng: 77.5946
        },

        Hyderabad: {
            lat: 17.3850,
            lng: 78.4867
        },

        Bhubaneswar: {
            lat: 20.2961,
            lng: 85.8245
        }

    };


    /* ===========================
        SEARCH CITY
    =========================== */

    const handleCitySearch = (value) => {

        setCitySearch(value);

        if (value.trim() === "") {

            setFilteredCities([]);

            return;

        }

        const matches = Object.keys(cities).filter(city =>

            city.toLowerCase().includes(value.toLowerCase())

        );

        setFilteredCities(matches);

    };


    const selectCity = (city) => {

        const location = cities[city];

        setCitySearch(city);

        setFilteredCities([]);

        setPosition(location);

    };

    /* ===========================
      CURRENT LOCATION
=========================== */

const getCurrentLocation = () => {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported.");

        return;

    }

    navigator.geolocation.getCurrentPosition(

        (location) => {

            const lat = location.coords.latitude;

            const lng = location.coords.longitude;

            setLatitude(lat.toFixed(6));

            setLongitude(lng.toFixed(6));

            setPosition({

                lat,

                lng

            });

        },

        () => {

            alert("Unable to fetch location.");

        }

    );

};

/* ===========================
      PREDICT CLIMATE
=========================== */

const handlePredict = async () => {

    if (

        latitude === "" ||

        longitude === "" ||

        predictionDate === ""

    ) {

        alert("Please complete all fields.");

        return;

    }

    try {

        setLoading(true);

        setError("");

        const response = await api.post("/predict", {

            latitude: Number(latitude),

            longitude: Number(longitude),

            day: new Date(predictionDate).getDate()

        });

        console.log(response.data);

        setResult(response.data);

        sessionStorage.setItem(
            "latestPrediction",
            JSON.stringify({

                latitude: Number(latitude),

                longitude: Number(longitude),

                predictionDate,

                predictionData: response.data

            })
);

    }

    catch (err) {

        console.error(err);

        setError("Unable to fetch prediction.");

    }

    finally {

        setLoading(false);

    }

};

console.log(result);

    /* ===========================
            RETURN
    =========================== */

    return (

        <div className="min-h-screen bg-slate-100 pt-28 pb-20">

            <div className="max-w-7xl mx-auto px-8">

                {/* HEADER */}

                <div className="mb-10">

                    <h1 className="text-5xl font-black">

                        Climate Prediction

                    </h1>

                    <p className="mt-4 text-lg text-gray-600">

                        Select a location and generate AI-powered climate predictions.

                    </p>

                </div>

                {/* GRID */}

                <div className="grid lg:grid-cols-5 gap-8">

                    {/* LEFT */}

                    <div className="lg:col-span-3">

                        <div className="bg-white
rounded-3xl
shadow-2xl
overflow-hidden">

                            <div className="p-6 border-b">

                                <h2 className="text-2xl font-bold">

                                    Select Location

                                </h2>

                                <p className="text-gray-500 mt-2">

                                    Click anywhere on the map.

                                </p>

                            </div>

                            <div className="h-[640px]">

                            <IndiaMap
                                position={position}
                                setPosition={setPosition}
                            />

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="lg:col-span-2">

                        <div className="bg-white
rounded-3xl
shadow-2xl
p-10
sticky
top-28">

                            <h2 className="text-2xl font-bold mb-8">

                                Prediction Inputs

                            </h2>

                            {/* Search */}

                            <div className="mb-8">

                                <label className="block font-semibold mb-2">

                                    Search City

                                </label>

                                <div className="relative">

                                    <input

                                        type="text"

                                        value={citySearch}

                                        onChange={(e)=>

                                            handleCitySearch(e.target.value)

                                        }

                                        placeholder="Search Indian city..."

                                        className="w-full
                                        border
                                        border-gray-300
                                        rounded-2xl
                                        h-16
                                        px-5
                                        text-lg
                                        focus:ring-2
                                        focus:ring-blue-500
                                        outline-none"

                                    />

                                </div>

                                {

                                    filteredCities.length > 0 && (

                                        <div className="mt-2 rounded-xl border shadow bg-white">

                                            {

                                                filteredCities.map(city => (

                                                    <div

                                                        key={city}

                                                        onClick={() =>

                                                            selectCity(city)

                                                        }

                                                        className="px-5 py-3 hover:bg-blue-50 cursor-pointer"

                                                    >

                                                        {city}

                                                    </div>

                                                ))

                                            }

                                        </div>

                                    )

                                }

                            </div>

                            {/* Latitude */}

                            <div className="mb-6">

                                <label className="block font-semibold mb-2">

                                    Latitude

                                </label>

                                <input

                                    type="text"

                                    value={latitude}

                                    onChange={(e)=>

                                        setLatitude(e.target.value)

                                    }

                                    className="w-full
                                    border
border-gray-300
rounded-2xl
h-16
px-5
text-lg
focus:ring-2
focus:ring-blue-500
outline-none"

                                />

                            </div>

                            {/* Longitude */}

                            <div className="mb-8">

                                <label className="block font-semibold mb-2">

                                    Longitude

                                </label>

                                <input

                                    type="text"

                                    value={longitude}

                                    onChange={(e)=>

                                        setLongitude(e.target.value)

                                    }

                                    className="w-full
                                    border
                                    border-gray-300
                                    rounded-2xl
                                    h-16
                                    px-5
                                    text-lg
                                    focus:ring-2
                                    focus:ring-blue-500
                                    outline-none"

                                />

                                <div className="mb-6 mt-4">

                                <button

                                onClick={getCurrentLocation}

                                className="w-full
                                bg-gradient-to-r
                                from-green-600
                                to-emerald-500
                                hover:from-green-700
                                hover:to-emerald-600
                                text-white
                                py-4
                                rounded-2xl
                                font-bold
                                shadow-lg
                                transition"

                                    >

                                    📍 Use My Current Location

                                    </button>

                                    <div className="mb-10S">

                                    <label className="block font-semibold mb-3 text-lg">

                                        Prediction Date

                                    </label>

                                    <input

                                        type="date"

                                        value={predictionDate}

                                        onChange={(e)=>

                                        setPredictionDate(e.target.value)

                                        }

                                        className="w-full
                                        border
                                        border-gray-300
                                        rounded-2xl
                                        h-16
                                        px-5
                                        text-lg
                                        focus:ring-2
                                        focus:ring-blue-500
                                        outline-none"

                                    />

                            <div className="mt-8">

    <button

        onClick={handlePredict}

        disabled={loading}

        className="w-full
        bg-gradient-to-r
        from-blue-700
        to-cyan-500
        hover:from-blue-800
        hover:to-cyan-600
        text-white
        py-4
        rounded-2xl
        font-bold
        shadow-lg
        transition"

    >

        {

            loading

            ?

            "Generating Prediction..."

            :

            "Predict Climate"

        }

    </button>

</div>

{

error && (

<div className="mt-5 bg-red-50 border border-red-200 rounded-xl p-4">

    <p className="text-red-600">

        {error}

    </p>

</div>

)

}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {result && (

<div className="mt-20">

    <h2 className="text-4xl font-black mb-10">

        Prediction Results

    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        <PredictionCard

            icon="🌧"

            title="Rainfall"

            prediction={result.prediction.rainfall}

            weather={result.weather.rainfall}

            difference={result.difference.rainfall}

            unit="mm"

        />

        <PredictionCard

            icon="🌡"

            title="Maximum Temperature"

            prediction={result.prediction.max_temperature}

            weather={result.weather.max_temperature}

            difference={result.difference.max_temperature}

            unit="°C"

        />

        <PredictionCard

            icon="❄"

            title="Minimum Temperature"

            prediction={result.prediction.min_temperature}

            weather={result.weather.min_temperature}

            difference={result.difference.min_temperature}

            unit="°C"

        />

    </div>

</div>

)}

<div className="flex justify-center mt-12">

    <button

    onClick={() => navigate("/simulator")}

    className="bg-gradient-to-r
    from-blue-700
    to-cyan-500
    hover:from-blue-800
    hover:to-cyan-600
    text-white
    px-12
    py-4
    rounded-2xl
    font-bold
    shadow-xl"

>

    Proceed to Simulator →

</button>

</div>


            </div>

        </div>

    );

}