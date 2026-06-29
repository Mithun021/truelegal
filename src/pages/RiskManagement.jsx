import { Helmet } from "react-helmet-async";
import {
    FaShieldAlt,
    FaHospital,
    // FaUserMd,
    FaBalanceScale,
    FaFileContract,
    FaCheckCircle,
    FaClipboardList,
    FaBriefcaseMedical,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function RiskManagement() {

    const sections = [
        {
            icon: <FaShieldAlt />,
            title: "Errors and Omissions (E&O) Insurance for Professionals",
            content: `
            Errors and Omissions (E&O) insurance, also known as Professional Liability Insurance, provides crucial protection against claims of negligence, breach of duty, or errors in professional service. This policy helps professionals, organizations, and institutions safeguard their interests in case clients file claims for errors in services or advice received.
            `,
        },

        {
            icon: <FaBriefcaseMedical />,
            title: "Benefits of E&O Insurance for Medical Professionals",
            list: [
                "Misdiagnosis",
                "Negligence",
                "Surgical errors",
                "Incorrect treatment or medication administration",
                "Inadequate advice provided to patients",
            ],
            content: `
            The medical field is particularly vulnerable to liability risks, as even minor errors can lead to serious legal and financial consequences. E&O insurance covers legal expenses and damages that the insured may be required to pay if deemed liable by a court or competent authority.
            E&O insurance protects not only the medical establishment but also its staff, covering risks associated with vicarious liability.
            `,
        },

        {
            icon: <FaHospital />,
            title: "Why Medical Establishments Should Opt for E&O Insurance",
            content: `
            In cases of litigation, patients or their families often file lawsuits against both individual practitioners and the institutions they work for. While individual doctors may carry their own liability coverage, E&O insurance extends this protection to the entire establishment, ensuring that both the facility and all associated professionals are covered.
            `,
        },

        {
            icon: <FaBalanceScale />,
            title: "Selecting the Best Errors and Omissions Insurance Policy",
            content: `
            E&O Insurance is specifically tailored to cover breaches of duty, protect professionals and businesses from claims, and provide legal defense coverage. At True Legal Consultants, we offer affordable, high-quality policies designed to address the unique requirements of the medical community.
            `,
        },

        {
            icon: <FaClipboardList />,
            title: "Get Expert Guidance and Secure Your Policy",
            list: [
                "Defense and legal expenses",
                "Coverage for errors, omissions, and breach of duty",
                "Protection for both individual practitioners and the medical establishment",
            ],
            content: `
            If you are new to E&O insurance, our experienced team is available to guide you through the details, helping you choose the right policy based on your needs.
            `,
        },

        {
            icon: <FaFileContract />,
            title: "How to Invest in E&O Insurance",
            content: `
            Choosing the right insurance policy is a significant decision for medical professionals. Our team is dedicated to helping you understand and maximize the benefits of E&O coverage, ensuring that you are fully protected against unforeseen legal challenges.
            `,
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Risk Management | True Legal Consultant
                </title>

                <meta
                    name="description"
                    content="Errors & Omissions Insurance, Risk Management and Legal Protection for Healthcare Professionals."
                />
            </Helmet>

            <Breadcrumb title="Risk Management" />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Hero */}

                    <div className="text-center mb-16">

                        <span
                            className="
                                inline-block
                                px-5
                                py-2
                                rounded-full
                                bg-red-50
                                text-red-700
                                font-semibold
                                text-sm
                                mb-4
                            "
                        >
                            Errors & Omissions Insurance
                        </span>

                        <h1
                            className="
                                text-4xl
                                lg:text-5xl
                                font-bold
                                text-[#071A3D]
                                mb-6
                            "
                        >
                            Risk Management
                        </h1>

                        <p
                            className="
                                max-w-4xl
                                mx-auto
                                text-gray-600
                                leading-8
                            "
                        >
                            Legal Support and Protection for Medical
                            Professionals, Clinics, Diagnostic Centres
                            and Hospitals.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="space-y-8">

                        {sections.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    border
                                    border-gray-100
                                    shadow-lg
                                    hover:shadow-2xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="flex flex-col md:flex-row gap-6">

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

                                    <div className="flex-1">

                                        <h2
                                            className="
                                                text-2xl
                                                font-bold
                                                text-[#071A3D]
                                                mb-4
                                            "
                                        >
                                            {item.title}
                                        </h2>

                                        <p
                                            className="
                                                text-gray-600
                                                leading-8
                                                mb-5
                                            "
                                        >
                                            {item.content}
                                        </p>

                                        {item.list && (

                                            <div
                                                className="
                                                    grid
                                                    md:grid-cols-2
                                                    gap-4
                                                "
                                            >

                                                {item.list.map(
                                                    (
                                                        point,
                                                        i
                                                    ) => (
                                                        <div
                                                            key={i}
                                                            className="
                                                                flex
                                                                items-start
                                                                gap-3
                                                                bg-slate-50
                                                                rounded-xl
                                                                p-4
                                                            "
                                                        >
                                                            <FaCheckCircle
                                                                className="
                                                                    text-red-700
                                                                    mt-1
                                                                "
                                                            />

                                                            <span>
                                                                {point}
                                                            </span>
                                                        </div>
                                                    )
                                                )}

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div
                        className="
                            mt-16
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

                        <h3 className="text-3xl font-bold mb-5">
                            Secure Your Practice Today
                        </h3>

                        <p
                            className="
                                max-w-4xl
                                mx-auto
                                text-white/90
                                leading-8
                                mb-8
                            "
                        >
                            Contact True Legal Consultants to secure your
                            practice with the best Errors and Omissions
                            Insurance policy tailored for the medical
                            sector.
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