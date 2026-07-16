import { motion } from "framer-motion";

const stats = [

    {

        icon:"🌧",

        title:"Climate Prediction",

        text:"Machine Learning powered rainfall and temperature prediction."

    },

    {

        icon:"🌍",

        title:"Digital Twin Simulation",

        text:"Simulate future climate scenarios using AI."

    },

    {

        icon:"⚠",

        title:"Risk Assessment",

        text:"Flood, drought and heatwave analysis."

    }

];

export default function HeroStats(){

    return(

        <div className="space-y-5 mt-14">

            {stats.map((item,index)=>(

                <motion.div

                    key={index}

                    initial={{

                        opacity:0,

                        x:-40

                    }}

                    animate={{

                        opacity:1,

                        x:0

                    }}

                    transition={{

                        delay:index*0.3

                    }}

                    whileHover={{

                        y:-4,

                        scale:1.02

                    }}

                    className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5"

                >

                    <div className="flex gap-4">

                        <div className="text-3xl">

                            {item.icon}

                        </div>

                        <div>

                            <h3 className="font-bold">

                                {item.title}

                            </h3>

                            <p className="text-gray-600 mt-2">

                                {item.text}

                            </p>

                        </div>

                    </div>

                </motion.div>

            ))}

        </div>

    )

}