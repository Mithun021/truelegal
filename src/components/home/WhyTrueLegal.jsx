import { whyTrueLegalData } from "./WhyTrueLegalData";
// import { FaArrowRight } from "react-icons/fa";

export default function WhyTrueLegal() {
    return (
        <section
            className="
                relative
                py-24
                overflow-hidden
                bg-gradient-to-br
                from-[#071A3D]
                via-[#102A63]
                to-[#8B1E3F]
            "
        >
            {/* Background Blur */}

            <div
                className="
                    absolute
                    top-0
                    left-0
                    w-96
                    h-96
                    bg-blue-500/10
                    blur-[120px]
                    rounded-full
                "
            />

            <div
                className="
                    absolute
                    bottom-0
                    right-0
                    w-96
                    h-96
                    bg-red-500/10
                    blur-[120px]
                    rounded-full
                "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center max-w-4xl mx-auto mb-16">

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-5
                            py-2
                            rounded-full
                            border
                            border-white/20
                            bg-white/10
                            text-white
                            text-sm
                            mb-6
                        "
                    >
                        Why True Legal Only?
                    </span>

                    <h2
                        className="
                            text-4xl
                            lg:text-5xl
                            font-bold
                            text-white
                            leading-tight
                            mb-6
                        "
                    >
                        India's Premier Medico-Legal &
                        Risk Management Partner
                    </h2>

                    <p
                        className="
                            text-white/80
                            leading-8
                            max-w-3xl
                            mx-auto
                        "
                    >
                        True Legal Consultant is dedicated
                        to empowering healthcare professionals
                        through legal protection, risk management,
                        compliance assistance and professional
                        indemnity services.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-3 gap-8">

                    {whyTrueLegalData.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group
                                bg-white
                                rounded-[28px]
                                overflow-hidden
                                shadow-xl
                                hover:-translate-y-3
                                hover:shadow-2xl
                                transition-all
                                duration-500
                            "
                        >
                            {/* Image */}

                            <div className="overflow-hidden h-64">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        transition-all
                                        duration-700
                                        group-hover:scale-110
                                    "
                                />

                            </div>

                            {/* Content */}

                            <div className="p-8">

                                <h3
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[#071A3D]
                                        mb-4
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        text-gray-600
                                        leading-8
                                        mb-6
                                    "
                                >
                                    {item.description}
                                </p>

                                {/* <button
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-red-700
                                        font-semibold
                                        hover:gap-4
                                        transition-all
                                    "
                                >
                                    Learn More

                                    <FaArrowRight size={13} />
                                </button> */}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}