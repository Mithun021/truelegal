import { Helmet } from "react-helmet-async";
import {
    FaFileSignature,
    FaCertificate,
    FaHospital,
    FaClinicMedical,
    FaUsers,
    FaWheelchair,
    FaCheckCircle,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function HospitalRequirement() {

    const legalPermissions = [
        {
            title: "Builder’s Agreement",
            description:
                "A formal agreement with the builder is necessary for any modifications, permissions, or usage changes related to the premises.",
        },
        {
            title: "Stamp Duty Payment",
            description:
                "Ensure that the required stamp duty for the builder’s agreement and property documentation is fully paid.",
        },
        {
            title: "Change of Land Use",
            description:
                "For premises originally designated as residential, obtain authorization from the local municipal authority to legally convert the use to medical or nursing home purposes.",
        },
        {
            title: "NOC from Builder",
            description:
                "Obtain consent from the builder for setting up a nursing home or hospital.",
        },
        {
            title: "NOC from Society (if applicable)",
            description:
                "If the facility is in a cooperative society, obtain their approval for hospital operations.",
        },
    ];

    const registrations = [
        "Nursing Home Registration",
        "Doctor’s Qualification and Registration Certificate",
        "Shop and Establishment Registration",
        "Biomedical Waste Registration with Pollution Control Board",
    ];

    const operationalRooms = [
        ["Operation Theatre (OT)", "Minimum 100 sq ft"],
        ["Labor Room", "Minimum 100 sq ft"],
        ["ICCU Room", "Minimum 100 sq ft per bed"],
        ["Special Room", "Minimum 100 sq ft per bed"],
        ["Second-Class Room", "Minimum 75 sq ft per bed"],
        ["General Ward", "Minimum 50 sq ft per bed"],
    ];

    const supportRooms = [
        "Nurse Room",
        "Resident Medical Officer (RMO) Room",
        "Sonography (Sono) Room",
        "X-Ray Room",
        "Sterilization Room",
        "Pharmacy Room",
        "Consulting Rooms",
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Requirement of Hospital | True Legal Consultant
                </title>
            </Helmet>

            <Breadcrumb title="Requirement of Hospital" />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Hero */}

                    <div className="text-center mb-16">

                        <span
                            className="
                                inline-block
                                bg-red-50
                                text-red-700
                                px-5
                                py-2
                                rounded-full
                                font-semibold
                                mb-4
                            "
                        >
                            Hospital Compliance Guide
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
                            Legal and Structural Requirements
                            <br />
                            for Opening a Hospital
                        </h1>

                        <p
                            className="
                                max-w-4xl
                                mx-auto
                                text-gray-600
                                leading-8
                            "
                        >
                            Opening a hospital or nursing home requires
                            careful planning, legal documentation,
                            and adherence to various regulatory requirements.
                        </p>

                    </div>

                    {/* Legal Agreements */}

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-8">

                            <FaFileSignature className="text-red-700 text-3xl" />

                            <h2 className="text-3xl font-bold text-[#071A3D]">
                                Legal Agreements and Permissions
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {legalPermissions.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        p-6
                                        shadow-lg
                                        border
                                        border-gray-100
                                        hover:-translate-y-2
                                        hover:shadow-2xl
                                        transition-all
                                    "
                                >

                                    <FaCheckCircle
                                        className="
                                            text-red-700
                                            text-xl
                                            mb-4
                                        "
                                    />

                                    <h3
                                        className="
                                            text-xl
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

                            ))}

                        </div>

                    </div>

                    {/* Registration */}

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-8">

                            <FaCertificate className="text-red-700 text-3xl" />

                            <h2 className="text-3xl font-bold text-[#071A3D]">
                                Registration and Compliance Certifications
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            {registrations.map((item, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white
                                        rounded-2xl
                                        p-6
                                        shadow-md
                                        border
                                    "
                                >
                                    <div className="flex gap-3">

                                        <FaCheckCircle
                                            className="
                                                text-green-600
                                                mt-1
                                            "
                                        />

                                        <span className="font-medium">
                                            {item}
                                        </span>

                                    </div>
                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Operational Rooms */}

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-8">

                            <FaHospital className="text-red-700 text-3xl" />

                            <h2 className="text-3xl font-bold text-[#071A3D]">
                                Minimum Space and Facility Requirements
                            </h2>

                        </div>

                        <div
                            className="
                                bg-white
                                rounded-3xl
                                overflow-hidden
                                shadow-xl
                            "
                        >

                            <table className="w-full">

                                <thead className="bg-[#071A3D] text-white">

                                    <tr>
                                        <th className="px-6 py-4 text-left">
                                            Operational Rooms
                                        </th>

                                        <th className="px-6 py-4 text-left">
                                            Requirement
                                        </th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {operationalRooms.map((item, index) => (

                                        <tr
                                            key={index}
                                            className="border-b"
                                        >
                                            <td className="px-6 py-4">
                                                {item[0]}
                                            </td>

                                            <td
                                                className="
                                                    px-6
                                                    py-4
                                                    text-red-700
                                                    font-semibold
                                                "
                                            >
                                                {item[1]}
                                            </td>
                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* Support Rooms */}

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-8">

                            <FaClinicMedical className="text-red-700 text-3xl" />

                            <h2 className="text-3xl font-bold text-[#071A3D]">
                                Support Rooms
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                            {supportRooms.map((room, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white
                                        p-6
                                        rounded-2xl
                                        shadow-md
                                        border
                                        hover:border-red-700
                                        transition
                                    "
                                >

                                    <h4
                                        className="
                                            font-semibold
                                            text-[#071A3D]
                                        "
                                    >
                                        {room}
                                    </h4>

                                    <p
                                        className="
                                            text-gray-500
                                            text-sm
                                            mt-2
                                        "
                                    >
                                        {room === "Consulting Rooms"
                                            ? "Minimum 100 sq ft per consulting doctor"
                                            : "Minimum 100 sq ft"}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Patient Area */}

                    <div className="mb-20">

                        <div className="flex items-center gap-3 mb-8">

                            <FaUsers className="text-red-700 text-3xl" />

                            <h2 className="text-3xl font-bold text-[#071A3D]">
                                Patient and Visitor Areas
                            </h2>

                        </div>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                Waiting Room: Minimum 100 sq ft.
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                Corridors: Minimum width of 3 ft, with a length of at least 10 ft.
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                Refreshments Room: Minimum 50 sq ft per bed capacity.
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                Toilets and Bathrooms: One toilet and bathroom should be available for every four beds.
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                Urinals: One urinal for every 25 OPD patients.
                            </div>

                        </div>

                    </div>

                    {/* Accessibility */}

                    <div
                        className="
                            bg-gradient-to-r
                            from-[#071A3D]
                            to-[#0D5BC2]
                            rounded-3xl
                            p-10
                            text-white
                        "
                    >

                        <div className="flex items-center gap-5">

                            <FaWheelchair className="text-5xl" />

                            <div>

                                <h3 className="text-3xl font-bold mb-2">
                                    Accessibility
                                </h3>

                                <p className="text-lg">
                                    Lift Specifications: A lift to accommodate patients,
                                    ideally with a size of 6 by 3 feet.
                                </p>

                            </div>

                        </div>

                        {/* Final Note */}

                        <div
                            className="
                                mt-12
                                bg-white
                                rounded-3xl
                                p-8
                                lg:p-10
                                shadow-xl
                                border
                                border-gray-100
                            "
                        >

                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#071A3D]
                                    mb-5
                                "
                            >
                                Compliance & Legal Assistance
                            </h3>

                            <p
                                className="
                                    text-gray-600
                                    leading-8
                                    mb-5
                                "
                            >
                                By meeting these legal and infrastructure requirements,
                                you ensure your hospital or nursing home is fully
                                compliant with regulatory standards and ready to serve
                                the community.
                            </p>

                            <p
                                className="
                                    text-gray-600
                                    leading-8
                                "
                            >
                                Contact True Legal Consultants for assistance in obtaining
                                the necessary permits, agreements, and certifications,
                                as well as guidance on legal compliance throughout the
                                establishment process.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
}