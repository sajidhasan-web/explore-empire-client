import Marquee from "react-fast-marquee";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner5.png";
import email from "../assets/emailMassage.png";

const OurPatners = () => {
  return (
    <div className="mt-10 md:mt-14">
      <h2 className="text-center text-2xl md:text-4xl font-bold pb-8 md:pb-12">
        Our Global Partners
      </h2>
      <Marquee>
        <div className="h-40 w-40 ">
          <img src={partner1} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner2} alt="" />
        </div>

        <div className="h-40 w-40 ">
          <img src={partner3} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner4} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner1} alt="" />
        </div>
        <div className="h-40 w-40  ">
          <img src={partner2} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner3} alt="" />
        </div>

        <div className="h-40 w-40 ">
          <img src={partner4} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner1} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner2} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner1} alt="" />
        </div>
        <div className="h-40 w-40  ">
          <img src={partner2} alt="" />
        </div>
        <div className="h-40 w-40 ">
          <img src={partner3} alt="" />
        </div>

        <div className="h-40 w-40 ">
          <img src={partner4} alt="" />
        </div>
      </Marquee>

      <div className="bg-blue-200 opacity-60">
        <div className="p-4 md:p-8 container mx-auto md:flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="h-28 w-28">
              <img
                className="h-full w-full object-contain"
                src={email}
                alt=""
              />
            </div>
            <div>
              <p className="text-base md:text-xl font-bold text-white">
                Get the latest news and offers
              </p>
              <h3 className="text-xl md:text-3xl text-black font-bold">
                Subscribe to our newsletter
              </h3>
            </div>
            
          </div>
          <div className="">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-2 border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <a className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-tr-lg rounded-tb-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Subscribe
                </span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurPatners;
