import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-primary1 pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-6 text-xl font-bold text-white">DIEMP</h4>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                We help rescue personnel diagnose and treat stroke patients.
              </p>
              <div className="-mx-3 flex items-center">
                <Link
                  aria-label="social link"
                  href="/#"
                  className="px-3 text-gray-7 hover:text-white"
                >
                  <FaInstagram size={24} color="fff" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                <li>
                  <a
                    href="/#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#focus"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Focus Points
                  </a>
                </li>
                <li>
                  <a
                    href="/#team"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Useful Links
              </h4>
              <ul>
                <li>
                  <a
                    href="/#faq"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
