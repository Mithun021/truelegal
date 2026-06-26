import { Link } from "react-router-dom";
import { protectionData } from "./protectionData";

import doctorImage from "../../assets/images/holistic-protection.webp";

export default function HolisticProtection() {
    return (
        <section className="py-24 bg-[#F8FAFC]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">

                    <div>

                        <span
                            className="
                                text-red-700
                                uppercase
                                tracking-[3px]
                                text-sm
                                font-semibold
                            "
                        >
                            Holistic Protection
                        </span>

                        <h2
                            className="
                                mt-3
                                text-2xl
                                lg:text-3xl
                                font-bold
                                text-[#071A3D]
                            "
                        >
                            Comprehensive Protection For
                            Medical Professionals
                        </h2>

                    </div>

                    <Link
                        to="/contact"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            bg-[#071A3D]
                            text-white
                            px-8
                            py-4
                            rounded-xl
                            font-semibold
                            hover:bg-[#0C2C66]
                            transition-all
                            duration-300
                        "
                    >
                        Contact Us
                    </Link>

                </div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}

                    <div className="relative">

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[30px]
                            "
                        >
                            <img
                                src={doctorImage}
                                alt="Medical Professional"
                                className="
                                    w-full
                                    h-[650px]
                                    object-cover
                                "
                            />
                        </div>

                        {/* Experience Card */}

                        <div
                            className="
                                absolute
                                bottom-8
                                left-8
                                bg-white
                                shadow-xl
                                rounded-2xl
                                px-6
                                py-5
                            "
                        >
                            <h3
                                className="
                                    text-4xl
                                    font-bold
                                    text-red-700
                                "
                            >
                                12+
                            </h3>

                            <p
                                className="
                                    text-sm
                                    text-gray-600
                                    font-medium
                                "
                            >
                                Years Of Excellence
                            </p>
                        </div>

                    </div>

                    {/* Right Features */}

                    <div className="space-y-6">

                        {protectionData.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="
                                        group
                                        bg-white
                                        rounded-3xl
                                        p-7
                                        shadow-md
                                        hover:shadow-2xl
                                        hover:-translate-y-2
                                        transition-all
                                        duration-500
                                        border
                                        border-gray-100
                                    "
                                >
                                    <div className="flex gap-5">

                                        {/* Icon */}

                                        <div
                                            className="
                                                w-16
                                                h-16
                                                rounded-full
                                                bg-[#071A3D]
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                                transition-all
                                                duration-500
                                                group-hover:rotate-12
                                            "
                                        >
                                            <Icon
                                                size={22}
                                                className="text-white"
                                            />
                                        </div>

                                        {/* Content */}

                                        <div>

                                            <h3
                                                className="
                                                    text-2xl
                                                    font-bold
                                                    text-[#071A3D]
                                                    mb-3
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                                                    text-gray-600
                                                    leading-7
                                                "
                                            >
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
}