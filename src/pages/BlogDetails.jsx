import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import MainLayout from "../components/layout/MainLayout";
import Breadcrumb from "../components/common/Breadcrumb";

import { getBlog } from "../api/blogApi";

import BlogHero from "../components/blog/BlogHero";
import BlogContent from "../components/blog/BlogContent";
import BlogDetailsSkeleton from "../components/blog/BlogDetailsSkeleton";

export default function BlogDetails() {

    const { slug } = useParams();

    const [blog, setBlog] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchBlog();

    }, [slug]);

    const fetchBlog = async () => {

        try {

            setLoading(true);

            const response = await getBlog(slug);

            if (response.data.status) {

                setBlog(response.data.data);

            } else {

                setError("Blog not found.");

            }

        } catch (err) {

            console.error(err);

            setError("Blog not found.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <MainLayout>

            <Helmet>

                <title>

                    {blog
                        ? `${blog.title} | True Legal Consultant`
                        : "Blog Details | True Legal Consultant"}

                </title>

                <meta

                    name="description"

                    content={
                        blog?.sort_description ||
                        "Healthcare Legal Blog"
                    }

                />

            </Helmet>

            <Breadcrumb

                title={blog ? blog.title : "Blog Details"}

            />

            <section className="py-20 bg-slate-50">

                <div className="max-w-5xl mx-auto px-4">

                    {/* Loading */}

                    {

                        loading && (

                            <BlogDetailsSkeleton />

                        )

                    }

                    {/* Error */}

                    {

                        !loading && error && (

                            <div
                                className="
                                    bg-white
                                    rounded-3xl
                                    shadow-lg
                                    p-16
                                    text-center
                                "
                            >

                                <h2
                                    className="
                                        text-3xl
                                        font-bold
                                        text-red-700
                                        mb-4
                                    "
                                >

                                    {error}

                                </h2>

                                <p className="text-gray-500">

                                    The requested article could not be found.

                                </p>

                            </div>

                        )

                    }

                    {/* Blog */}

                    {

                        !loading &&
                        !error &&
                        blog && (

                            <>

                                <BlogHero

                                    blog={blog}

                                />

                                <BlogContent

                                    blog={blog}

                                />

                            </>

                        )

                    }

                </div>

            </section>

        </MainLayout>

    );

}