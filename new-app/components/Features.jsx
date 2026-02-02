import { useTranslation } from "@/app/i18n";
import { getFeaturesData } from "@/data/features";
import CoreLeftValues from "@/components/common/CoreValues";
import GrowthCard from "@/components/common/GrowthCard";

export default async function Features({ lng }) {
  const { t } = await useTranslation(lng);
  const featuresItems = getFeaturesData(t, lng);

  return (
    <section className=" wrapper overflow-hidden ">
      <section className="container bg-white py-16 px-4 md:px-8 lg:px-20 font-sans text-[#333]">
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap gap-12 items-start">
          {/* ฝั่งซ้าย: เนื้อหาข้อความ */}
          <div className="w-full lg:w-3/5">
            <div className="mb-6">
              <h2 className="!text-4xl !font-bold !text-[#1e293b]">
                {t("home:title", "โปรแกรม คลินิก APSX Platform")}
              </h2>
              <h3 className="!text-xl !font-medium !text-[#1e293b]">
                {t(
                  "home:features.title",
                  "ระบบที่ใช้งานง่ายมี ประสิทธิภาพและทันสมัย ที่สุดในตอนนี้",
                )}
              </h3>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                {t(
                  "home:features.description",
                  "เป็นระบบที่ลงตัวมาพร้อมกับการใช้งานง่าย สะดวกสบาย และรันบน Cloud ด้วยเทคโนโลยีที่ทันสมัยในยุคนี้ ทำให้ไม่ต้องใช้แฟ้ม OPD Card แบบเก่าอีกต่อไป",
                )}
              </p>
              <p>
                {t(
                  "home:features.features.description",
                  "ยกระดับการบริหารจัดการคลินิกด้วยเทคโนโลยี Cloud อัจฉริยะ ที่ออกแบบมาเพื่อความรวดเร็วและความปลอดภัยสูงสุดของข้อมูลคุณ",
                )}
              </p>
            </div>
            {/* รายการบริการ (Bullets) */}
            <div className="mt-8 grid md:grid-cols-1 gap-2">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  ระบบหลังบ้านที่ทำให้เรื่องคลินิกเป็นเรื่องง่าย ครบจบในที่เดียว
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>
                    {t(
                      "home:platform_highlights.features.blog1.title",
                      "ระบบเวชระเบียน (OPD Management)",
                    )}
                  </li>
                  <li>
                    {t(
                      "home:platform_highlights.features.blog2.title",
                      "ระบบบริหารสต็อกยา",
                    )}
                  </li>
                  <li>
                    {t(
                      "home:platform_highlights.features.blog3.title",
                      "รายงานวิเคราะห์กว่า 40 รูปแบบ",
                    )}
                  </li>
                  <li>
                    {t(
                      "home:platform_highlights.features.blog4.title",
                      "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
                    )}
                  </li>
                  <li>
                    {t(
                      "home:platform_highlights.features.blog5.title",
                      "รองรับหลายสาขาในบัญชีเดียว",
                    )}
                  </li>
                  <li>
                    {t(
                      "home:platform_highlights.features.blog6.title",
                      "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  ประสบการณ์ไร้รอยต่อในทุกหน้าจอ
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>แสดงผลสมบูรณ์แบบทั้ง Desktop และ Mobile</li>
                  <li>อินเทอร์เฟซใช้งานง่าย ออกแบบมาเพื่อคุณ</li>
                  <li>เข้าถึงข้อมูลได้รวดเร็ว ทุกที่ ทุกเวลา</li>
                </ul>
              </div>
              <div
                data-cues="slideInDown"
                data-delay={300}
                className="container flex flex-wrap gap-4"
              >
                {featuresItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative"
                    title={item.title}
                  >
                    {/* กรอบไอคอน */}
                    <div className="flex-shrink-0">
                      <div className="border border-[#a4aec633] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-3 flex items-center justify-center w-[60px] h-[60px] transition-all duration-300 group-hover:shadow-md cursor-pointer">
                        <div className="w-full h-full flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-orange-100 rounded-full w-64 h-64 md:w-96 md:h-96 absolute blur-3xl opacity-50 -z-10"></div>
              <GrowthCard />
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
          showPattern={false}
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
          // gradientColors={["#ffffff", "#E5FFF8"]}
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
          imageRight={false}
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
          imageRight={false}
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
          // gradientColors={["#ffffff", "#E5FFF8"]}
          showPattern={false}
          patternColor="rgba(27, 181, 168, 0.05)"
        />
      </div>
    </section>
  );
}
