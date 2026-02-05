"use client";

import Image from "next/image";
import { OurTeams } from "@/data/our_team";

export default function OurTeam() {
  return (
    <>
      <div className="container !relative !px-0 !mx-0">
        <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 relative z-[2] items-stretch">
          {OurTeams.map((data) => (
            <div
              data-cues="slideInDown"
              data-delay={300}
              className="flex"
              key={data.id}
            >
              <div className="item-inner flex-1 flex flex-col group">
                <div className="card h-full min-h-72 flex flex-col !bg-white/80 !backdrop-blur-sm transition-all duration-300 hover:translate-y-[-5px] !border !border-[#a4aec633] !rounded-lg !shadow-md">
                  {/* 2. ปรับ Padding ภายในให้กระชับ (p-6) */}
                  <div className="card-body p-10 flex-1 flex flex-col items-center text-center">
                    {/* Image Section - ลด margin bottom นิดหน่อย */}
                    <div className="relative inline-block !mb-4">
                      <Image
                        className="rounded-full border-2 border-white shadow-sm object-cover"
                        src={data.imageSrc}
                        alt={data.name}
                        width={200} // ลดขนาดรูปลงนิดหน่อยเพื่อให้สมดุลกับ gap ที่แคบลง
                        height={200}
                        style={{ width: "200px", height: "200px" }}
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
