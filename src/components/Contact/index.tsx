import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-primary1light dark:bg-primary1 lg:h-[45%] xl:h-1/2"></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[150px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let us hear your idea
                </h2>
              </div>
              <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary1">
                    <FaLocationDot />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      Our Location
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Wexstraße 19-23, 1200 Vienna
                    </p>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Austria
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-[330px] max-w-full">
                  <div className="mr-6 text-[32px] text-primary1">
                    <IoMdMail />
                  </div>
                  <div>
                    <h3 className="mb-[18px] text-lg font-semibold text-dark dark:text-white">
                      How Can We Help?
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      mstuppnig@student.tgm.ac.at
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Adam Gelius"
                    className="bg-transparent w-full border-0 border-b border-[#f1f1f1] p-2  text-dark placeholder:text-body-color/60 focus:border-primary1 focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="bg-transparent w-full border-0 border-b border-[#f1f1f1] p-2  text-dark placeholder:text-body-color/60 focus:border-primary1 focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+43 800 555 0100"
                    className="bg-transparent w-full border-0 border-b border-[#f1f1f1] p-2 text-dark placeholder:text-body-color/60 focus:border-primary1 focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="type your message here"
                    className="bg-transparent w-full resize-none border-0 border-b border-[#f1f1f1] p-2 text-dark placeholder:text-body-color/60 focus:border-primary1 focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary1 px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary1/90"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
