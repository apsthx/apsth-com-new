"use client";
import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function FullWidthImageSlider() {
  const slidesData = [
    {
      src: "/assets/img/clinic/input_opd_card/carousel-img-1.jpg",
      alt: "System Overview 1",
    },
    {
      src: "/assets/img/clinic/input_opd_card/carousel-img-2.jpg",
      alt: "System Overview 2",
    },
    {
      src: "/assets/img/clinic/input_opd_card/carousel-img-3.jpg",
      alt: "System Overview 3",
    },
  ];

  return (
    <section className="wrapper !bg-[#ececec00] w-full">
      {/* เอา container ออกเพื่อให้กว้างเต็มหน้าจอ */}
      <div data-cues="slideInDown" data-delay={300} className="w-full">
        <div className="swiper-container w-full">
          <Swiper
            className="swiper-container w-full"
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                {/* ปรับ aspect-ratio ให้รูปดูสูงและเต็มตาขึ้น หรือใช้ h-[ค่าที่ต้องการ] */}
                <figure className="m-0 relative w-full h-[400px] md:h-[600px] lg:h-[750px]">
                  <Image
                    className="object-cover"
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CSS ปรับแต่งตำแหน่งปุ่มให้ดูแพงขึ้น */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #00b6b6 !important;
          background: rgba(255, 255, 255, 0.9);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
          margin: 0 20px; /* ให้ปุ่มห่างจากขอบรูปนิดนึง */
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: #00b6b6;
          color: #fff !important;
          transform: scale(1.1);
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #f5f5f6;
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background: #00b6b6 !important;
          width: 30px;
          border-radius: 10px;
          opacity: 1;
        }
        /* ย้ายตำแหน่งจุดไปอยู่ในรูป */
        .swiper-pagination {
          bottom: 30px !important;
        }
      `}</style>
    </section>
  );
}
