import { Link } from "react-router-dom";

import aboutImg from "../../assets/images/about-us-bg.webp";
import { FaArrowRight } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}

                    <div className="relative">

                        {/* Decorative Shape */}

                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-50 rounded-3xl"></div>

                        {/* Main Image */}

                        <div className="relative z-10 overflow-hidden rounded-[30px] shadow-2xl group">

                            <img
                                src={aboutImg}
                                alt="About True Legal"
                                className="
                                    w-full
                                    h-[600px]
                                    object-cover
                                    transition-all
                                    duration-700
                                    group-hover:scale-110
                                "
                            />

                        </div>

                        {/* Experience Card */}

                        <div
                            className="
                                absolute
                                bottom-6
                                right-6
                                bg-white
                                rounded-2xl
                                shadow-xl
                                px-8
                                py-5
                                flex
                                items-center
                                gap-4
                                z-20
                            "
                        >

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-red-50
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#B91C1C"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 0c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm6 10v-4m0 0a4 4 0 00-4-4H8a4 4 0 00-4 4v4m8-4a4 4 0 014-4h0a4 4 0 014 4v4"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h4 className="text-3xl font-bold text-[#071A3D]">
                                    12+
                                </h4>

                                <p className="text-gray-500 text-sm">
                                    Years Of Excellence
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div>

                        {/* Small Badge */}

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-red-50
                                text-red-700
                                text-sm
                                font-medium
                                mb-6
                            "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <circle cx="8" cy="8" r="4" />
                            </svg>

                            About True Legal
                        </span>

                        {/* Heading */}

                        <h2
                            className="
                                text-3xl
                                lg:text-3xl
                                font-bold
                                text-[#071A3D]
                                leading-tight
                                mb-2
                            "
                        >
                            Comprehensive Indemnity &
                            Risk Management Solutions
                            For Medical Professionals
                        </h2>

                        {/* Subtitle */}

                        <h3
                            className="
                                text-red-700
                                font-medium
                                mb-3
                            "
                        >
                            India's Dedicated Legal Protection
                            Partner For Doctors
                        </h3>

                        {/* Description */}

                        <div className="space-y-3 text-gray-600 leading-8">

                            <p>
                                True Legal Consultant, established under the
                                Indian Companies Act of 1956, is India's
                                leading and only dedicated legal and risk
                                management company exclusively serving
                                medical practitioners.
                            </p>

                            <p>
                                Supported by experienced professionals and
                                financial experts, we provide comprehensive
                                protection tailored specifically for doctors.
                            </p>

                            <p>
                                Through in-depth healthcare risk analysis
                                and proactive legal strategies, we help
                                medical professionals navigate present
                                challenges while safeguarding their future.
                            </p>

                        </div>

                        {/* Features */}

                        <div className="grid md:grid-cols-2 gap-4 mt-8">

                            {[
                                "Professional Indemnity Support",
                                "Medico Legal Advisory",
                                "Risk Management Services",
                                "Claims Assistance & Defence",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#B91C1C"
                                    >
                                        <circle
                                            cx="12"
                                            cy="12"
                                            r="9"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="M8 12l2.5 2.5L16 9"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}

                        <div className="flex flex-wrap items-center gap-4 mt-10">

                            <Link
                                to="/about-true-legal"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    bg-red-700
                                    hover:bg-red-800
                                    text-white
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    shadow-lg
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Read More

                                <FaArrowRight
                                    size={14}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <Link
                                to="/contact"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    border-2
                                    border-[#071A3D]
                                    text-[#071A3D]
                                    px-7
                                    py-4
                                    rounded-xl
                                    font-semibold
                                    hover:bg-[#071A3D]
                                    hover:text-white
                                    shadow-sm
                                    hover:shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                "
                            >
                                Contact Us

                                <FaArrowRight size={14} />
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}