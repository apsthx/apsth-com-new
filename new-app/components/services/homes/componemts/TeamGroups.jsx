"use client";

import Image from "next/image";

export default function TeamGroups({ Teamsdata }) {
  return (
    <>
      <div className="!relative">
        {/* Background Shapes */}
        {/* <div
          className="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[10rem] !h-[10rem] absolute z-[0]"
          data-rellax-speed={1}
          style={{ bottom: "-2rem", right: "-1.7rem" }}
        />
        <div
          className="shape !rounded-[50%] bg-line red rellax !w-[8rem] !h-[8rem] absolute z-[0] opacity-50"
          data-rellax-speed={1}
          style={{ top: "-1rem", left: "-2rem" }}
        /> */}

        {/* 1. ลด gap-6 เหลือ gap-3 เพื่อให้การ์ดชิดกันมากขึ้น */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 relative z-[2] items-stretch">
          {Teamsdata.map((data) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="flex"
              key={data.id}
            >
              <div className="item-inner flex-1 flex flex-col group">
                <div className="card h-full min-h-72 flex flex-col !bg-white/80 !backdrop-blur-sm !border !border-white/40 !shadow-[0_4px_20px_0_rgba(31,38,135,0.05)] !rounded-[1.2rem] transition-all duration-300 hover:translate-y-[-5px]">
                  {/* 2. ปรับ Padding ภายในให้กระชับ (p-6) */}
                  <div className="card-body p-10 flex-1 flex flex-col items-center text-center">
                    {/* Image Section - ลด margin bottom นิดหน่อย */}
                    <div className="relative inline-block !mb-4">
                      <Image
                        className="rounded-full border-2 border-white shadow-sm object-cover"
                        src={data.imageSrc}
                        alt={data.name}
                        width={80} // ลดขนาดรูปลงนิดหน่อยเพื่อให้สมดุลกับ gap ที่แคบลง
                        height={80}
                        style={{ width: "80px", height: "80px" }}
                      />
                    </div>

                    <h4 className="!mb-1 text-[#343f52] font-bold text-[1rem]">
                      {data.name}
                    </h4>

                    {/* 3. ลดขนาดฟอนต์คำอธิบายเล็กน้อยเพื่อให้ดูสะอาดตาในพื้นที่แคบ */}
                    <p className="!mb-4 text-[#60697b] text-[13px] leading-snug flex-1">
                      {data.description}
                    </p>

                    <nav className="nav social flex justify-center gap-3 mt-auto pt-2 w-full ">
                      {data.socials && data.socials.length > 0
                        ? data.socials.map((social, index) => (
                            <a
                              key={index}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="transition-all duration-300 hover:scale-110"
                              style={{ color: social.color }}
                            >
                              <i
                                className={`uil ${social.icon} text-[1.1rem]`}
                              />
                            </a>
                          ))
                        : null}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
