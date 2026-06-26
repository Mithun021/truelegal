import {
    FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

import { COMPANY, SOCIAL_LINKS } from "../../utils/constants";

const socialIcons = [
  {
    icon: FaFacebookF,
    link: SOCIAL_LINKS.facebook,
  },
  {
    icon: FaInstagram,
    link: SOCIAL_LINKS.instagram,
  },
  {
    icon: FaLinkedinIn,
    link: SOCIAL_LINKS.linkedin,
  },
  {
    icon: FaYoutube,
    link: SOCIAL_LINKS.youtube,
  },
];

export default function TopBar() {
  return (
    <div className="bg-[#071A3D] text-white">
      <div className="max-w-7xl mx-auto h-14 px-4 flex justify-between items-center">

        <div className="flex items-center gap-6 text-sm">

            <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 hover:text-blue-300 transition"
            >
                <FaPhoneAlt className="text-xs" />
                <span>{COMPANY.phone}</span>
            </a>

            <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 hover:text-blue-300 transition"
            >
                <FaEnvelope className="text-xs" />
                <span>{COMPANY.email}</span>
            </a>

            </div>

        <div className="hidden md:flex gap-3">

            {socialIcons.map((item, index) => {
                const Icon = item.icon;

                return (
                <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Social Link ${index + 1}`}
                    className="
                    w-10
                    h-10
                    border
                    border-white/20
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                    hover:bg-red-700
                    hover:border-red-700
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                >
                    <Icon size={14} />
                </a>
                );
            })}

            </div>
      </div>
    </div>
  );
}