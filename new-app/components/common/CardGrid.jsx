import React from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/common/Badges";

export default function CardGrid({
  partners = [],
  readMoreText = "ดูรายละเอียด",
  comingSoonText = "เร็วๆ นี้",
}) {
  return (
    <div className="container flex flex-wrap mx-[-15px] !mt-[-30px]">
      {partners.map((item) => (
        <div
          data-cues="slideInDown"
          data-delay={300}
          key={item.id}
          className="w-full md:w-6/12 lg:w-4/12 flex-[0_0_auto] px-[15px] max-w-full !mt-[50px]"
        >
          <div className="group h-full bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col border-2 border-[#a4aec633] rounded-lg shadow-md">
            <article className="post p-0 flex flex-col h-full">
              {/* Image Section */}
              <figure className="relative aspect-[4/3] w-full !mb-0 overflow-hidden bg-slate-100 cursor-pointer">
                <Link
                  target="_blank"
                  href={item.link || "#"}
                  className="w-full h-full block"
                >
                  <Image
                    className="!transition-all !duration-700 !ease-in-out group-hover:scale-110 group-hover:blur-sm !w-full !h-full !object-cover"
                    src={item.img || "/assets/img/placeholder.jpg"}
                    alt={item.title}
                    width={600}
                    height={450}
                    priority
                  />
                </Link>
                <figcaption className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 bg-slate-900/10 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/95 border border-white px-5 py-2 rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="text-[#343f52] font-medium text-[0.8rem]">
                      {readMoreText}
                    </span>
                  </div>
                </figcaption>
              </figure>

              {/* Content Section */}
              <div className="post-header p-6 flex flex-col flex-grow">
                <div className="post-title h4 !mb-2 inline-flex !tracking-[0.02rem] text-[0.7rem] font-bold !text-[#aab0bc] relative align-top !pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-50%] before:w-3 before:h-[2px] before:left-0 before:top-1/2 before:bg-[#1bb59b]">
                  <Link
                    target="_blank"
                    className="!text-[#343f52] hover:!text-[#1bb59b] transition-colors"
                    href={item.link || "#"}
                  >
                    {item.title}
                  </Link>
                </div>

                {/* Coming Soon Badge */}
                {item.status === "coming_soon" && (
                  <div className="mb-2">
                    <Badge
                      color="teal"
                      variant="softText"
                      className="!text-[12px] !px-3 !py-2 !rounded-full"
                    >
                      {comingSoonText}
                    </Badge>
                  </div>
                )}

                <p className="!text-[0.85rem] !leading-relaxed text-[#64748b] !mb-0 line-clamp-3 font-medium">
                  {item.description}
                </p>
              </div>
            </article>

            {/* Bottom Progress Line */}
            <div className="h-[2px] w-0 bg-[#1bb59b] group-hover:w-full transition-all duration-700 ease-in-out" />
          </div>
        </div>
      ))}
    </div>
  );
}
