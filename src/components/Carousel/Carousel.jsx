// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // Import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const Slider = () => {
//   const slide1 = 'https://i.ibb.co/4sftb0C/slide1.jpg';
//   const slide2 = 'https://i.ibb.co/fMF87sJ/slide2.jpg';
//   const slide3 = 'https://i.ibb.co/ssbyn5Q/slide3.jpg';
//   const slide4 = 'https://i.ibb.co/qmHDB0r/slide4.jpg';

//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full"
//             style={{
//               backgroundImage: `url(${slide1})`,
//               backgroundSize: "cover", // Adjust background size
//             }}
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full"
//             style={{
//               backgroundImage: `url(${slide2})`,
//               backgroundSize: "cover", // Adjust background size
//             }}
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full"
//             style={{
//               backgroundImage: `url(${slide3})`,
//               backgroundSize: "cover", // Adjust background size
//             }}
//           ></div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div
//             className="bg-cover bg-no-repeat bg-center h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full"
//             style={{
//               backgroundImage: `url(${slide4})`,
//               backgroundSize: "cover", // Adjust background size
//             }}
//           ></div>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// };

// export default Slider;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const slide1 = 'https://i.ibb.co/4sftb0C/slide1.jpg';
  const slide2 = 'https://i.ibb.co/fMF87sJ/slide2.jpg';
  const slide3 = 'https://i.ibb.co/ssbyn5Q/slide3.jpg';
  const slide4 = 'https://i.ibb.co/qmHDB0r/slide4.jpg';

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center w-full"
            style={{
              backgroundImage: `url(${slide1})`,
              paddingBottom: "50%",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center w-full"
            style={{
              backgroundImage: `url(${slide2})`,
              paddingBottom: "50%", 
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center w-full"
            style={{
              backgroundImage: `url(${slide3})`,
              paddingBottom: "50%", 
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-no-repeat bg-center w-full"
            style={{
              backgroundImage: `url(${slide4})`,
              paddingBottom: "50%", 
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
