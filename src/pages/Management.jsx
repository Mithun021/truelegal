import { Helmet } from "react-helmet-async";
// import {
//   FaLinkedinIn,
//   FaEnvelope,
// } from "react-icons/fa";

import teamData from "../pages/data/teamData";
import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Management() {
  return (
    <MainLayout>
        <Helmet>
            <title>
            Management Team | True Path Legal Consultant
            </title>

            <meta
            name="description"
            content="Meet the experienced leadership team behind True Path Legal Consultant."
            />
        </Helmet>
        <Breadcrumb title="Management" />
        <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

            {/* Heading */}

            <div className="text-center mb-16">

            <span
                className="
                inline-block
                px-5
                py-2
                rounded-full
                bg-red-50
                text-red-700
                text-sm
                font-semibold
                mb-4
                "
            >
                Leadership Team
            </span>

            <h2
                className="
                text-4xl
                lg:text-5xl
                font-bold
                text-[#071A3D]
                mb-5
                "
            >
                Meet Our Management Team
            </h2>

            <p
                className="
                max-w-3xl
                mx-auto
                text-gray-600
                leading-8
                "
            >
                Our leadership team brings extensive expertise in
                legal consulting, risk management, professional
                protection, and strategic business guidance.
            </p>

            </div>

            {/* Team Grid */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {teamData.map((member) => (
                <div
                key={member.id}
                className="
                    group
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    border
                    border-slate-200
                    shadow-sm
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-500
                "
                >

                {/* Image */}

                <div className="relative overflow-hidden">

                    <img
                    src={member.image}
                    alt={member.name}
                    className="
                        w-full
                        h-[350px]
                        object-cover
                        group-hover:scale-105
                        transition-all
                        duration-500
                    "
                    />

                    <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#071A3D]/80
                        via-transparent
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition-all
                        duration-500
                    "
                    />

                </div>

                {/* Content */}

                <div className="p-8 text-center">

                    <h3
                    className="
                        text-2xl
                        font-bold
                        text-[#071A3D]
                        mb-2
                    "
                    >
                    {member.name}
                    </h3>

                    <div
                    className="
                        inline-flex
                        items-center
                        px-4
                        py-2
                        rounded-full
                        bg-red-50
                        text-red-700
                        text-sm
                        font-semibold
                        mb-6
                    "
                    >
                    {member.designation}
                    </div>

                    <div className="w-16 h-1 bg-red-700 mx-auto mb-6 rounded-full" />

                    {/* <div className="flex justify-center gap-3">

                    <button
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        hover:bg-[#071A3D]
                        hover:text-white
                        transition-all
                        "
                    >
                        <FaLinkedinIn />
                    </button>

                    <button
                        className="
                        w-11
                        h-11
                        rounded-full
                        bg-slate-100
                        flex
                        items-center
                        justify-center
                        hover:bg-red-700
                        hover:text-white
                        transition-all
                        "
                    >
                        <FaEnvelope />
                    </button>

                    </div> */}

                </div>

                </div>
            ))}

            </div>

        </div>

        </section>
    </MainLayout>
  );
}