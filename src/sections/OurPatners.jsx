import Marquee from "react-fast-marquee";
import partner1 from "../assets/partner1.png"
import partner2 from "../assets/partner2.png"
import partner3 from "../assets/partner3.png"
import partner4 from "../assets/partner5.png"


const OurPatners = () => {
    return (
        <div className="mt-10 md:mt-14">
            <h2 className="text-center text-2xl md:text-4xl font-bold pb-8 md:pb-12">Our Global Partners</h2>
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
            
        </div>
    );
};

export default OurPatners;