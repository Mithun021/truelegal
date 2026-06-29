import { Helmet } from "react-helmet-async";
import {
    FaShieldAlt,
    FaUserMd,
    FaHospital,
    // FaBalanceScale,
    FaExclamationTriangle,
    FaClock,
    FaCheckCircle,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Membership() {

    const benefits = [
        {
            icon: <FaShieldAlt />,
            title: "24/7 Protection for Medical Practice",
            description:
                "Our service offers around-the-clock coverage for a broad range of challenges and liabilities that many providers overlook. Our expertise is essential for any medical professional aiming to mitigate legal risks.",
        },
        {
            icon: <FaHospital />,
            title: "Hospital Equipment Liability and Maintenance",
            description:
                "Hospitals rely heavily on costly medical equipment maintained by various vendors. If a vendor fails in upkeep, it can lead to serious legal liabilities. We provide consultation to help address and manage these risks effectively.",
        },
        {
            icon: <FaUserMd />,
            title: "Professional Guidance for All Staff Levels",
            description:
                "Our consultants offer professional advice not only to doctors but also to nurses and unlicensed staff, ensuring all team members operate within legal boundaries.",
        },
    ];

    const crisisManagement = [
        {
            title: "Unexpected Death Events",
            description:
                "Immediate legal guidance following sudden or unexpected deaths, helping you manage sensitive matters with professionalism.",
        },
        {
            title: "Defamation Risk Management",
            description:
                "Support in managing potential media fallout after a death, preserving your reputation.",
        },
        {
            title: "High-Risk Scenarios",
            description:
                "Legal consultation for complex cases, such as anaphylaxis fatalities, post-spinal meningitis incidents, or issues arising during patient transfers.",
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    What is Membership | True Legal Consultant
                </title>

                <meta
                    name="description"
                    content="Membership benefits, legal protection, medico-legal support and crisis management services provided by True Legal Consultant."
                />
            </Helmet>

            <Breadcrumb title="What is Membership" />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Hero */}

                    <div className="text-center mb-14">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2
                                bg-red-50
                                text-red-700
                                px-5
                                py-2
                                rounded-full
                                font-semibold
                                text-sm
                                mb-5
                            "
                        >
                            <FaShieldAlt />
                            Membership Protection
                        </div>

                        <h1
                            className="
                                text-4xl
                                lg:text-5xl
                                font-bold
                                text-[#071A3D]
                                mb-5
                            "
                        >
                            True Legal Consultant Membership
                        </h1>

                    </div>

                    {/* Overview */}

                    <div
                        className="
                            bg-white
                            rounded-3xl
                            shadow-lg
                            border
                            border-gray-100
                            p-8
                            lg:p-10
                            mb-10
                        "
                    >
                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-[#071A3D]
                                mb-6
                            "
                        >
                            Membership Overview
                        </h2>

                        <p className="text-gray-700 leading-9">
                            Your membership with True Legal Consultant begins
                            from the date you sign up and extends through the
                            selected period you have chosen and paid for. From
                            the day payment is received, coverage starts—
                            ensuring that any legal action or issue must arise
                            within this membership period.
                        </p>

                        <p className="text-gray-700 leading-9 mt-5">
                            If a legal challenge involves a patient seen or
                            treated before your membership with us, it will be
                            considered as pre-membership, potentially affecting
                            your coverage eligibility.
                        </p>

                        <p className="text-gray-700 leading-9 mt-5">
                            To avoid coverage gaps, we advise renewing your
                            membership regularly, as consistent coverage aligns
                            with current health regulations and offers
                            continuous protection.
                        </p>

                    </div>

                    {/* Important Notice */}

                    <div
                        className="
                            bg-red-50
                            border-l-4
                            border-red-700
                            rounded-2xl
                            p-6
                            mb-14
                        "
                    >
                        <div className="flex gap-4">

                            <FaClock
                                className="
                                    text-red-700
                                    text-2xl
                                    mt-1
                                    shrink-0
                                "
                            />

                            <div>

                                <h3
                                    className="
                                        text-xl
                                        font-bold
                                        text-[#071A3D]
                                        mb-2
                                    "
                                >
                                    Coverage Eligibility Notice
                                </h3>

                                <p className="text-gray-700 leading-8">
                                    Any legal issue or action must arise during
                                    the active membership period. Cases related
                                    to patients treated before membership may
                                    be considered pre-membership matters.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Benefits */}

                    <div className="mb-16">

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-[#071A3D]
                                text-center
                                mb-10
                            "
                        >
                            Coverage Highlights
                        </h2>

                        <div className="grid lg:grid-cols-3 gap-7">

                            {benefits.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        p-8
                                        shadow-lg
                                        border
                                        border-gray-100
                                        hover:-translate-y-2
                                        transition-all
                                        duration-300
                                    "
                                >
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
                                            mb-5
                                        "
                                    >
                                        {item.icon}
                                    </div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-[#071A3D]
                                            mb-4
                                        "
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-8">
                                        {item.description}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Crisis Management */}

                    <div
                        className="
                            bg-white
                            rounded-3xl
                            shadow-lg
                            border
                            border-gray-100
                            overflow-hidden
                            mb-16
                        "
                    >
                        <div className="bg-[#071A3D] text-white p-7">

                            <div className="flex items-center gap-3">

                                <FaExclamationTriangle />

                                <h2 className="text-2xl font-bold">
                                    Crisis Management In Sensitive Situations
                                </h2>

                            </div>

                        </div>

                        <div className="p-8">

                            <div className="space-y-6">

                                {crisisManagement.map((item, index) => (

                                    <div
                                        key={index}
                                        className="
                                            flex
                                            items-start
                                            gap-4
                                            p-5
                                            rounded-2xl
                                            bg-slate-50
                                        "
                                    >
                                        <div
                                            className="
                                                w-10
                                                h-10
                                                rounded-full
                                                bg-red-700
                                                text-white
                                                flex
                                                items-center
                                                justify-center
                                                shrink-0
                                            "
                                        >
                                            <FaCheckCircle />
                                        </div>

                                        <div>

                                            <h3
                                                className="
                                                    font-bold
                                                    text-lg
                                                    text-[#071A3D]
                                                    mb-2
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-600 leading-8">
                                                {item.description}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Closing */}

                    <div
                        className="
                            bg-gradient-to-r
                            from-[#071A3D]
                            to-[#0D5BC2]
                            rounded-3xl
                            p-10
                            text-center
                            text-white
                        "
                    >
                        <h2 className="text-3xl font-bold mb-5">
                            Expert Support When You Need It Most
                        </h2>

                        <p
                            className="
                                max-w-4xl
                                mx-auto
                                text-white/90
                                leading-8
                                mb-8
                            "
                        >
                            With True Legal Consultant, medical professionals
                            and hospital administrators receive expert legal
                            support, tailored to handle even the most
                            challenging situations with confidence and
                            precision. Join us for unparalleled coverage and
                            peace of mind in every aspect of your practice.
                        </p>

                        <a
                            href="/contact"
                            className="
                                inline-flex
                                items-center
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