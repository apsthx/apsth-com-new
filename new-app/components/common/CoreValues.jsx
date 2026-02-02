import React from "react";
import Image from "next/image";

export default function CoreLeftValues({
  title = "Core Values",
  description = "Building the future with innovation and integrity.",
  iconClass = "uil-rocket",
  imageSrc = "/assets/img/illustrations/i7.png",
  imageAlt = "Core Values Illustration",
  features = [],
  imageRight = true,
  gradientColors = ["#ffff", "#ffffff"],
  showPattern = false,
  children,
}) {
  const backgroundStyle = {
    background: `linear-gradient(135deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)`,
  };

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-32"
      style={backgroundStyle}
    >
      {/* Background Decorative Pattern */}
      {showPattern && (
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#2bc29d 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      )}

      {/* Floating Elements (Optional Children) */}
      <div className="absolute inset-0 z-0">{children}</div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${imageRight ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image Section with Glassmorphism Effect */}
          <div className="w-full lg:w-1/2 group">
            <div className="relative">
              {/* Decorative Circle Behind Image */}
              <div className="absolute -z-10 inset-0 bg-teal-100/50 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-700" />

              <figure className="relative transition-all duration-500 transform group-hover:-translate-y-2">
                <Image
                  className="w-full h-auto drop-shadow-2xl rounded-2xl"
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={621}
                  priority
                />
              </figure>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-xl">
              {/* Header */}
              <div className="inline-flex items-center self-start !mb-0 rounded-full">
                <i className={`uil ${iconClass} text-lg mr-2`} />
                <span className="text-xl font-bold uppercase tracking-wider">
                  {title}
                </span>
              </div>

              <p className="text-lg text-gray-500 leading-relaxed mb-10">
                {description}
              </p>

              {/* Features List */}
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-0">
                {features.map((text, idx) => (
                  <FeatureItem key={idx} text={text} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ text }) => (
  <li className="group flex items-center transition-colors">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white mr-3 group-hover:scale-110 transition-transform">
      <i className="uil uil-check text-sm text-[#45c4a0]" />
    </div>
    <span className="text-gray-600 font-medium">{text}</span>
  </li>
);
