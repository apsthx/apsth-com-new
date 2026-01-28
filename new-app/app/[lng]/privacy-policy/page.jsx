import React from "react";
import { useTranslation } from "@/app/i18n";

export default async function PrivacyPolicy({ params }) {
  const { lng } = await params;
  const { t } = await useTranslation(lng);

  // รายการ Section ทั้งหมด 1-14 ตามที่กำหนดในนโยบายล่าสุด
  const sections = [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
    "section11",
    "section12",
    "section13",
    "section14",
  ];

  return (
    <section className="wrapper overflow-hidden">
      <div className="container pt-20 ">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            {/* --- Header Section --- */}
            <div className="rounded-2xl mb-0">
              <div className="card-body p-2 text-center">
                <h1 className="display-5 mb-4 font-black text-[#343f52]">
                  {t(
                    "privacy_policy:privacy_policy.title",
                    "นโยบายความเป็นส่วนตัวสำหรับลูกค้า (Privacy Policy)",
                  )}
                </h1>
                <p className="text-[#60697b] mb-4 leading-relaxed">
                  {t(
                    "privacy_policy:privacy_policy.description",
                    "บริษัท เอพีเอส ทีเอช จำกัด ให้ความสำคัญกับการคุ้มครองข้อมูลส่วนบุคคลของคุณ...",
                  )}
                </p>
              </div>
            </div>

            {/* --- Content Body --- */}
            <div className="card shadow-lg border-0 rounded-2xl overflow-hidden">
              <div className="card-body p-8 md:p-12 !bg-white">
                {sections.map((sectionKey, index) => (
                  <div key={sectionKey} className={index !== 0 ? "mt-12" : ""}>
                    <h2 className="h4 mb-4 text-[#343f52] font-bold flex items-center">
                      <span className="w-1 h-6 bg-[#00B7B8]  me-3"></span>
                      {t(
                        `privacy_policy:privacy_policy.items.${sectionKey}.title`,
                        "",
                      )}
                    </h2>

                    <div className="space-y-4 ps-5">
                      {/* Loop รองรับรายการย่อย list1 ถึง list10 (ตาม JSON) */}
                      {[...Array(10)].map((_, i) => {
                        const listKey = `list${i + 1}`;
                        const content = t(
                          `privacy_policy:privacy_policy.items.${sectionKey}.${listKey}`,
                          "",
                        );

                        return content ? (
                          <p
                            key={listKey}
                            className="text-[#60697b] leading-relaxed mb-2"
                          >
                            {content}
                          </p>
                        ) : null;
                      })}
                    </div>
                  </div>
                ))}

                <hr className="my-12 opacity-10" />

                {/* --- Contact Details Section --- */}
                <div className="bg-[#f0f8f8] p-8 rounded-2xl">
                  <h3 className="h4 mb-6 text-[#343f52] font-bold">
                    {t(
                      "privacy_policy:privacy_policy.items.contact.title",
                      "รายละเอียดการติดต่อ",
                    )}
                  </h3>
                  <div className="row gy-4 text-[#60697b]">
                    {/* บริษัท / Data Controller */}
                    <div className="col-md-6">
                      <p className="mb-1 font-bold text-[#343f52]">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.controller_label",
                          "ผู้ควบคุมข้อมูลส่วนบุคคล",
                        )}
                      </p>
                      <p className="mb-1">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.company",
                          "บริษัท เอพีเอส ทีเอช จำกัด",
                        )}
                      </p>
                      <p className="text-sm">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.address",
                          "I-CONNECT เลขที่ 888/8 หมู่ 13 บ้านเป็ด เมืองขอนแก่น 40000",
                        )}
                      </p>
                      <p className="mt-2 text-sm">
                        Email:{" "}
                        <span className="text-[#00B7B8]">
                          {t(
                            "privacy_policy:privacy_policy.items.contact.email",
                            "apsth456@gmail.com",
                          )}
                        </span>
                      </p>
                      <p className="text-sm">
                        Tel:{" "}
                        {t(
                          "privacy_policy:privacy_policy.items.contact.tel",
                          "0981816769",
                        )}
                      </p>
                    </div>

                    {/* DPO */}
                    <div className="col-md-6 border-start-md border-[#00B7B8]/10">
                      <p className="mb-1 font-bold text-[#343f52] underline decoration-[#00B7B8]">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_label",
                          "เจ้าหน้าที่คุ้มครองข้อมูล (DPO)",
                        )}
                      </p>
                      <p className="mb-1 font-bold">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_name",
                          "ประสาน ศรีโสภา",
                        )}
                      </p>
                      <p className="text-sm italic mb-2">
                        {t(
                          "privacy_policy:privacy_policy.items.contact.dpo_title",
                          "DPO (PDPA)",
                        )}
                      </p>
                      <p className="text-sm">
                        Email:{" "}
                        <span className="text-[#00B7B8]">
                          {t(
                            "privacy_policy:privacy_policy.items.contact.email",
                            "apsth456@gmail.com",
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Footer Note --- */}
            <p className="text-center !mt-4 text-[#aab0bc] text-sm">
              {t(
                "privacy_policy:privacy_policy.last_updated",
                "แก้ไขครั้งล่าสุดเมื่อวันที่ 25 พฤษภาคม 2565",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
