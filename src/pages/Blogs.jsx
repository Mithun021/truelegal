import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

import { getBlogs } from "../api/blogApi";

import BlogCard from "../components/blog/BlogCard";
import BlogSkeleton from "../components/blog/BlogSkeleton";
import EmptyBlog from "../components/blog/EmptyBlog";

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetchBlogs();

    }, []);

    const fetchBlogs = async () => {

        try {

            setLoading(true);

            const response = await getBlogs();

            if (response.data.status) {

                setBlogs(response.data.data);

            } else {

                setError("Unable to load blogs.");

            }

        } catch (err) {

            console.error(err);

            setError("Something went wrong.");

        } finally {

            setLoading(false);

        }

    };

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

                    {/* Loading */}

                    {

                        loading && (

                            <div

                                className="
                                    grid
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    gap-8
                                "

                            >

                                {

                                    [...Array(6)].map((_, index) => (

                                        <BlogSkeleton key={index} />

                                    ))

                                }

                            </div>

                        )

                    }

                    {/* Error */}

                    {

                        !loading && error && (

                            <div className="text-center py-24">

                                <h2 className="text-2xl font-bold text-red-700">

                                    {error}

                                </h2>

                            </div>

                        )

                    }

                    {/* Empty */}

                    {

                        !loading && !error && blogs.length === 0 && (

                            <EmptyBlog />

                        )

                    }

                    {/* Blog Grid */}

                    {

                        !loading &&
                        !error &&
                        blogs.length > 0 && (

                            <div

                                className="
                                    grid
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    gap-8
                                "

                            >

                                {

                                    blogs.map((blog) => (

                                        <BlogCard

                                            key={blog.id}

                                            blog={blog}

                                        />

                                    ))

                                }

                            </div>

                        )

                    }

                </div>

            </section>

        </MainLayout>

    );

}