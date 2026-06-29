import { Helmet } from "react-helmet-async";
import {
    FaHospital,
    FaShieldAlt,
    FaUserMd,
    FaBalanceScale,
    FaUsers,
    FaRupeeSign,
    FaGlobeAsia,
    FaBell,
    FaCheckCircle,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Difference() {

    const points = [
        {
            icon: <FaHospital />,
            title: "Exclusive Focus on Healthcare",
            content:
                "Unlike general consulting firms, True Legal Consultant is dedicated solely to the healthcare sector. Our deep understanding of the legal, regulatory, and ethical landscape in healthcare enables us to provide customized solutions that directly address the unique challenges medical practitioners face.",
        },
        {
            icon: <FaShieldAlt />,
            title: "24/7 Crisis Management Support",
            content:
                "We offer round-the-clock access to legal and advisory services for sudden or unexpected situations, such as patient death, critical media attention, and regulatory compliance issues. Most competitors only provide limited, scheduled assistance, which may not cover urgent needs.",
        },
        {
            icon: <FaBalanceScale />,
            title: "Comprehensive Coverage with Proactive Risk Management",
            content:
                "Beyond reactive services, True Legal Consultant takes a proactive approach by educating doctors and healthcare providers on risk prevention strategies. Our services encompass everything from patient record management and consent forms to staff training, minimizing the potential for legal issues to arise.",
        },
        {
            icon: <FaUserMd />,
            title: "Experienced Medical Legal Advisors",
            content:
                "Our team consists of highly skilled legal experts and medical consultants specializing in various aspects of healthcare law, including malpractice defense, patient consent, clinical ethics, and hospital risk management. This specialization ensures that your advisor understands both the medical and legal implications of each situation.",
        },
        {
            icon: <FaUsers />,
            title: "Network of Over 120,000 Doctors and Growing",
            content:
                "With one of India’s largest professional networks, we foster peer support and insights for our members. This collaborative environment enables us to stay at the forefront of healthcare industry trends and legal shifts.",
        },
        {
            icon: <FaRupeeSign />,
            title: "Transparent and Affordable Membership Plans",
            content:
                "Unlike other providers who may charge exorbitant fees with hidden costs, True Legal Consultant offers transparent, all-inclusive membership options. Our plans are designed to be accessible to individual practitioners, small clinics, and large hospitals alike.",
        },
        {
            icon: <FaGlobeAsia />,
            title: "National Reach with Local Expertise",
            content:
                "With a pan-India presence, we ensure that clients across regions receive expert legal support that is both nationally informed and locally relevant. Most competitors lack this level of reach, leaving regional clients without adequate support.",
        },
        {
            icon: <FaBell />,
            title: "Regular Policy and Regulatory Updates",
            content:
                "We keep our members informed of changes in medical regulations, such as new health bills and clinical acts, allowing you to remain compliant effortlessly. Other providers often overlook this continuous update service, leaving clients exposed to legal risks.",
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Difference Between True Legal and Others
                </title>

                <meta
                    name="description"
                    content="Discover why True Legal Consultant stands apart through healthcare-focused legal advisory, risk management and medico-legal support."
                />
            </Helmet>

            <Breadcrumb
                title="Difference Between True Legal and Others"
            />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Hero */}

                    <div className="text-center mb-16">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-2
                                rounded-full
                                bg-red-50
                                text-red-700
                                font-semibold
                                text-sm
                                mb-5
                            "
                        >
                            <FaCheckCircle />
                            Why Choose Us
                        </span>

                        <h1
                            className="
                                text-4xl
                                lg:text-5xl
                                font-bold
                                text-[#071A3D]
                                mb-5
                            "
                        >
                            Why True Legal Consultant
                            <br />
                            Stands Out from the Competition
                        </h1>

                        <div
                            className="
                                w-24
                                h-1
                                bg-red-700
                                mx-auto
                                rounded-full
                            "
                        ></div>

                    </div>

                    {/* Cards */}

                    <div className="grid lg:grid-cols-2 gap-8">

                        {points.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-3xl
                                    border
                                    border-gray-100
                                    shadow-lg
                                    p-8
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="flex gap-5">

                                    <div
                                        className="
                                            w-16
                                            h-16
                                            rounded-2xl
                                            bg-red-50
                                            text-red-700
                                            text-2xl
                                            flex
                                            items-center
                                            justify-center
                                            shrink-0
                                        "
                                    >
                                        {item.icon}
                                    </div>

                                    <div>

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
                                            "
                                        >
                                            {item.content}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div
                        className="
                            mt-20
                            rounded-3xl
                            overflow-hidden
                            bg-gradient-to-r
                            from-[#071A3D]
                            to-[#0D5BC2]
                            p-12
                            text-center
                            text-white
                        "
                    >

                        <h2 className="text-3xl font-bold mb-5">
                            A Trusted Partner For Healthcare Professionals
                        </h2>

                        <p
                            className="
                                max-w-5xl
                                mx-auto
                                text-white/90
                                leading-8
                                mb-8
                            "
                        >
                            Choosing True Legal Consultant means gaining a
                            trusted partner focused entirely on safeguarding
                            the interests of healthcare professionals, so
                            you can focus on what you do best—providing
                            quality medical care with confidence and security.
                        </p>

                        <a
                            href="/contact"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                px-8
                                py-4
                                rounded-xl
                                bg-red-700
                                hover:bg-red-800
                                font-semibold
                                transition-all
                            "
                        >
                            Contact Our Experts
                        </a>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
}