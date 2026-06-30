import { FaCalendarAlt } from "react-icons/fa";

export default function BlogHero({ blog }) {

    const publishDate = new Date(blog.created_at).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );

    const imageUrl = blog.thumbnail
        ? `${import.meta.env.VITE_IMAGE_URL}/${blog.thumbnail}`
        : "https://placehold.co/1200x600?text=No+Image";

    return (

        <section
            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-xl
                border
                border-gray-100
                mb-12
            "
        >

            {/* Image */}

            <div className="overflow-hidden">

                <img
                    src={imageUrl}
                    alt={blog.title}
                    className="
                        w-full
                        h-[260px]
                        md:h-[420px]
                        object-cover
                    "
                    loading="lazy"
                />

            </div>

            {/* Content */}

            <div className="p-8 lg:p-10">

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-gray-500
                        mb-5
                    "
                >

                    <FaCalendarAlt />

                    <span>{publishDate}</span>

                </div>

                <h1
                    className="
                        text-3xl
                        lg:text-5xl
                        font-bold
                        text-[#071A3D]
                        leading-tight
                    "
                >
                    {blog.title}
                </h1>

            </div>

        </section>

    );

}