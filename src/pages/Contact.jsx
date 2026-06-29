import { Helmet } from "react-helmet-async";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaPaperPlane,
    FaBuilding,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

import {
    COMPANY,
    SOCIAL_LINKS,
} from "../utils/constants";

export default function Contact() {

    const offices = [
        {
            title: "Head Office",
            address: COMPANY.head_office,
        },
        {
            title: "Registered Office",
            address: COMPANY.registered_office,
        },
        {
            title: "Corporate Office",
            address: COMPANY.corporate_office,
        },
        {
            title: "Zonal Office",
            address: COMPANY.zonal_office,
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Contact Us | True Legal Consultant
                </title>

                <meta
                    name="description"
                    content="Contact True Legal Consultant for medico legal advisory, risk management, indemnity guidance and healthcare legal support."
                />
            </Helmet>

            <Breadcrumb title="Contact Us" />

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-4">

                    {/* Heading */}

                    <div className="text-center mb-14">

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
                            Get In Touch
                        </span>

                        <h1
                            className="
                                text-4xl
                                lg:text-5xl
                                font-bold
                                text-[#071A3D]
                                mb-4
                            "
                        >
                            Contact Our Legal Experts
                        </h1>

                        <p
                            className="
                                text-gray-600
                                max-w-3xl
                                mx-auto
                            "
                        >
                            Connect with our professional team for
                            medico-legal consultation, indemnity
                            guidance, risk management and legal
                            advisory services.
                        </p>

                    </div>

                    {/* Main Section */}

                    <div className="grid lg:grid-cols-12 gap-8">

                        {/* LEFT */}

                        <div className="lg:col-span-4">

                            <div
                                className="
                                    bg-gradient-to-br
                                    from-[#071A3D]
                                    to-[#0D5BC2]
                                    rounded-3xl
                                    p-8
                                    text-white
                                    h-full
                                    shadow-2xl
                                "
                            >

                                <span
                                    className="
                                        inline-block
                                        px-4
                                        py-2
                                        border
                                        border-white/20
                                        rounded-full
                                        text-sm
                                        mb-6
                                    "
                                >
                                    TRUE LEGAL CONSULTANT
                                </span>

                                <h3
                                    className="
                                        text-3xl
                                        font-bold
                                        mb-8
                                    "
                                >
                                    Contact Information
                                </h3>

                                <div className="space-y-6">

                                    <a
                                        href={`tel:${COMPANY.phone}`}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <FaPhoneAlt />
                                        </div>

                                        <div>
                                            <p className="text-white/70 text-sm">
                                                Phone Number
                                            </p>

                                            <p className="font-medium">
                                                {COMPANY.phone}
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href={`mailto:${COMPANY.email}`}
                                        className="flex gap-4"
                                    >
                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <FaEnvelope />
                                        </div>

                                        <div>
                                            <p className="text-white/70 text-sm">
                                                Email Address
                                            </p>

                                            <p className="font-medium break-all">
                                                {COMPANY.email}
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex gap-4">

                                        <div
                                            className="
                                                w-12
                                                h-12
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                            "
                                        >
                                            <FaMapMarkerAlt />
                                        </div>

                                        <div>
                                            <p className="text-white/70 text-sm">
                                                Location
                                            </p>

                                            <p className="font-medium">
                                                {COMPANY.office_address}
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                {/* Social */}

                                <div className="mt-10">

                                    <h4
                                        className="
                                            font-semibold
                                            mb-4
                                        "
                                    >
                                        Follow Us
                                    </h4>

                                    <div className="flex gap-3">

                                        <a
                                            href={SOCIAL_LINKS.facebook}
                                            className="
                                                w-11
                                                h-11
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-red-700
                                                transition
                                            "
                                        >
                                            <FaFacebookF />
                                        </a>

                                        <a
                                            href={SOCIAL_LINKS.instagram}
                                            className="
                                                w-11
                                                h-11
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-red-700
                                                transition
                                            "
                                        >
                                            <FaInstagram />
                                        </a>

                                        <a
                                            href={SOCIAL_LINKS.linkedin}
                                            className="
                                                w-11
                                                h-11
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-red-700
                                                transition
                                            "
                                        >
                                            <FaLinkedinIn />
                                        </a>

                                        <a
                                            href={SOCIAL_LINKS.youtube}
                                            className="
                                                w-11
                                                h-11
                                                rounded-full
                                                bg-white/10
                                                flex
                                                items-center
                                                justify-center
                                                hover:bg-red-700
                                                transition
                                            "
                                        >
                                            <FaYoutube />
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* RIGHT FORM */}

                        <div className="lg:col-span-8">

                            <div
                                className="
                                    bg-white
                                    rounded-3xl
                                    p-8
                                    shadow-xl
                                    border
                                "
                            >

                                <h3
                                    className="
                                        text-3xl
                                        font-bold
                                        text-[#071A3D]
                                        mb-2
                                    "
                                >
                                    Send Us A Message
                                </h3>

                                <p
                                    className="
                                        text-gray-600
                                        mb-8
                                    "
                                >
                                    Fill out the form and our team
                                    will get back to you shortly.
                                </p>

                                <form className="space-y-5">

                                    <div className="grid md:grid-cols-2 gap-5">

                                        <div>
                                            <label className="block mb-2 font-medium">
                                                Full Name
                                            </label>

                                            <input
                                                type="text"
                                                className="w-full border rounded-xl px-4 py-3"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 font-medium">
                                                Phone Number
                                            </label>

                                            <input
                                                type="text"
                                                className="w-full border rounded-xl px-4 py-3"
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            className="w-full border rounded-xl px-4 py-3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            className="w-full border rounded-xl px-4 py-3"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Message
                                        </label>

                                        <textarea
                                            rows="5"
                                            className="w-full border rounded-xl px-4 py-3"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="
                                            bg-red-700
                                            hover:bg-red-800
                                            text-white
                                            px-8
                                            py-4
                                            rounded-xl
                                            font-semibold
                                            flex
                                            items-center
                                            gap-2
                                        "
                                    >
                                        <FaPaperPlane />
                                        Send Message
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                    {/* Office Addresses */}

                    <div className="mt-20">

                        <div className="text-center mb-12">

                            <h2
                                className="
                                    text-4xl
                                    font-bold
                                    text-[#071A3D]
                                    mb-3
                                "
                            >
                                Our Offices
                            </h2>

                            <p className="text-gray-600">
                                Presence across multiple locations
                                to serve you better.
                            </p>

                        </div>

                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                            {offices.map((office, index) => (

                                <div
                                    key={index}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        p-6
                                        shadow-lg
                                        border
                                        hover:-translate-y-2
                                        hover:shadow-2xl
                                        transition-all
                                    "
                                >

                                    <div
                                        className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-red-50
                                            text-red-700
                                            flex
                                            items-center
                                            justify-center
                                            mb-5
                                        "
                                    >
                                        <FaBuilding size={22} />
                                    </div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-[#071A3D]
                                            mb-3
                                        "
                                    >
                                        {office.title}
                                    </h3>

                                    <p
                                        className="
                                            text-gray-600
                                            leading-7
                                            text-sm
                                        "
                                    >
                                        {office.address}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
}