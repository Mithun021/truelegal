import { Helmet } from "react-helmet-async";
import MainLayout from '../components/layout/MainLayout'
import Breadcrumb from "../components/common/Breadcrumb";
import {
  FaBalanceScale,
  FaUserShield,
  FaGraduationCap,
  FaHandsHelping,
  FaShieldAlt,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const aboutData = [
  {
    icon: FaBalanceScale,
    title:
      "True Legal Consultant: Your Trusted Partner in Legal and Risk Management",
    content: `True Legal Consultant is a leading Risk Management and Legal Consulting firm dedicated to supporting professionals across various industries, with a particular focus on those facing complex regulatory environments. Registered under the Indian Companies Act, True Legal Consultant provides comprehensive services designed to protect the professional interests of its clients. Our services include specialized legal consultancy, access to experienced advisors, and strategic crisis management planning. As a registered Corporate Agent under IRDAI, we also offer doorstep insurance services to secure our clients’ professional liabilities.`,
  },

  {
    icon: FaUserShield,
    title: "Experienced Legal Advocacy at Your Service",
    content: `True Legal Consultant’s legal team is composed of seasoned advocates affiliated with the BAR COUNCIL, ensuring that every legal case is handled with precision, expertise, and a commitment to client success. Our goal is to keep clients informed and protected amidst today’s evolving legal landscape, helping them navigate professional challenges confidently.`,
  },

  {
    icon: FaGraduationCap,
    title: "Education and Professional Responsibility",
    content: `Information in our materials serves an informative purpose, aiming to increase awareness among professionals about their rights, responsibilities, and best practices in their respective fields. True Legal Consultant is committed to maintaining transparency and educating clients on legal obligations and risk mitigation strategies, enabling them to thrive in their professions.`,
  },

  {
    icon: FaHandsHelping,
    title: "Committed to Social Responsibility and Youth Empowerment",
    content: `For over two decades, True Legal Consultant has not only upheld its commitment to professional excellence but also to social impact. We actively invest in the next generation, particularly young individuals from disadvantaged backgrounds, by offering training programs that create professional opportunities in areas like sales, office management, and more. Recognized with multiple awards for its social initiatives, True Legal Consultant remains a trusted name for hundreds of employees and the communities we serve.`,
  },

  {
    icon: FaShieldAlt,
    title: "Professional Excellence and Security for a Dynamic World",
    content: `True Legal Consultant goes beyond traditional consulting, offering a membership program that includes essential risk management guidance for professionals who strive for career growth and security. Our experienced crisis management team specializes in handling unexpected challenges and has a strong track record of success, allowing our clients to focus on achieving excellence in their fields.`,
  },

  {
    icon: FaLaptopCode,
    title: "Empowering Professionals through Digital Innovation",
    content: `Our digital application empowers clients with the latest in legal and industry developments, helping them integrate best practices into their everyday workflow. By connecting clients with insights and strategies from diverse professional leaders, True Legal Consultant equips professionals with the tools to excel in an increasingly digital world.`,
  },

  {
    icon: FaUsers,
    title: "A Team of Trusted Experts Committed to Your Success",
    content: `Our team at True Legal Consultant is composed of industry-renowned professionals known for their collaborative approach and innovative thinking. Inspired by the best minds in risk management and legal consulting, we bring unmatched expertise and dedication to every client interaction, helping them navigate their professional journeys with clarity and confidence.`,
  },
];

const AboutTrueLegal = () => {
  return (
    <MainLayout>
        <Helmet>
            <title>
                About Us | True Path Legal Consultant
            </title>

            <meta
                name="description"
                content="Learn about True Path Legal Consultant, a trusted medico-legal consulting firm providing legal protection, risk management, professional indemnity support, and healthcare compliance solutions for doctors, hospitals, and healthcare professionals across India."
            />

            <meta
                name="keywords"
                content="about true path legal consultant, medico legal consultant india, healthcare legal services, doctor legal protection, hospital risk management, professional indemnity consultant, legal advisory for doctors"
            />

            <meta name="robots" content="index, follow" />
            </Helmet>

            <Breadcrumb  title="About Us" />

            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="space-y-8">

                    {aboutData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                        <div
                            key={index}
                            className="
                            bg-white
                            rounded-3xl
                            border
                            border-slate-200
                            shadow-sm
                            hover:shadow-xl
                            transition-all
                            duration-300
                            p-8
                            lg:p-10
                            "
                        >
                            <div className="flex items-start gap-5">

                            {/* Icon */}

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-[#071A3D]
                                text-white
                                flex
                                items-center
                                justify-center
                                shrink-0
                                "
                            >
                                <Icon size={28} />
                            </div>

                            {/* Content */}

                            <div className="flex-1">

                                <div className="flex items-center gap-4 mb-5">

                                <div className="w-1 h-10 bg-red-700 rounded-full" />

                                <h2
                                    className="
                                    text-lg
                                    font-bold
                                    text-[#071A3D]
                                    leading-tight
                                    "
                                >
                                    {item.title}
                                </h2>

                                </div>

                                <p
                                className="
                                    text-gray-700
                                    leading-9
                                    text-md
                                "
                                >
                                {item.content}
                                </p>

                            </div>

                            </div>
                        </div>
                        );
                    })}

                    </div>
                </div>
                </section>

    </MainLayout>
  )
}

export default AboutTrueLegal
