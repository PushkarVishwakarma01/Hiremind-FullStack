import {
    Clock,
    Star,
    Sparkles,
    ArrowRight
} from "lucide-react";

import { motion } from "framer-motion";

export default function ResourceCard({resource}) {

    return (

        <motion.div

            whileHover={{
                y:-8
            }}

            className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl transition"

        >

            <div className="flex justify-between">

                <div className="text-5xl">

                    {resource.thumbnail}

                </div>

                <div className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-600">

                    {resource.aiMatch}% Match

                </div>

            </div>

            <h3 className="mt-6 text-xl font-semibold">

                {resource.title}

            </h3>

            <p className="mt-2 text-gray-500">

                {resource.description}

            </p>

            <div className="mt-6 flex justify-between text-sm">

                <span>

                    {resource.level}

                </span>

                <span className="flex items-center gap-1">

                    <Clock size={15}/>

                    {resource.duration}

                </span>

            </div>

            <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-1">

                    <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-400"
                    />

                    {resource.rating}

                </div>

                <div className="flex items-center gap-1 text-pink-500">

                    <Sparkles size={16}/>

                    AI Pick

                </div>

            </div>

            <button

                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-white font-medium flex items-center justify-center gap-2"

            >

                Start Learning

                <ArrowRight size={18}/>

            </button>

        </motion.div>

    )

}