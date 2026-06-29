import { Helmet } from "react-helmet-async";
import {
    FaUserMd,
    FaHospital,
    FaShieldAlt,
    FaBalanceScale,
    FaFileMedical,
    FaAmbulance,
    FaHeartbeat,
    FaClipboardCheck,
    FaExclamationTriangle,
    FaCheckCircle,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function DeathInOT() {

    const sections = [
        {
            icon: <FaUserMd />,
            title: "Managing Cases Within Expertise and Resources",
            content: (
                <>
                    <p className="mb-4">
                        Treat Cases Matching Your Expertise
                    </p>

                    <ul className="space-y-2 list-disc pl-5">
                        <li>Qualifications</li>
                        <li>Available Infrastructure</li>
                        <li>Competence and Skills</li>
                    </ul>

                    <div className="mt-5 bg-red-50 border-l-4 border-red-700 p-4 rounded-lg">
                        <strong>Legal Consideration</strong>
                        <p className="mt-2">
                            Practicing beyond one’s qualifications, skills, or resources may legally be deemed negligence. The law requires a higher level of qualification and infrastructure for more complex treatments.
                        </p>
                    </div>

                    <p className="mt-4">
                        Note: Providing services with inadequate facilities can be classified as a deficiency, except in emergencies.
                    </p>
                </>
            ),
        },

        {
            icon: <FaAmbulance />,
            title: "Recognize and Address Complications Promptly",
            content: (
                <>
                    <ul className="space-y-3 list-disc pl-5">
                        <li>
                            Prevent or manage complications as soon as they arise.
                        </li>
                        <li>
                            If the case exceeds your expertise, refer the patient to an appropriate specialist.
                        </li>
                        <li>
                            Transfer patients needing advanced care in a fully equipped ambulance and, where possible, accompany them.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            icon: <FaHeartbeat />,
            title: "Handling Unexpected Patient Deaths in Medical Practice",
            content: (
                <>
                    <p>
                        Medical practitioners should be prepared for handling unexpected deaths, whether they occur after procedures, surgeries, or other medical interventions.
                    </p>
                </>
            ),
        },

        {
            icon: <FaBalanceScale />,
            title: "Legal and Ethical Protocol",
            content: (
                <>
                    <ul className="space-y-3 list-disc pl-5">
                        <li>
                            Consult with colleagues for validation, even if the case has reached a point beyond intervention.
                        </li>
                        <li>
                            Avoid transferring critically ill or deceased patients.
                        </li>
                        <li>
                            Ensure all medical records and notes are thoroughly documented before pronouncing death.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            icon: <FaClipboardCheck />,
            title: "Declaring Death Respectfully",
            content: (
                <>
                    <ul className="space-y-3 list-disc pl-5">
                        <li>Ensure thorough documentation before declaration.</li>

                        <li>
                            Speak to family members empathetically and with transparency about the circumstances.
                        </li>

                        <li>
                            The senior-most doctor should handle the declaration to avoid legal complications later.
                        </li>

                        <li>
                            Avoid discussing pending bills or using insensitive language; instead, show respect and understanding.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            icon: <FaFileMedical />,
            title: "Informing Police and Requesting a Postmortem",
            content: (
                <>
                    <ul className="space-y-3 list-disc pl-5">
                        <li>
                            Notifying the police does not require family consent, as it’s part of the official process.
                        </li>

                        <li>
                            A “no negligence” statement from the family does not waive legal liability; proper documentation and protocol adherence are essential.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            icon: <FaShieldAlt />,
            title: "Emerging Insurance Sectors Affecting Healthcare Practice",
            content: (
                <>
                    <h4 className="font-bold text-[#071A3D] mb-2">
                        Mediclaim Policies
                    </h4>

                    <p className="mb-5">
                        These policies, often involving third-party administrators, provide cashless treatment options for policyholders, thereby changing the dynamics of patient care.
                    </p>

                    <h4 className="font-bold text-[#071A3D] mb-2">
                        Medical Indemnity and Comprehensive Coverage
                    </h4>

                    <p>
                        Indemnity policies protect doctors and hospitals against claims of negligence. Comprehensive plans now cover property, vehicles, indemnity, errors, and omissions, offering broader protection to healthcare professionals.
                    </p>
                </>
            ),
        },

        {
            icon: <FaHospital />,
            title: "Key Elements and Basis of an Insurance Policy",
            content: (
                <>
                    <h4 className="font-bold mb-2">
                        Insurance Contract Elements
                    </h4>

                    <ul className="space-y-3 list-disc pl-5">
                        <li>
                            Proposal Form: This form should fully disclose all facts related to the insured object or individual.
                        </li>

                        <li>
                            Premium Payment: The premium aligns with the insurance amount as per standard rates.
                        </li>

                        <li>
                            Liability of Insurer: The insurer’s obligation begins when the insured experiences a loss within the covered policy limits.
                        </li>
                    </ul>
                </>
            ),
        },

        {
            icon: <FaCheckCircle />,
            title: "Insurance Purpose",
            content: (
                <>
                    <p>
                        Insurance is based on managing risks by covering losses experienced by insured parties. For example, doctors pay indemnity policy premiums, and insurance providers compensate those facing negligence claims.
                    </p>
                </>
            ),
        },

        {
            icon: <FaExclamationTriangle />,
            title: "Understanding Risk",
            content: (
                <>
                    <p className="mb-4">
                        Risk is inherent in medical practice and can include anything from rare allergic reactions to unexpected surgical complications.
                    </p>

                    <p>
                        Risk is essentially unpredictable and can occur unexpectedly. When it happens, it may lead to claims and actions for compensation.
                    </p>
                </>
            ),
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Death in OT | True Legal Consultant
                </title>
            </Helmet>

            <Breadcrumb title="Death in OT" />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-16">

                        <span className="text-red-700 font-semibold uppercase tracking-[2px]">
                            Healthcare Risk Management
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold text-[#071A3D] mt-4 mb-6">
                            Preventing and Managing Mishaps
                        </h1>

                        <p className="max-w-4xl mx-auto text-gray-600 leading-8">
                            A Guide for Legal Safeguarding in Healthcare
                        </p>

                    </div>

                    <div className="space-y-8">

                        {sections.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow-lg
                                    border
                                    border-gray-100
                                    hover:shadow-xl
                                    transition
                                "
                            >

                                <div className="flex flex-col md:flex-row gap-5">

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

                                        <h2 className="text-2xl font-bold text-[#071A3D] mb-4">
                                            {item.title}
                                        </h2>

                                        <div className="text-gray-700 leading-8">
                                            {item.content}
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div
                        className="
                            mt-16
                            bg-gradient-to-r
                            from-[#071A3D]
                            to-[#0D5BC2]
                            rounded-3xl
                            p-10
                            text-center
                            text-white
                        "
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            Legal Protection Starts With Prevention
                        </h3>

                        <p className="max-w-4xl mx-auto leading-8">
                            By adhering to these best practices, healthcare professionals can better protect themselves legally and ensure their practice remains compliant and secure in the face of potential mishaps. True Legal Consultant is here to support you with expert guidance and comprehensive risk management solutions.
                        </p>
                    </div>

                </div>

            </section>

        </MainLayout>
    );
}