export default function BlogDetailsSkeleton() {

    return (

        <div className="animate-pulse">

            {/* Hero */}

            <div
                className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-xl
                    border
                    border-gray-100
                    mb-10
                "
            >

                {/* Image */}

                <div className="h-[420px] bg-gray-200"></div>

                <div className="p-10">

                    {/* Date */}

                    <div className="h-4 w-40 bg-gray-200 rounded mb-6"></div>

                    {/* Title */}

                    <div className="h-10 w-full bg-gray-200 rounded mb-4"></div>

                    <div className="h-10 w-3/4 bg-gray-200 rounded"></div>

                </div>

            </div>

            {/* Article */}

            <div
                className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    border
                    border-gray-100
                    p-10
                "
            >

                {

                    [...Array(10)].map((_, index) => (

                        <div
                            key={index}
                            className="
                                h-5
                                bg-gray-200
                                rounded
                                mb-5
                            "
                        />

                    ))

                }

            </div>

        </div>

    );

}