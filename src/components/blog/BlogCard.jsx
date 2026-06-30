import { Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function BlogCard({ blog }) {

    const imageUrl = blog.thumbnail
        ? `${import.meta.env.VITE_IMAGE_URL}/${blog.thumbnail}`
        : "https://placehold.co/600x400?text=No+Image";

    const publishDate = new Date(blog.created_at).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );

    return (
        <article
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
                group
            "
        >
            {/* Thumbnail */}

            <div className="overflow-hidden">

                <img
                    src={imageUrl}
                    alt={blog.title}
                    className="
                        w-full
                        h-64
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
                />

            </div>

            {/* Content */}

            <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">

                    <FaCalendarAlt className="text-red-700" />

                    <span>{publishDate}</span>

                </div>

                <h2
                    className="
                        text-xl
                        font-bold
                        text-[#071A3D]
                        line-clamp-2
                        mb-3
                    "
                >
                    {blog.title}
                </h2>

                <p
                    className="
                        text-gray-600
                        leading-7
                        line-clamp-3
                        mb-6
                    "
                >
                    {blog.sort_description}
                </p>

                <Link
                    to={`/blogs/${blog.slug}`}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        font-semibold
                        text-red-700
                        hover:text-red-800
                        transition
                    "
                >
                    Read More

                    <FaArrowRight className="text-sm" />
                </Link>

            </div>
        </article>
    );
}