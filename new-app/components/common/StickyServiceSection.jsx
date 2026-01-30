import React from "react";

// ส่วนประกอบย่อยสำหรับการ์ด (Internal Component)
const ServiceCard = ({ title, description, icon, bgColor, iconColor }) => (
  <div
    className={`card ${bgColor} !border rounded-xl border-none shadow-sm mb-4 transition-all duration-300 hover:shadow-md`}
  >
    <div className="card-body flex flex-col sm:flex-row p-4">
      <div className="mb-0 sm:mb-0 sm:mr-6 shrink-0">
        <div className={`w-12 h-12 ${iconColor}`}>{icon}</div>
      </div>
      <div>
        <h3 className="!font-medium mb-0 !text-[0.95rem]">{title}</h3>
        <p className="text-gray-600 mb-0 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// คอมโพเนนต์หลักที่รับ Props ไปใช้งาน
export default function StickyServiceSection({
  title = "Our Services",
  description = "",
  buttonText = "More Details",
  buttonLink = "#",
  services = [],
}) {
  return (
    <section className="w-full bg-white py-20 xl:py-32 relative">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-wrap">
          {/* คอลัมน์ซ้าย: หัวข้อ (Sticky) */}
          <div
            className="xl:w-5/12 lg:w-5/12 w-full mb-0 xl:mb-0 lg:mb-0 xl:sticky lg:sticky self-start "
            style={{ top: "100px", zIndex: 10 }}
          >
            <h3 className="text-2xl md:text-3xl lg:!text-[2rem] font-bold leading-[1.2] mb-0">
              {title}
            </h3>
            {description && (
              <p className="text-gray-600 mb-0 text-lg leading-relaxed">
                {description}
              </p>
            )}
            <a
              href={buttonLink}
              className="inline-flex items-center justify-center px-8 py-3.5 text-white bg-[#3f78e0] rounded-lg hover:bg-[#3461b6] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {buttonText}
              <i className="uil uil-arrow-up-right ml-2" />
            </a>
          </div>

          {/* คอลัมน์ขวา: รายการ Card */}
          <div className="xl:w-6/12 lg:w-6/12 w-full ml-auto">
            {services.map((item, index) => (
              <ServiceCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
