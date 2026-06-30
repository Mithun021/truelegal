import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BlogContent({ blog }) {

    return (

        <section
            className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-gray-100
                p-8
                lg:p-12
            "
        >

            {/* Article */}

            <article
                className="
                    prose
                    prose-lg
                    max-w-none

                    prose-headings:text-[#071A3D]
                    prose-headings:font-bold

                    prose-p:text-gray-700
                    prose-p:leading-8

                    prose-a:text-red-700
                    prose-a:no-underline
                    hover:prose-a:underline

                    prose-img:rounded-2xl
                    prose-img:shadow-lg

                    prose-ul:text-gray-700
                    prose-ol:text-gray-700

                    prose-strong:text-[#071A3D]

                    prose-blockquote:border-red-700
                    prose-blockquote:text-gray-700
                "
                dangerouslySetInnerHTML={{
                    __html: blog.content,
                }}
            />

            {/* Divider */}

            <div className="border-t mt-12 pt-8">

                <Link
                    to="/blogs"
                    className="
                        inline-flex
                        items-center
                        gap-3

                        px-6
                        py-3

                        rounded-xl

                        bg-[#071A3D]
                        hover:bg-red-700

                        text-white
                        font-semibold

                        transition-all
                        duration-300
                    "
                >

                    <FaArrowLeft />

                    Back To Blogs

                </Link>

            </div>

        </section>

    );

}