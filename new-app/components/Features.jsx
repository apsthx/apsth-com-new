import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import { getFeaturesData } from "@/data/features";
import CoreLeftValues from "@/components/common/CoreValues";
import GrowthCard from "@/components/common/GrowthCard";
import GridBackground from "./common/background/GradientBackground";

export default async function Features({ lng }) {
  const { t } = await useTranslation(lng);

  const backgroundStyle = {
    background: true
      ? `radial-gradient(at 0% 0%, #C4F2E7 0px, transparent 60%), 
         radial-gradient(at 100% 0%, #C4F2E7 0px, transparent 60%), 
         radial-gradient(at 100% 0%, #ffffff 0px, transparent 60%),
         radial-gradient(at 0% 100%, #ffffff 0px, transparent 60%),
         linear-gradient(135deg, #ffffff 0%, #ffffff 100%)` // ใช้ Dark Mode เมื่อเปิด Gradient
      : "#ffffff",
    position: "relative",
    transition: "all 0.5s ease",
  };

  const grainStyle = {
    position: "absolute",
    inset: 0,
    opacity: 0.05, // ลดลงเหลือ 0.05 - 0.08 เพื่อให้ดูแพงบนพื้นขาว
    pointerEvents: "none",
    zIndex: 1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    filter: "contrast(150%) brightness(100%)", // เพิ่ม contrast ให้เม็ดสีดูคมแต่จาง
  };

  return (
    <section
      className="wrapper overflow-hidden !relative "
      style={backgroundStyle}
    >
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* ฝั่งข้อความ */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="bg-purple-100 text-[#2bc29d] text-xs font-bold py-1 rounded-full">
                {t("home:title", "โปรแกรม คลินิก APSX Platform")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                {t(
                  "home:features.title",
                  "ระบบที่ใช้งานง่ายมี ประสิทธิภาพและทันสมัย ที่สุดในตอนนี้",
                )}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                {t("home:features.description", "เป็นระบบที่ลงตัว...")}
              </p>

              <p className="text-slate-500 text-sm leading-relaxed">
                {t(
                  "home:features.features.description",
                  "ยกระดับการบริหารจัดการ...",
                )}
              </p>

              {/* Grid ย่อย 2 คอลัมน์ */}
              <div className="grid grid-cols-1 gap-2 pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-800 font-bold">
                    <i className="uil uil-comments !text-lg"></i>
                    <h4 className="!mt-2">
                      ระบบหลังบ้านที่ทำให้เรื่องคลินิกเป็นเรื่องง่าย
                      ครบจบในที่เดียว
                    </h4>
                  </div>
                  <p className="grid grid-cols-1 md:grid-cols-1 gap-0 text-sm text-[#343f52] relative z-10">
                    {[
                      "ระบบเวชระเบียน (OPD Management)",
                      "ระบบบริหารสต็อกยา",
                      "รายงานวิเคราะห์กว่า 40 รูปแบบ",
                      "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
                      "รองรับหลายสาขาในบัญชีเดียว",
                      "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <i className="uil uil-check-circle text-[#2bc29d]  shadow-glow" />
                        <span className="text-[#343f52] !font-medium ">
                          {t(
                            `home:platform_highlights.features.blog${index + 1}.title`,
                            item,
                          )}
                        </span>
                      </li>
                    ))}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="!flex !items-center gap-2 text-slate-800 font-bold">
                    <i className="uil uil-chart-line !text-lg"></i>
                    <h4 className="!mt-2">อิสระในการใช้งาน ทุกที่ ทุกเวลา</h4>
                  </div>
                  <p className="flex flex-wrap gap-3">
                    {[
                      {
                        icon: "uil-mobile-android",
                        text: "Desktop & Mobile",
                      },
                      {
                        icon: "uil-heart-alt",
                        text: "อินเทอร์เฟซใช้งานง่าย",
                      },
                      { icon: "uil-bolt", text: "เข้าถึงรวดเร็ว ทุกที่" },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 bg-[#343f52] backdrop-blur-md py-2 px-4 rounded-lg border border-white/10 shadow-sm transition-all"
                      >
                        <i className={`uil ${item.icon} text-[#ffff]`} />
                        <span className="text-xs font-light text-[#ffff]">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* ฝั่งรูปภาพ Laptop */}
            <div className="w-full lg:w-1/2 relative flex justify-center">
              <div className="relative w-full max-w-[550px]">
                {/* ใช้ Mockup Laptop ที่นี่ */}
                <Image
                  src="/path-to-laptop-mockup.png"
                  alt="Marketing Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <CoreLeftValues
          iconClass="uil uil-meeting-board"
          title="แดชบอร์ดสรุปภาพรวม"
          description="เปลี่ยนข้อมูลหลังบ้านให้เป็นกราฟบริหารจัดการที่เข้าใจง่าย ช่วยให้คุณเห็นทิศทางธุรกิจและตัดสินใจเติบโตคลินิกได้อย่างแม่นยำ"
          features={[
            "สรุปกระแสเงินสด ยอดค้างชำระ และรายได้ย้อนหลังแบบครบวงจร",
            "วิเคราะห์อันดับรายการบริการและตัวยาที่ทำกำไรสูงสุด",
            "ติดตามสถิติคนไข้ใหม่และอัตราการกลับมาใช้บริการซ้ำ",
            "คำนวณค่ามือและค่าคอมมิชชั่นพนักงานอัตโนมัติ แม่นยำ 100%",
            "สรุปผลประกอบการแบบเปรียบเทียบ รายวัน รายเดือน และรายปี",
          ]}
          imageRight={true}
          showGradient={true}
          imageSrc="/assets/img/clinic/overview.png"
          showPattern={false}
          showGrain={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-chart-line"
          title="วิเคราะห์ธุรกิจอัจฉริยะ"
          description="เปลี่ยนข้อมูลหลังบ้านที่กระจัดกระจาย ให้เป็นภาพรวมผลการดำเนินงานที่ชัดเจน ช่วยให้คุณมองเห็นโอกาสในการเติบโตและจัดการต้นทุนได้อย่างมีประสิทธิภาพ"
          features={[
            "แดชบอร์ดสรุปรายได้และโครงสร้างค่าใช้จ่ายแบบละเอียด",
            "รายงานวิเคราะห์บริการและกลุ่มลูกค้าที่สร้างกำไรสูงสุด (Top Performance)",
            "ระบบคาดการณ์รายได้และแนวโน้มค่าใช้จ่ายในอนาคต",
            "วัดผลประสิทธิภาพการทำงานของทีมงานและพนักงานรายบุคคล",
            "วิเคราะห์อัตราผลกำไรตามช่วงเวลา และประเมินแนวโน้มต้นทุนธุรกิจ",
          ]}
          imageRight={false}
          showGradient={false}
          imageSrc="/assets/img/clinic/business_analytics.png"
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showGrain={true}
          showPattern={false} // ปิด Pattern เพื่อความ Clean
          patternColor="rgba(27, 181, 168, 0.05)"
        ></CoreLeftValues>

        <CoreLeftValues
          iconClass="uil uil-calendar-alt"
          title="ระบบจัดการนัดหมาย"
          description="จัดการนัดหมายไข้ได้อย่างเป็นระเบียบ ลดความผิดพลาดในการลงนัด และช่วยให้การทำงานของทีมงานลื่นไหลไม่มีสะดุด"
          features={[
            "ปฏิทินนัดหมายอัจฉริยะ (Visual Calendar) แยกสีตามประเภทเคส",
            "ระบบจัดการตารางเวรแพทย์และห้องตรวจ ป้องกันนัดหมายซ้อน",
            "ระบบติดตามผล (Follow-up) สถานะการนัดหมาย",
            "ตรวจสอบสถานะคิวหน้าห้องตรวจแบบ Real-time",
          ]}
          imageRight={true}
          showGradient={true}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-puzzle-piece"
          title="ระบบจัดการคิวตรวจ"
          description="จัดลำดับการเข้าตรวจอย่างเป็นระบบ ช่วยให้พนักงานหน้าเคาน์เตอร์และแพทย์ทำงานประสานกันได้อย่างราบรื่น ลดระยะเวลาการรอคอยของคนไข้"
          features={[
            "ระบบรันคิวอัตโนมัติ แม่นยำตามลำดับการลงทะเบียน",
            "แดชบอร์ดแสดงสถานะคิวแบบ Real-time แยกตามห้องตรวจ",
            "ระบบเรียกคิวผ่านหน้าจอ (Digital Signage) พร้อมเสียงแจ้งเตือน",
            "แจ้งเตือนลำดับคิวผ่าน SMS ลดความแออัดหน้าห้องตรวจ",
          ]}
          imageRight={false}
          showGradient={false}
          showGrain={false}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-file-bookmark-alt"
          title="ระบบออกใบรับรองแพทย์"
          description="สร้างเอกสารทางการแพทย์ที่ได้มาตรฐานอย่างรวดเร็ว พร้อมระบบจัดเก็บข้อมูลที่ค้นหาง่ายและปลอดภัย ช่วยลดความซ้ำซ้อนในการทำงานเอกสาร"
          features={[
            "รองรับเทมเพลตมาตรฐาน (ใบรับรองทั่วไป, ใบตรวจรักษา, และใบส่งตัว)",
            "เชื่อมโยงข้อมูลคนไข้และวินิจฉัยเข้าเอกสารอัตโนมัติ ไม่ต้องคีย์ซ้ำ",
            "ระบบรันเลขที่เอกสาร (Running Number) ป้องกันการปลอมแปลง",
            "ประวัติการออกเอกสารย้อนหลัง ค้นหาและพิมพ์ซ้ำได้ทันที",
            "รองรับการฝังลายเซ็นดิจิทัลและตราประทับคลินิกเพื่อความสากล",
            "พิมพ์เอกสารได้ทันที หรือบันทึกเป็นไฟล์ดิจิทัล PDF",
          ]}
          imageRight={true}
          showGrain={true}
          showGradient={true}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-bill"
          title="ระบบจัดการเอกสารการเงินครบวงจร"
          description="บริหารจัดการรายได้อย่างมืออาชีพ ออกใบเสร็จและใบกำกับภาษีได้รวดเร็ว ถูกต้องตามหลักบัญชี พร้อมระบบสรุปยอดเงินที่ตรวจสอบได้ทุกขั้นตอน"
          features={[
            "ออกใบแจ้งหนี้ ใบเสร็จรับเงิน ใบลดหนี้ และใบกำกับภาษี",
            "คำนวณภาษีมูลค่าเพิ่ม (VAT) และส่วนลดโปรโมชั่นให้อัตโนมัติ",
            "รองรับการชำระเงินหลายรูปแบบ ทั้งเงินสด โอนจ่าย และบัตรเครดิต",
            "บันทึกประวัติการรับชำระและติดตามยอดค้างชำระรายบุคคล",
            "ระบบจัดการรายการขาย และบันทึกค่าใช้จ่ายคลินิกเพื่อสรุปกำไรสุทธิ",
            "ค้นหาและออกเอกสารภาษีย้อนหลังได้ทันที ด้วยระบบ Smart Search",
          ]}
          showGradient={false}
          imageRight={false}
          showGrain={false}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />
        <CoreLeftValues
          iconClass="uil uil-document-layout-center"
          title="ระบบจัดการฉลากยาและคำแนะนำ"
          description="ยกระดับมาตรฐานการจ่ายยาด้วยระบบพิมพ์ฉลากยาอัตโนมัติ ที่ช่วยลดความผิดพลาดและเพิ่มความชัดเจนในการสื่อสารกับคนไข้"
          features={[
            "พิมพ์ฉลากยา และวิธีใช้อย่างถูกต้อง",
            "เทมเพลตฉลากยามาตรฐาน รองรับทั้งเครื่องพิมพ์สติกเกอร์และกระดาษ",
            "ระบบบันทึกคำเตือนและข้อควรระวังพิเศษ (เช่น ยาระวังถ่าย, ยาก่อนอาหาร)",
            "จัดการข้อมูลวิธีใช้ยา (Sig) แบบอัตโนมัติ เพียงเลือกชื่อยาจากระบบ",
            "ปรับแต่งโลโก้คลินิกและข้อมูลติดต่อบนฉลากยาได้ตามต้องการ",
          ]}
          imageRight={true}
          showGradient={true}
          showGrain={true}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-store-alt"
          title="ระบบจัดการคลังยาและวัสดุอุปกรณ์"
          description="บริหารจัดการสต็อกยาและเวชภัณฑ์อย่างเป็นระบบ ตรวจสอบจำนวนคงเหลือได้แบบ Real-time พร้อมระบบแจ้งเตือนการสั่งซื้อที่แม่นยำ"
          features={[
            "ระบบตัดสต็อกยาและวัสดุสิ้นเปลืองอัตโนมัติ เมื่อมีการจ่ายยาหรือทำหัตถการ",
            "แจ้งเตือนเมื่อสินค้าใกล้หมด (Low Stock Alert) และยาใกล้หมดอายุ (Expiry Date)",
            "จัดการรายการสั่งซื้อ (Purchase Order) และระบบรับเข้าสินค้าที่ตรวจสอบได้",
            "จัดการรายการปรับปรุงสต๊อกสินค้า",
            "จัดการข้อมูลคู่ค้า/ผู้จำหน่าย",
            "จัดการรายการโอนสินค้าออก รายการรับเข้า รายการเบิก",
          ]}
          showGradient={false}
          imageRight={false}
          showGrain={false}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-ticket"
          title="ระบบจัดการคูปองและวงเงินคงเหลือ"
          description="ยกระดับการตลาดในคลินิกด้วยระบบจัดการสิทธิพิเศษและวงเงินล่วงหน้า ช่วยให้การบริหารโปรโมชั่นและแพ็กเกจเป็นเรื่องง่ายและตรวจสอบได้แม่นยำ"
          features={[
            "สร้างและจัดการคูปองส่วนลด ทั้งแบบจำนวนเงินและเปอร์เซ็นต์",
            "กำหนดเงื่อนไขการใช้คูปองและวันหมดอายุได้อย่างยืดหยุ่น",
            "บันทึกประวัติการใช้สิทธิ์ของคนไข้อย่างละเอียด ป้องกันการใช้ซ้ำ",
            "สรุปรายงานการใช้สิทธิประโยชน์เพื่อวิเคราะห์ความคุ้มค่าของแคมเปญ",
          ]}
          imageRight={true}
          showGradient={true}
          showGrain={true}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-postcard"
          title="ระบบจัดการรายการเบิกจ่าย E-claim"
          description="เชื่อมต่อการเบิกจ่ายประกันและสวัสดิการต่างๆ อย่างเป็นระบบ ลดขั้นตอนการคีย์ข้อมูลซ้ำซ้อน และเพิ่มโอกาสการอนุมัติเคลมที่รวดเร็วยิ่งขึ้น"
          features={[
            "รองรับการส่งข้อมูลเคลมประกันสุขภาพและสวัสดิการภาครัฐ (E-claim)",
            "ระบบตรวจสอบรหัสโรค (ICD-10) และรหัสหัตถการมาตรฐานอัตโนมัติ",
            "สรุปรายการค่ารักษาพยาบาลแยกตามสิทธิ์การเบิกจ่ายของคนไข้",
            "รายงานสรุปยอดรวมการเบิกจ่ายประจำเดือน เพื่อการกระทบยอดบัญชีที่แม่นยำ",
          ]}
          showGradient={false}
          imageRight={false}
          showGrain={false}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />

        <CoreLeftValues
          iconClass="uil uil-file-info-alt"
          title="ระบบรายงานเชิงลึกกว่า 45 รูปแบบ"
          description="วิเคราะห์ข้อมูลคลินิกได้ครบทุกมิติด้วยรายงานมาตรฐานและรายงานขั้นสูง ที่ช่วยให้คุณเห็นภาพรวมธุรกิจได้ชัดเจนในคลิกเดียว"
          features={[
            "รายงานยอดขายและบัญชี: สรุปรายได้ ภาษีขาย และยอดค้างชำระอย่างละเอียด",
            "รายงานสต็อกยาและเวชภัณฑ์: ตรวจสอบความเคลื่อนไหวสินค้าขายดีและสินค้าคงค้าง",
            "รายงานข้อมูลลูกค้า: วิเคราะห์พฤติกรรมการใช้บริการและสถิติคนไข้ใหม่",
            "รายงานวัตถุอันตรายและยาเสพติด: ออกรายงานส่งกองควบคุมวัตถุเสพติดได้อย่างถูกต้อง",
            "สรุปรายงานตามช่วงเวลา: เลือกดูย้อนหลังได้ทั้งรายวัน รายเดือน และรายปี",
            "Export Data: รองรับการส่งออกไฟล์ Excel และ PDF เพื่อการวิเคราะห์ต่ออย่างง่ายดาย",
          ]}
          imageRight={true}
          showGradient={true}
          showGrain={true}
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />
      </div>
    </section>
  );
}
