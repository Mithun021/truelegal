import { Link } from "react-router-dom";

export default function Breadcrumb({
  title,
  background = "#071A3D",
}) {
  return (
    <section
      className="py-8 md:py-10"
      style={{ background }}
    >
      <div className="max-w-7xl mx-auto px-4">

        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-2xl
            px-6
            py-4
            backdrop-blur-sm
          "
        >
          <div className="flex items-center flex-wrap gap-3">

            <Link
              to="/"
              className="
                text-white/80
                hover:text-white
                text-sm
                transition
              "
            >
              Home
            </Link>

            <span className="text-white/40">
              /
            </span>

            <span
              className="
                px-4
                py-1.5
                rounded-lg
                bg-[#F59E0B]/10
                border
                border-[#F59E0B]/20
                text-[#F59E0B]
                text-sm
                font-semibold
              "
            >
              {title}
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}