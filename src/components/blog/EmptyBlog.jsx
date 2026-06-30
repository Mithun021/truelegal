export default function EmptyBlog() {

    return (

        <div className="py-24 text-center">

            <div
                className="
                    inline-flex
                    items-center
                    justify-center
                    w-24
                    h-24
                    rounded-full
                    bg-red-50
                    mb-6
                "
            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h8l8 8v8a2 2 0 01-2 2z"
                    />
                </svg>

            </div>

            <h2 className="text-2xl font-bold text-[#071A3D] mb-3">

                No Blogs Found

            </h2>

            <p className="text-gray-500">

                There are currently no blogs available.

            </p>

        </div>

    );

}