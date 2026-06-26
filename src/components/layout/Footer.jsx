import { Link } from "react-router-dom";
import { COMPANY } from "../../utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071A3D] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Footer */}

        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="text-sm md:text-base">
            © {year} {COMPANY.name}. All Rights Reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="hover:text-blue-300 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-conditions"
              className="hover:text-blue-300 transition"
            >
              Terms
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-blue-300 transition"
            >
              Disclaimer
            </Link>

          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/15"></div>

        {/* Bottom Footer */}

        <div className="py-5 text-center text-sm text-white/80">

          Developed By{" "}
          <a
            href="https://tvaindia.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-white transition"
          >
            TVA India Ranchi Jh.
          </a>

        </div>

      </div>
    </footer>
  );
}