import { useTranslation } from "@/app/i18n";
import {
  getFeedbackData,
  getFeaturesData,
  getWhyApsx,
  getSystemFunctions,
} from "@/data/features";
import CardGrid from "./common/CardGrid";

export default async function Services({ lng }) {
  const { t } = await useTranslation(lng);
  const feedbackItems = getFeedbackData(t, lng);
  const featuresItems = getFeaturesData(t, lng);
  const whyApsxItems = getWhyApsx(t);
  const functionItems = getSystemFunctions(t);

  return (
    <section className="container bg-white py-16 px-4 md:px-8 lg:px-20 font-sans text-[#333]">
      <div className="max-w-6xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="w-full lg:w-1/2 sticky top-20">
            <div className="rounded-[2rem] p-4 bg-purple-50/50 shadow-inner">
              <div className="flex flex-wrap justify-center mx-[-10px]">
                {whyApsxItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-6/12 flex-[0_0_auto] px-[10px] !mt-[20px]"
                  >
                    <div className="card !h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group bg-white !border-none !rounded-2xl !shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                      <div className="card-body flex flex-col items-center text-center p-6">
                        {/* Icon Box */}
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bgColor} ${item.iconColor} mb-4 group-hover:rotate-12 transition-transform duration-300`}
                        >
                          <i
                            className={`uil ${item.icon} text-[1.5rem] leading-none`}
                          />
                        </div>

                        <h4 className="text-[1rem] font-bold text-[#343f52] mb-2 leading-tight">
                          {item.title}
                        </h4>

                        <p className="text-[0.8rem] text-[#60697b] leading-relaxed mb-0 line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            {featuresItems.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-10 group">
                {/* เส้นประเชื่อมต่อ (Vertical Line) */}
                {index !== featuresItems.length - 1 && (
                  <div className="absolute left-[24px] top-10 bottom-0 w-[2px] border-l-2 border-dashed border-[#45c4a0] group-hover:border-purple-400 transition-colors"></div>
                )}

                {/* ไอคอนวงกลม */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-white border border-[#e1f6f0] rounded-lg shadow-sm flex items-center justify-center transition-transform group-hover:shadow-md">
                  {item.icon}
                </div>

                {/* เนื้อหาข้อความ */}
                <div className="flex-grow pt-1">
                  <h3 className="text-xl font-bold text-[#343f52] mb-2 leading-tight group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#60697b] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-[-15px]">
        <CardGrid
          partners={feedbackItems}
          readMoreText={t("home:read_more", "ดูรายละเอียด")}
          comingSoonText={t("home:coming_soon", "เร็วๆ นี้")}
        />
      </div>
    </section>
  );
}
