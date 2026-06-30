export default function BlogSkeleton() {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-gray-100
                shadow-lg
                animate-pulse
            "
        >

            {/* Image */}

            <div
                className="
                    h-64
                    w-full
                    bg-gray-200
                "
            />

            {/* Content */}

            <div className="p-6">

                {/* Date */}

                <div
                    className="
                        h-4
                        w-32
                        bg-gray-200
                        rounded
                        mb-5
                    "
                />

                {/* Title */}

                <div
                    className="
                        h-6
                        w-full
                        bg-gray-200
                        rounded
                        mb-3
                    "
                />

                <div
                    className="
                        h-6
                        w-3/4
                        bg-gray-200
                        rounded
                        mb-5
                    "
                />

                {/* Description */}

                <div
                    className="
                        h-4
                        w-full
                        bg-gray-200
                        rounded
                        mb-2
                    "
                />

                <div
                    className="
                        h-4
                        w-full
                        bg-gray-200
                        rounded
                        mb-2
                    "
                />

                <div
                    className="
                        h-4
                        w-2/3
                        bg-gray-200
                        rounded
                        mb-6
                    "
                />

                {/* Button */}

                <div
                    className="
                        h-5
                        w-28
                        bg-gray-200
                        rounded
                    "
                />

            </div>

        </div>

    );

}