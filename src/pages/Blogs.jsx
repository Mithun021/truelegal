import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import {
    FaCalendarAlt,
    FaArrowRight,
    FaUserTie,
} from "react-icons/fa";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

export default function Blogs() {

    const blogs = [
        {
            id: 1,
            title: "Understanding Medical Negligence Laws In India",
            image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
            date: "15 June 2026",
            author: "True Legal Team",
            excerpt:
                "A comprehensive guide to medical negligence laws, legal obligations and patient rights in India.",
        },
        {
            id: 2,
            title: "Professional Indemnity Insurance: Why Every Doctor Needs It",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
            date: "10 June 2026",
            author: "Legal Advisory Team",
            excerpt:
                "Learn how indemnity insurance protects healthcare professionals from financial and legal liabilities.",
        },
        {
            id: 3,
            title: "Risk Management Strategies For Hospitals",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d",
            date: "05 June 2026",
            author: "Healthcare Experts",
            excerpt:
                "Effective risk management practices that help hospitals reduce litigation and improve compliance.",
        },
        {
            id: 4,
            title: "Patient Consent: Legal Importance In Medical Practice",
            image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb",
            date: "01 June 2026",
            author: "True Legal Team",
            excerpt:
                "Everything healthcare providers should know about informed consent and legal documentation.",
        },
        {
            id: 5,
            title: "How To Handle Patient Complaints Professionally",
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
            date: "28 May 2026",
            author: "Medico Legal Experts",
            excerpt:
                "Practical steps for handling patient grievances while maintaining legal and ethical standards.",
        },
        {
            id: 6,
            title: "Legal Compliance Checklist For Clinics",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
            date: "22 May 2026",
            author: "Compliance Team",
            excerpt:
                "Important registrations, licenses and compliance requirements every clinic should follow.",
        },
    ];

    return (
        <MainLayout>

            <Helmet>
                <title>
                    Blogs | True Legal Consultant
                </title>

                <meta
                    name="description"
                    content="Read healthcare legal updates, medico legal insights, risk management articles and professional guidance from True Legal Consultant."
                />
            </Helmet>

            <Breadcrumb title="Blogs" />

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
                                font-semibold
                                mb-4
                            "
                        >
                            Latest Articles
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
                            Healthcare Legal Insights
                        </h1>

                        <p
                            className="
                                max-w-3xl
                                mx-auto
                                text-gray-600
                            "
                        >
                            Stay updated with the latest medico-legal
                            developments, healthcare regulations,
                            professional indemnity guidance and
                            risk management strategies.
                        </p>

                    </div>

                    {/* Featured Blog */}

                    <div
                        className="
                            bg-white
                            rounded-3xl
                            overflow-hidden
                            shadow-xl
                            border
                            border-gray-100
                            mb-16
                        "
                    >

                        <div className="grid lg:grid-cols-2">

                            <div>
                                <img
                                    src={blogs[0].image}
                                    alt=""
                                    className="
                                        w-full
                                        h-full
                                        object-cover
                                        min-h-[350px]
                                    "
                                />
                            </div>

                            <div className="p-10 flex flex-col justify-center">

                                <span
                                    className="
                                        inline-block
                                        w-fit
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-red-50
                                        text-red-700
                                        font-semibold
                                        text-sm
                                        mb-4
                                    "
                                >
                                    Featured Article
                                </span>

                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                        text-[#071A3D]
                                        mb-4
                                    "
                                >
                                    {blogs[0].title}
                                </h2>

                                <p className="text-gray-600 leading-8 mb-6">
                                    {blogs[0].excerpt}
                                </p>

                                <div className="flex gap-6 text-sm text-gray-500 mb-8">

                                    <span className="flex items-center gap-2">
                                        <FaCalendarAlt />
                                        {blogs[0].date}
                                    </span>

                                    <span className="flex items-center gap-2">
                                        <FaUserTie />
                                        {blogs[0].author}
                                    </span>

                                </div>

                                <Link
                                    to={`/blogs/${blogs[0].id}`}
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        bg-red-700
                                        hover:bg-red-800
                                        text-white
                                        px-7
                                        py-4
                                        rounded-xl
                                        font-semibold
                                        transition
                                        w-fit
                                    "
                                >
                                    Read Full Article
                                    <FaArrowRight />
                                </Link>

                            </div>

                        </div>

                    </div>

                    {/* Blog Grid */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {blogs.slice(1).map((blog) => (

                            <div
                                key={blog.id}
                                className="
                                    bg-white
                                    rounded-3xl
                                    overflow-hidden
                                    shadow-lg
                                    border
                                    border-gray-100
                                    hover:-translate-y-3
                                    hover:shadow-2xl
                                    transition-all
                                    duration-300
                                "
                            >

                                <div className="overflow-hidden">

                                    <img
                                        src={blog.image}
                                        alt=""
                                        className="
                                            w-full
                                            h-64
                                            object-cover
                                            hover:scale-110
                                            transition-all
                                            duration-700
                                        "
                                    />

                                </div>

                                <div className="p-6">

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-4
                                            text-sm
                                            text-gray-500
                                            mb-4
                                        "
                                    >
                                        <span className="flex items-center gap-2">
                                            <FaCalendarAlt />
                                            {blog.date}
                                        </span>
                                    </div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            text-[#071A3D]
                                            mb-3
                                            line-clamp-2
                                        "
                                    >
                                        {blog.title}
                                    </h3>

                                    <p
                                        className="
                                            text-gray-600
                                            leading-7
                                            mb-6
                                            line-clamp-3
                                        "
                                    >
                                        {blog.excerpt}
                                    </p>

                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            font-semibold
                                            text-red-700
                                            hover:text-red-800
                                        "
                                    >
                                        Read More
                                        <FaArrowRight />
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </MainLayout>
    );
}