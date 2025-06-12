 


// import React, { useEffect, useRef } from "react";
// import Flickity from "flickity";
// import "flickity/css/flickity.css";

// {/* <div class="slider-text">
//                      <div class="intro-txt">DINING AT</div>
//                      <h2>Caverta</h2>
//                      <p>We offer a highly seasonal and continuously evolving tasting menu experience.<br>
//                         <a href="contact.html" class="slider-btn">Contact Us</a>
//                      </p>
//                   </div> */}

// const carouselData = [
//   {
//     text: "DINING AT",
//     description:
//       "We offer a highly seasonal and continuously evolving tasting menu experience....",
//     image:
//       "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/neurologist-2.jpg",
//   },
//   {
//     text: "EVENTS AT",
//     description:
//       "A wide range of diagnostic, therapeutic, and management options for disorders of the nervous system...",
//     image:
//       "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cardiac-2.jpg",
//   },
//   {
//     text: "HAPPY HOURS AT",
//     description:
//       "Cardiac surgery encompasses a range of surgical procedures aimed at treating conditions of the heart...",
//     image:
//       "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/service1-2048x930-1-1200x675.jpg",
//   },
//   {
//     text: "EVENTS AT",
//     description:
//       "A wide range of diagnostic, therapeutic, and management options for disorders of the nervous system...",
//     image:
//       "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/08/cancer-screening-2048x1365-1-1200x675.jpg",
//   },
//   {
//     text: "HAPPY HOURS AT",
//     description:
//       "A wide range of diagnostic, therapeutic, and management options for disorders of the nervous system...",
//     image:
//       "https://themeperch.net/doctoraltheme/wp-content/uploads/2016/06/2-2-360x225.jpg",
//   },
// ];

// const Work = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const flkty = new Flickity(carouselRef.current, {
//       cellAlign: "center",
//       contain: true,
//       wrapAround: true,
//       autoPlay: 3000,
//     });

//     return () => flkty.destroy();
//   }, []);

//   return (
//     <div
//       className="carousel w-full"
//       ref={carouselRef}
//     >
//       {carouselData?.map((item, index) => (
//         <div
//           key={index}
//           className="w-full md:w-3/4 lg:w-2/3 h-[500px] bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center mx-4"
//           style={{ backgroundImage: `url(${item.image})` }}
//         >
//           <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center px-6">
//             <div className="text-white text-center max-w-xl space-y-4">
//               <h2 className="text-3xl md:text-4xl font-bold">{item.text}</h2>
//               <p className="text-base md:text-lg">{item.description}</p>
//               <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition">
//                 Read More
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Work;


import React from 'react'

const Work = () => {
  return (
    <div>Work</div>
  )
}

export default Work