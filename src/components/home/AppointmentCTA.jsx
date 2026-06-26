import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import ctaBg from "../../assets/images/cta-bg.webp";

export default function AppointmentCTA() {
    return (
        <section
            className="relative py-20 overflow-hidden"
            style={{
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}

            <div className="absolute inset-0 bg-[#071A3D]/50"></div>

            {/* Gradient Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#071A3D]/90
                    via-[#071A3D]/70
                    to-red-900/60
                "
            ></div>

            {/* Content */}

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

                {/* Badge */}

                <span
                    className="
                        inline-flex
                        items-center
                        px-6
                        py-3
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        backdrop-blur-md
                        text-white
                        text-sm
                        uppercase
                        tracking-wide
                        mb-8
                    "
                >
                    True Legal Consultant
                </span>

                {/* Heading */}

                <h2
                    className="
                        text-3xl
                        md:text-5xl
                        font-bold
                        text-white
                        leading-tight
                        mb-6
                    "
                >
                    Smart Solutions
                    <br />
                    For Every Healthcare Challenge.
                </h2>

                {/* Subtitle */}

                <p
                    className="
                        text-xl
                        text-white/90
                        mb-10
                    "
                >
                    Make An Appointment
                </p>

                {/* Button */}

                <Link
                    to="/contact"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        min-w-[260px]
                        h-16
                        bg-red-700
                        hover:bg-red-800
                        text-white
                        rounded-2xl
                        font-semibold
                        text-lg
                        shadow-xl
                        hover:shadow-2xl
                        hover:-translate-y-1
                        transition-all
                        duration-300
                    "
                >
                    Book Appointment

                    <FaArrowRight size={16} />
                </Link>

            </div>
        </section>
    );
}