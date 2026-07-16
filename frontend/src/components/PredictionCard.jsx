import { motion } from "framer-motion";

export default function PredictionCard({

    icon,
    title,
    prediction,
    weather,
    difference,
    unit

}) {

    const positive = difference >= 0;

    return (

        <motion.div

            whileHover={{
                y: -5,
                scale: 1.02
            }}

            className="bg-white rounded-3xl shadow-xl p-8 border"

        >

            <div className="flex items-center gap-4 mb-8">

                <div className="text-5xl">

                    {icon}

                </div>

                <div>

                    <h3 className="text-2xl font-bold">

                        {title}

                    </h3>

                </div>

            </div>

            <InfoRow

                label="AI Prediction"

                value={`${prediction} ${unit}`}

            />

            <InfoRow

                label="Weather Forecast"

                value={`${weather} ${unit}`}

            />

            <InfoRow

                label="Difference"

                value={`${difference} ${unit}`}

                color={

                    positive

                    ?

                    "text-green-600"

                    :

                    "text-red-600"

                }

            />

        </motion.div>

    );

}

function InfoRow({

    label,
    value,
    color = "text-slate-900"

}) {

    return (

        <div className="flex justify-between py-3 border-b last:border-none">

            <span className="text-gray-500">

                {label}

            </span>

            <span className={`font-bold ${color}`}>

                {value}

            </span>

        </div>

    );

}