export const getHighlightFeatures = (t) => [
  {
    title: t("home:platform_highlights.highlights.security.title", "THE BEST"),
    badgeColor: "bg-[#ff0000]",
    icon: "uil-shield-check",
    desc: t(
      "home:platform_highlights.highlights.security.desc",
      "ป้องกันข้อมูลสูญหายด้วยระบบไร้กระดาษ ค้นหาประวัติง่าย และรองรับ OPD ไม่จำกัด",
    ),
  },
  {
    title: t("home:platform_highlights.highlights.multi_branch.title", "NEW"),
    badgeColor: "bg-[#ff8a00]",
    icon: "uil-user-circle",
    desc: t(
      "home:platform_highlights.highlights.multi_branch.desc",
      "รองรับการบริหารจัดการหลายสาขาได้อย่างง่ายดายผ่านเพียง 1 บัญชีผู้ใช้",
    ),
  },
  {
    title: t("home:platform_highlights.highlights.appointment.title", "NEW"),
    badgeColor: "bg-[#ff8a00]",
    icon: "uil-calendar-alt",
    desc: t(
      "home:platform_highlights.highlights.appointment.desc",
      "นัดหมายและจัดคิวแพทย์ได้ง่ายขึ้น พร้อมระบบแจ้งเตือนผ่าน Google Calendar",
    ),
  },
  {
    title: t(
      "home:platform_highlights.highlights.realtime_report.title",
      "THE BEST",
    ),
    badgeColor: "bg-[#ff0000]",
    icon: "uil-chart-line",
    desc: t(
      "home:platform_highlights.highlights.realtime_report.desc",
      "ไม่ต้องเสียเวลาทำสรุปเอง เพราะระบบรวบรวมรายงานให้แบบ Real-time ทันที",
    ),
  },
  {
    title: t("home:platform_highlights.highlights.printing.title", "NEW"),
    badgeColor: "bg-[#ff8a00]",
    icon: "uil-print",
    desc: t(
      "home:platform_highlights.highlights.printing.desc",
      "ครบจบในที่เดียว ทั้งพิมพ์ฉลากยา ใบแจ้งหนี้ ใบเสร็จ และใบกำกับภาษี",
    ),
  },
  {
    title: t(
      "home:platform_highlights.highlights.remote_work.title",
      "THE BEST",
    ),
    badgeColor: "bg-[#ff0000]",
    icon: "uil-file-info-alt",
    desc: t(
      "home:platform_highlights.highlights.remote_work.desc",
      "ตรวจสอบการทำงานและการเงินได้แบบ Real-time ทำงานจากที่ไหนก็ได้",
    ),
  },
];
export const getServicesData = (t, lng) => {
  const data = [
    {
      title: t("home:product_overview.services.opd.title", "ระบบเวชระเบียน"),
      subTitle: t(
        "home:product_overview.services.opd.subTitle",
        "OPD Management",
      ),
      icon: "uil-file-bookmark-alt",
      desc: t(
        "home:product_overview.services.opd.desc",
        "จัดเก็บประวัติคนไข้และข้อมูลการรักษาอย่างเป็นระบบ ค้นหาง่ายเพียงปลายนิ้ว",
      ),
    },
    {
      title: t(
        "home:product_overview.services.stock.title",
        "ระบบบริหารสต็อกยา",
      ),
      subTitle: null,
      icon: "uil-medkit",
      desc: t(
        "home:product_overview.services.stock.desc",
        "ตัดสต็อกอัตโนมัติ แจ้งเตือนเมื่อยาใกล้หมดหรือหมดอายุ",
      ),
    },
    {
      title: t(
        "home:product_overview.services.analytics.title",
        "รายงานวิเคราะห์",
      ),
      subTitle: t(
        "home:product_overview.services.analytics.subTitle",
        "กว่า 40 รูปแบบ",
      ),
      icon: "uil-analytics",
      desc: t(
        "home:product_overview.services.analytics.desc",
        "สรุปยอดขาย กำไร และสถิติคนไข้ครบจบในที่เดียว",
      ),
    },
    {
      title: t("home:product_overview.services.crm.title", "ข้อมูลลูกค้า"),
      subTitle: null,
      icon: "uil-users-alt",
      desc: t(
        "home:product_overview.services.crm.desc",
        "เครื่องมือ CRM เก็บข้อมูลพฤติกรรมการใช้บริการเพื่อแผนการตลาดที่ตรงจุด",
      ),
    },
    {
      title: t(
        "home:product_overview.services.multi_branch.title",
        "รองรับหลายสาขา",
      ),
      subTitle: null,
      icon: "uil-store-alt",
      desc: t(
        "home:product_overview.services.multi_branch.desc",
        "จัดการข้อมูลทุกสาขาได้พร้อมกันผ่าน Centralized Dashboard เพียงบัญชีเดียว",
      ),
    },
    {
      title: t(
        "home:product_overview.services.permissions.title",
        "สิทธิ์การเข้าถึง",
      ),
      subTitle: null,
      icon: "uil-lock-access",
      desc: t(
        "home:product_overview.services.permissions.desc",
        "กำหนดสิทธิ์การมองเห็นข้อมูลของพนักงานแต่ละระดับได้อย่างปลอดภัย",
      ),
    },
  ];
  return data;
};

export const getBillData = (t, lng) => {
  const data = [
    {
      number: "01",
      title: t("home:product_overview.bill.step1.title", "ใบเสนอราคา"),
      description: t(
        "home:product_overview.bill.step1.description",
        "สร้างและส่งใบเสนอราคาอย่างมืออาชีพ เพื่อปิดดีลกับลูกค้าได้รวดเร็วยิ่งขึ้น",
      ),
      isLast: false,
    },
    {
      number: "02",
      title: t("home:product_overview.bill.step2.title", "ใบแจ้งหนี้"),
      description: t(
        "home:product_overview.bill.step2.description",
        "เปลี่ยนใบเสนอราคาเป็นใบแจ้งหนี้ในคลิกเดียว พร้อมระบบติดตามการชำระเงิน",
      ),
      isLast: false,
    },
    {
      number: "03",
      title: t("home:product_overview.bill.step3.title", "ใบเสร็จ"),
      description: t(
        "home:product_overview.bill.step3.description",
        "ออกใบเสร็จรับเงินทันทีเมื่อได้รับการชำระ เพื่อยืนยันความถูกต้องให้แก่ลูกค้า",
      ),
      isLast: false,
    },
    {
      number: "04",
      title: t("home:product_overview.bill.step4.title", "ใบกำกับภาษี"),
      description: t(
        "home:product_overview.bill.step4.description",
        "จัดการเอกสารทางภาษีให้ถูกต้องตามมาตรฐาน ลดความยุ่งยากในช่วงสิ้นเดือน",
      ),
      isLast: true,
    },
  ];
  return data;
};

export const getHighLightsData = (t, lng) => [
  {
    id: "feature-f1",
    badge: "NEW",
    badgeColor: "bg-[#ff8a00]",
    sparkle: true,
    color: "#ff8a00",
    title: t(
      "home:product_overview.high_lights_data.f1.title",
      "Multi-Branch Management",
    ),
    description: t(
      "home:product_overview.high_lights_data.f1.description",
      "รองรับการดูแลจัดการสาขาได้หลายสาขา เพียง 1 User",
    ),
    icon: <i className="uil uil-user-circle text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f2",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f2.title",
      "User Permissions",
    ),
    description: t(
      "home:product_overview.high_lights_data.f2.description",
      "รองรับการกำหนดบทบาทการทำงานของผู้ใช้งานได้ตามต้องการ",
    ),
    icon: <i className="uil uil-users-alt text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f3",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f3.title",
      "Sales Analytics",
    ),
    description: t(
      "home:product_overview.high_lights_data.f3.description",
      "รองรับการดูยอดขาย กำไร/ขาดทุน แยกตามสาขาได้",
    ),
    icon: <i className="uil uil-chart-growth text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f4",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f4.title",
      "Commission System",
    ),
    description: t(
      "home:product_overview.high_lights_data.f4.description",
      "รองรับการให้ค่ามือและค่าคอมมิชชั่น แพทย์ / พนักงาน / พยาบาล ได้หลายแบบ",
    ),
    icon: <i className="uil uil-stethoscope text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f5",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t("home:product_overview.high_lights_data.f5.title", "Accounting"),
    description: t(
      "home:product_overview.high_lights_data.f5.description",
      "รองรับการจัดการผังบัญชีเบื้องต้น (สินทรัพย์ หนี้สิน รายได้ ค่าใช้จ่าย)",
    ),
    icon: <i className="uil uil-calculator text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f6",
    badge: "NEW",
    badgeColor: "bg-[#ff8a00]",
    sparkle: true,
    color: "#ff8a00",
    title: t(
      "home:product_overview.high_lights_data.f6.title",
      "Tax Documents",
    ),
    description: t(
      "home:product_overview.high_lights_data.f6.description",
      "รองรับการออกเอกสาร ใบแจ้งหนี้ ใบเสร็จรับเงิน และใบกำกับภาษี",
    ),
    icon: <i className="uil uil-file-search-alt text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f7",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f7.title",
      "Service & Lab",
    ),
    description: t(
      "home:product_overview.high_lights_data.f7.description",
      "รองรับบริการ คอร์ส/ตรวจ/Lab/X-Ray พร้อมพ่วงยาอุปกรณ์ได้",
    ),
    icon: <i className="uil uil-parcel text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f8",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f8.title",
      "Member Credits",
    ),
    description: t(
      "home:product_overview.high_lights_data.f8.description",
      "รองรับการทำคูปอง/บัตรสมาชิก (วงเงิน)",
    ),
    icon: <i className="uil uil-credit-card text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f9",
    badge: "THE BEST",
    badgeColor: "bg-[#ff0000]",
    sparkle: true,
    color: "#ff0000",
    title: t("home:product_overview.high_lights_data.f9.title", "OPD System"),
    description: t(
      "home:product_overview.high_lights_data.f9.description",
      "รองรับระบบ OPD ไม่จำกัด",
    ),
    icon: <i className="uil uil-bed-double text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f10",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f10.title",
      "Marketing Tools",
    ),
    description: t(
      "home:product_overview.high_lights_data.f10.description",
      "รองรับระบบส่งข้อความโปรโมชั่นผ่าน SMS/Email",
    ),
    icon: <i className="uil uil-envelope-send text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f11",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f11.title",
      "Medical Records",
    ),
    description: t(
      "home:product_overview.high_lights_data.f11.description",
      "รองรับการออกเอกสารเอกสารทางการแพทย์หลากหลาย",
    ),
    icon: <i className="uil uil-file-medical text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f12",
    badge: "NEW",
    badgeColor: "bg-[#ff8a00]",
    sparkle: true,
    color: "#ff8a00",
    title: t("home:product_overview.high_lights_data.f12.title", "Reports"),
    description: t(
      "home:product_overview.high_lights_data.f12.description",
      "รองรับการออกรายงานต่างๆ ทั้งรูปแบบ Excel/PDF",
    ),
    icon: <i className="uil uil-analytics text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f13",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f13.title",
      "Excel Import",
    ),
    description: t(
      "home:product_overview.high_lights_data.f13.description",
      "รองรับการนำเข้ารายการต่างๆ ง่ายๆ ผ่านไฟล์ Excel",
    ),
    icon: <i className="uil uil-file-import text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f14",
    badge: "NEW",
    badgeColor: "bg-[#ff8a00]",
    sparkle: true,
    color: "#ff8a00",
    title: t(
      "home:product_overview.high_lights_data.f14.title",
      "Appointments",
    ),
    description: t(
      "home:product_overview.high_lights_data.f14.description",
      "รองรับการลงนัดหมายทั้งแบบระบุตัวตนและแบบทั่วไป",
    ),
    icon: <i className="uil uil-calendar-alt text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f15",
    badge: null,
    badgeColor: null,
    sparkle: false,
    color: "#343f52",
    title: t(
      "home:product_overview.high_lights_data.f15.title",
      "Alert System",
    ),
    description: t(
      "home:product_overview.high_lights_data.f15.description",
      "รองรับการแจ้งเตือนข้อมูลต่างๆ ในรูปแบบรายงาน",
    ),
    icon: <i className="uil uil-info-circle text-2xl !text-[#f5f5f6]"></i>,
  },
  {
    id: "feature-f16",
    badge: "NEW",
    badgeColor: "bg-[#ff8a00]",
    sparkle: true,
    color: "#ff8a00",
    title: t("home:product_overview.high_lights_data.f16.title", "Alert Alarm"),
    description: t(
      "home:product_overview.high_lights_data.f16.description",
      "รองรับการแจ้งเตือน Alert Alarm หน้าโปรแกรม",
    ),
    icon: (
      <i className="uil uil-monitor-heart-rate text-2xl !text-[#f5f5f6]"></i>
    ),
  },
];
export const getFeaturesData = (t, lng) => [
  {
    id: "blog1",
    title: t(
      "home:product_overview.features.features.blog1.title",
      "Real Time Data",
    ),
    description: t(
      "home:product_overview.features.features.blog1.description",
      "การส่งข้อมูลสะดวกและรวดเร็ว อัปเดตทันที (Sync) ลดระยะเวลาและช่วยให้การตัดสินใจบริหารงานแม่นยำในทุกวินาที",
    ),
    color: "#02a353",
    icon: <i className="uil uil-clock-three text-2xl text-[#02a353]"></i>,
  },
  {
    id: "blog2",
    title: t(
      "home:product_overview.features.features.blog2.title",
      "AWS Cloud",
    ),
    description: t(
      "home:product_overview.features.features.blog2.description",
      "ข้อมูลคลินิกถูกรักษาไว้ที่ AWS Cloud ด้วยมาตรฐานความปลอดภัยที่ได้รับการยอมรับจากองค์กรชั้นนำทั่วโลก",
    ),
    color: "#3b73e1",
    icon: <i className="uil uil-cloud-check text-2xl text-[#3b73e1]"></i>,
  },
  {
    id: "blog3",
    title: t(
      "home:product_overview.features.features.blog3.title",
      "Data Security",
    ),
    description: t(
      "home:product_overview.features.features.blog3.description",
      "Web Application Security เข้ารหัสแบบ SSL 256-bit ข้อมูลของคุณจะได้รับการป้องกันด้วยมาตรฐานความปลอดภัยระดับสูงสุด",
    ),
    color: "#d93d4d",
    icon: <i className="uil uil-shield-check text-2xl text-[#d93d4d]"></i>,
  },
];
export const getFeedbackData = (t, lng) => [
  {
    id: "blog1",
    link: `/${lng}/clinic`,
    title: t("home:features.services.blog1.title", "คลินิก / โรงพยาบาล"),
    description: t(
      "home:features.services.blog1.description",
      "โปรแกรม คลินิก/โรงพยาบาล รองรับ ประเภทบริการ เช่น เฉพาะทาง เวชกรรม ตรวจโรคทั่วไป การผดุงครรภ์ กายภาพบำบัด แพทย์แผนไทย-จีน อายุรกรรม บําบัดยาเสพติด สุขภาพจิตและตา ความงาม และอื่นๆ",
    ),
    img: "/assets/img/features/feedback_clinic.webp",
  },
  {
    id: "blog2",
    link: `/${lng}/wellness`,
    title: t(
      "home:features.services.blog2.title",
      "Wellness / ศูนย์ดูแลผู้สูงอายุ",
    ),
    description: t(
      "home:features.services.blog2.description",
      "โปรแกรม Wellness/ศูนย์ดูแลผู้สูงอายุ รองรับประเภทบริการ เช่น ศูนย์ดูแลผู้สูงอายุ ศูนย์ดูแลสุขภาพ Wellness ศูนย์ดูแลผู้ป่วยเฉพาะทาง ศูนย์ดูแลผู้ป่วยเรื้อรัง และอื่นๆ",
    ),
    img: "/assets/img/features/feedback_wellnss.webp",
  },
  {
    id: "blog3",
    link: `/${lng}/spa`,
    title: t("home:features.services.blog3.title", "Spa / Beauty"),
    description: t(
      "home:features.services.blog3.description",
      "รองรับการจัดการ สปา/ธุรกิจความงาม ในแต่ละประเภทบริการ เช่น ร้านสปา ร้านทำเล็บ ร้านทำผม ร้านเสริมสวย ร้านสักลาย ร้านนวด ร้านออนเซ็น ร้านซาวน่า และอื่นๆ",
    ),
    img: "/assets/img/features/feedback_spa_beauty.webp",
  },
];

export const getApsxPlatformData = (t, lng) => [
  {
    id: "blog1",
    category: "OPD System",
    icon: "uil-medkit",
    title: t(
      "home:platform_highlights.features.blog1.title",
      "ระบบเวชระเบียน (OPD Management)",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog1.sub_title",
      "ฟังก์ชันบันทึกครบถ้วน ครอบคลุมงานหน้าคลินิก",
    ),
    description: t(
      "home:platform_highlights.features.blog1.description",
      "ระบบบันทึกเวชระเบียนที่ออกแบบมาเพื่องานคลินิกโดยเฉพาะ ครอบคลุมทุกขั้นตอนตั้งแต่ลงทะเบียนผู้ป่วย การตรวจรักษา การจ่ายยา ไปจนถึงการเก็บเงิน พร้อมเอกสารทางการแพทย์ที่ครบถ้วน ลดภาระงานเอกสารและเพิ่มประสิทธิภาพการให้บริการ",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list1.title",
          "บันทึก OPD Card ออนไลน์",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list1.description",
          "แทนแฟ้มกระดาษแบบเดิม บันทึกครบถ้วนตามมาตรฐาน",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list2.title",
          "ลงทะเบียน-นัดหมาย-คิว",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list2.description",
          "จัดการผู้ป่วยตั้งแต่ต้นทางถึงปลายทาง",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list3.title",
          "ข้อมูลผู้ป่วยมาตรฐาน JCI/HL7",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list3.description",
          "เก็บข้อมูลระดับสากล",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list4.title",
          "เอกสารทางการแพทย์ 15+ แบบ",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list4.description",
          "ใบรับรอง, ใบนัด, ใบส่งตัว, ใบส่งแล็บ ฯลฯ",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list5.title",
          "บริการ Lab/X-Ray/Course",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list5.description",
          "จัดการบริการพิเศษและคอร์สทรีตเมนต์",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog1.list.list6.title",
          "Face Verification AI",
        ),
        description: t(
          "home:platform_highlights.features.blog1.list.list6.description",
          "ยืนยันตัวตนด้วยใบหน้าเพื่อความปลอดภัย",
        ),
      },
    ],
  },
  {
    id: "blog2",
    category: "Inventory",
    icon: "uil-store",
    title: t(
      "home:platform_highlights.features.blog2.title",
      "ระบบบริหารสต็อกยา",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog2.sub_title",
      "รวมในแพลตฟอร์ม ไม่ต้องซื้อโมดูลเพิ่ม",
    ),
    description: t(
      "home:platform_highlights.features.blog2.description",
      "ระบบจัดการคลังยาและเวชภัณฑ์ที่ครบครันและทรงพลัง รวมอยู่ในแพ็คเกจหลักโดยไม่มีค่าใช้จ่ายเพิ่มเติม ควบคุมสต็อก ติดตามล็อต ตรวจสอบวันหมดอายุ และบริหารต้นทุนได้อย่างมีประสิทธิภาพ",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list1.title",
          "จัดการสต็อค Real-time",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list1.description",
          "อัพเดทสต็อคทันทีที่มีการจ่ายยาหรือรับเข้า",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list2.title",
          "ระบบแจ้งเตือนอัจฉริยะ",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list2.description",
          "เตือนยาหมดอายุ ยาใกล้หมด ยาหมดสต็อค",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list3.title",
          "จัดการล็อตยา",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list3.description",
          "ติดตามแต่ละล็อต วันผลิต วันหมดอายุ แยกตามล็อต",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list4.title",
          "การสั่งซื้อ-โอนสต็อค",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list4.description",
          "สั่งซื้อจากซัพพลายเออร์ โอนสต็อคระหว่างสาขา",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list5.title",
          "รายงานความเคลื่อนไหว",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list5.description",
          "ติดตามการจ่าย-รับเข้า มูลค่าสต็อค",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog2.list.list6.title",
          "ปรับปรุงสต็อค",
        ),
        description: t(
          "home:platform_highlights.features.blog2.list.list6.description",
          "ปรับเพิ่ม/ลด สต็อคเมื่อมีของเสีย หรือตรวจนับ",
        ),
      },
    ],
  },
  {
    id: "blog3",
    category: "Reports",
    icon: "uil-chart-line",
    title: t(
      "home:platform_highlights.features.blog3.title",
      "รายงานวิเคราะห์กว่า 40 รูปแบบ",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog3.sub_title",
      "ครอบคลุมทั้งงานบริการ การเงิน และการบริหาร",
    ),
    description: t(
      "home:platform_highlights.features.blog3.description",
      "ระบบรายงานที่ครบครันและหลากหลาย ตอบโจทย์ทุกมิติการบริหารงาน ตั้งแต่รายงานด้านการเงิน บัญชี คลังยา ไปจนถึงการตลาด Export เป็น Excel/PDF ได้ทันที",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list1.title",
          "รายงานการเงิน-บัญชี",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list1.description",
          "กำไร/ขาดทุน, รายได้, ลูกหนี้, ใบเสร็จ, ใบกำกับภาษี",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list2.title",
          "รายงานการให้บริการ",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list2.description",
          "OPD, Lab, X-Ray, คอร์ส, การนัดหมาย",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list3.title",
          "รายงานคลังยา-เวชภัณฑ์",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list3.description",
          "สต็อค, ความเคลื่อนไหว, หมดอายุ, การสั่งซื้อ",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list4.title",
          "รายงานวิเคราะห์ยอดขาย",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list4.description",
          "Top Sale, Forecasting, Sale Pipeline, RFM",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list5.title",
          "รายงานค่ามือ-คอมมิชชั่น",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list5.description",
          "แพทย์, พยาบาล, พนักงาน แยกตามประเภท",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog3.list.list6.title",
          "รายงานทางการแพทย์",
        ),
        description: t(
          "home:platform_highlights.features.blog3.list.list6.description",
          "วัตถุออกฤทธิ์ (ร.ขจ.2, ร.ว.จ.3/4, ย.ส.5/6/7)",
        ),
      },
    ],
  },
  {
    id: "blog4",
    category: "CRM",
    icon: "uil-users-alt",
    title: t(
      "home:platform_highlights.features.blog4.title",
      "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog4.sub_title",
      "เพื่อนำไปต่อยอดทำการตลาดและ CRM",
    ),
    description: t(
      "home:platform_highlights.features.blog4.description",
      "ระบบ CRM และ Marketing Automation วิเคราะห์พฤติกรรมการซื้อ แบ่งกลุ่มลูกค้า และส่งโปรโมชั่นได้อย่างตรงเป้าหมาย เพิ่มยอดขายและรักษาฐานลูกค้าเก่า",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list1.title",
          "RFM Analysis",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list1.description",
          "วิเคราะห์พฤติกรรมลูกค้า (Recency, Frequency, Monetary)",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list2.title",
          "Customer Segmentation",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list2.description",
          "แบ่งกลุ่มลูกค้าตามเกณฑ์ต่างๆ",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list3.title",
          "Marketing Campaign",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list3.description",
          "ส่งโปรโมชั่นผ่าน SMS/Email/Line OA",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list4.title",
          "Sale Pipeline",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list4.description",
          "ติดตาม Lead และโอกาสการขายจนปิดการขาย",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list5.title",
          "Line Official Account",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list5.description",
          "เชื่อมต่อ Line ให้ลูกค้าตรวจสอบข้อมูลได้เอง",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog4.list.list.list6.title",
          "ระบบแต้มสะสมและคูปอง",
        ),
        description: t(
          "home:platform_highlights.features.blog4.list.list.list6.description",
          "สร้าง Loyalty Program เพื่อรักษาฐานลูกค้า",
        ),
      },
    ],
  },
  {
    id: "blog5",
    category: "Multi-Branch",
    icon: "uil-layers",
    title: t(
      "home:platform_highlights.features.blog5.title",
      "รองรับหลายสาขาในบัญชีเดียว",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog5.sub_title",
      "จัดการได้จากศูนย์กลาง",
    ),
    description: t(
      "home:platform_highlights.features.blog5.description",
      "ระบบ Multi-Branch ควบคุมภาพรวมทุกสาขาจากบัญชีเดียว โอนสต็อคระหว่างสาขา เปรียบเทียบผลประกอบการ และบริหารฐานข้อมูลลูกค้าชุดเดียวกัน",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list1.title",
          "จัดการจากศูนย์กลาง",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list1.description",
          "ดูและควบคุมทุกสาขาจาก User เดียว",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list2.title",
          "Dashboard แบบ Real-time",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list2.description",
          "ดูภาพรวมยอดขาย กำไร ของทุกสาขาทันที",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list3.title",
          "โอนสต็อคระหว่างสาขา",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list3.description",
          "จัดสรรยาและอุปกรณ์ระหว่างสาขาได้สะดวก",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list4.title",
          "ตั้งค่าแยกได้",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list4.description",
          "กำหนดราคา โปรโมชั่น สิทธิ์แยกตามสาขา",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list5.title",
          "รายงานเปรียบเทียบ",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list5.description",
          "เทียบผลประกอบการระหว่างสาขาได้ง่าย",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog5.list.list.list6.title",
          "ข้อมูลลูกค้ารวม",
        ),
        description: t(
          "home:platform_highlights.features.blog5.list.list.list6.description",
          "ฐานข้อมูลเดียวกัน ใช้บริการได้ทุกสาขา",
        ),
      },
    ],
  },
  {
    id: "blog6",
    category: "Security",
    icon: "uil-shield-check",
    title: t(
      "home:platform_highlights.features.blog6.title",
      "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
    ),
    sub_title: t(
      "home:platform_highlights.features.blog6.sub_title",
      "แบ่งโฟลว์การทำงานตามระดับผู้ใช้",
    ),
    description: t(
      "home:platform_highlights.features.blog6.description",
      "ระบบจัดการสิทธิ์ที่ยืดหยุ่น ควบคุมการเข้าถึงข้อมูลละเอียดถึงระดับเมนู กำหนดได้ตามบทบาท พร้อมระบบความปลอดภัย 2 ชั้น ป้องกันการเข้าถึงข้อมูลที่ไม่เหมาะสม",
    ),
    list: [
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list1.title",
          "Role-Based Access Control",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list1.description",
          "กำหนดสิทธิ์ตามบทบาท เจ้าของ/แพทย์/พนักงาน",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list2.title",
          "การจำกัดการเข้าถึงข้อมูล",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list2.description",
          "ควบคุมคนเห็นข้อมูล ละเอียดถึงระดับเมนู",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list3.title",
          "Google Authenticator",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list3.description",
          "ระบบ Login 2 ชั้น เพิ่มความปลอดภัยสูงสุด",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list4.title",
          "กำหนดเวลาการใช้งาน",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list4.description",
          "ตั้งเวลาเปิด-ปิดการเข้าถึงระบบตามช่วงเวลา",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list5.title",
          "Audit Log",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list5.description",
          "บันทึกการเข้าใช้งานและการแก้ไขข้อมูลทั้งหมด",
        ),
      },
      {
        title: t(
          "home:platform_highlights.features.blog6.list.list.list6.title",
          "IP Whitelist",
        ),
        description: t(
          "home:platform_highlights.features.blog6.list.list.list6.description",
          "จำกัดการเข้าถึงจาก IP ที่กำหนดเท่านั้น",
        ),
      },
    ],
  },
];

export const AiSuggestion = (t, lng) => [
  {
    id: "item1",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list1.title",
      "CC - Chief Complaint (อาการสำคัญ)",
    ),
  },
  {
    id: "item2",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list2.title",
      "PMH - Past Medical History (ประวัติการรักษา)",
    ),
  },
  {
    id: "item3",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list3.title",
      "PE - Physical Examination (การตรวจร่างกาย)",
    ),
  },
  {
    id: "item4",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list4.title",
      "NOTE - Note (บันทึกเพิ่มเติม)",
    ),
  },
  {
    id: "item5",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list5.title",
      "HPI - History of Present Illness (ประวัติอาการปัจจุบัน)",
    ),
  },
  {
    id: "item6",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list6.title",
      "DX - Diagnosis (การวินิจฉัยโรค)",
    ),
  },
  {
    id: "item7",
    item: t(
      "home:platform_highlights.ai_suggestion.list.list7.title",
      "GA - General Appearance (ลักษณะทั่วไป)",
    ),
  },
];

export const getWhyApsx = (t) => [
  {
    id: "reason1",
    title: t("home:why_apsx.why_apsx.apsx_items.blog1.title", "ใช้งานง่าย"),
    desc: t(
      "home:why_apsx.why_apsx.apsx_items.blog1.description",
      "UI/UX ออกแบบมาให้สะดวก ไม่ซับซ้อน",
    ),
    icon: "uil uil-apps",
    bgColor: "bg-[#E1FAF6]",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "reason2",
    title: t("home:why_apsx.why_apsx.apsx_items.blog2.title", "Cloud-Based"),
    desc: t(
      "home:why_apsx.why_apsx.apsx_items.blog2.description",
      "ใช้งานได้ทุกที่ ทุกเวลา บน AWS Cloud",
    ),
    icon: "uil-cloud-share",
    bgColor: "bg-[#edf9f6]",
    iconColor: "text-[#45c4a0]",
  },
  {
    id: "reason3",
    title: t("home:why_apsx.why_apsx.apsx_items.blog3.title", "อัปเดตฟรี"),
    desc: t(
      "home:why_apsx.why_apsx.apsx_items.blog3.description",
      "อัปเดตฟังก์ชันใหม่อัตโนมัติ ไม่มีค่าใช้จ่ายเพิ่ม",
    ),
    icon: "uil-sync",
    bgColor: "bg-[#eff7fa]",
    iconColor: "text-[#54a8c7]",
  },
  {
    id: "reason4",
    title: t("home:why_apsx.why_apsx.apsx_items.blog4.title", "ฝึกอบรมฟรี"),
    desc: t(
      "home:why_apsx.why_apsx.apsx_items.blog4.description",
      "สอนการใช้งานฟรี พร้อมให้คำปรึกษา",
    ),
    icon: "uil uil-comments",
    bgColor: "bg-[#fff8ee]",
    iconColor: "text-[#fab758]",
  },
];

export const getApsxWhyFeatures = (t) => [
  {
    id: "new-blog1",
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog1.title",
      "Simple Control Shop",
    ),
    desc: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog1.description",
      "สามารถดูยอดขายได้หลายสาขารวมไปถึงการจัดการได้ง่ายใน User เดียวเท่านั้น",
    ),
    icon: "uil-store",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "new-blog2",
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog2.title",
      "Top Sales Products And Services",
    ),
    desc: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog2.description",
      "สามารถดูยอดขายได้หลายสาขา และสามารถดูยอดขายแยกตามประเภทสินค้าได้ รายบุคคล รายเดือน รายปี",
    ),
    icon: "uil-chart-line",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "new-blog3",
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog3.title",
      "User Interface สวยงามใช้งานง่าย",
    ),
    desc: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog3.description",
      "ระบบถูกออกแบบมาเพื่อให้ใช้งานง่ายไม่ซับซ้อนไม่ยุ่งยาก เทคโนโลยีใหม่ในยุคนี้",
    ),
    icon: "uil-layers",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "new-blog4", // แก้จาก blog3 เป็น blog4
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog4.title",
      "Forecasting การวิเคราะห์ยอดขาย",
    ),
    desc: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog4.description",
      "ก่อนเริ่มกิจกรรมทางการตลาดใดๆ คุณต้องประเมินว่ากิจกรรมนั้นจะประสบความสำเร็จเพียงใด",
    ),
    icon: "uil-analytics",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "new-blog5", // แก้จาก blog3 เป็น blog5
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog5.title",
      "ระบบจัดการไฟล์",
    ),
    desc: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog5.description",
      "สามารถจัดการไฟล์ได้อย่างมีประสิทธิภาพ ได้แก่ Lab, X-ray, รูปภาพ และเอกสารอื่นๆ",
    ),
    icon: "uil-folder-medical",
    iconColor: "text-[#1bb59b]",
  },
  {
    id: "new-blog6", // แก้จาก blog3 เป็น blog6
    title: t(
      "home:why_apsx.what_new_apsx.what_new_items.blog6.title",
      "ระบบจัดการ Admin",
    ),
    desc: t(
      "home:why_apsx.why_apsx.apsx_items.blog6.description",
      "ยืดหยุ่นสูง สามารถจัดการทั้งหมดภายใน User เดียว สิทธิ์การใช้งาน และการตั้งค่าระบบ",
    ),
    icon: "uil-setting",
    iconColor: "text-[#1bb59b]",
  },
];

export const getSecurityFactors = (lng) => [
  {
    id: "factor1",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/factor_login1.webp",
    title: "APSX Security Dashboard",
  },
  {
    id: "factor2",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/factor_login2.webp",
    title: "Authentication Process",
  },
];

export const getVerificationSystems = (lng) => [
  {
    id: "auth-1",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/face_verification_system1.webp",
    title: "APSX Security Dashboard",
  },
  {
    id: "auth-2",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/face_verification_system2.webp",
    title: "Authentication Process",
  },
];

export const getSystemAddons = (lng) => [
  {
    id: "addon-1",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/system_add_on1.webp",
    title: "APSX Security Dashboard",
  },
  {
    id: "addon-2",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/system_add_on2.webp",
    title: "Authentication Process",
  },
  {
    id: "addon-3",
    link: `/${lng}/clinic`,
    img: "/assets/img/platform/system_add_on3.webp",
    title: "Authentication Process",
  },
];

export const getApsxPartners = (t) => [
  {
    id: "partner-1",
    link: "https://paysolutions.asia/",
    title: t("home:why_apsx.partner.blog1.title", "Pay Solutions"),
    description: t(
      "home:why_apsx.partner.blog1.description",
      "ระบบตัดบัตรออนไลน์ รองรับช่องทางชำระเงินออนไลน์ที่หลากหลาย",
    ),
    img: "/assets/img/partners/partner_paysoltions.jpg",
  },
  {
    id: "partner-2",
    link: "https://dietz.asia/",
    title: t("home:why_apsx.partner.blog2.title", "Dietz.asia"),
    description: t(
      "home:why_apsx.partner.blog2.description",
      "ระบบ Telemedicine ครบวงจรสำหรับคลินิก พร้อมการขออนุญาตช่วยดูแลผู้ป่วยออนไลน์ได้ตามกฎหมาย",
    ),
    img: "/assets/img/partners/partner_dietz.jpg",
  },
  {
    id: "partner-3",
    link: "#",
    title: t("home:why_apsx.partner.blog3.title", "LIS/LAB Plus"),
    description: t(
      "home:why_apsx.partner.blog3.description",
      "ระบบดึงผล Lab/X-Ray ผ่านระบบ LIS มาแสดงผลในระบบอัตโนมัติ",
    ),
    img: "/assets/img/partners/partner_labplus.jpg",
  },
  {
    id: "partner-4",
    link: "https://www.nhso.go.th/",
    title: t(
      "home:why_apsx.partner.blog4.title",
      "ระบบแฟ้มเบิกค่าใช้จ่าย (e-Claim)",
    ),
    description: t(
      "home:why_apsx.partner.blog4.description",
      "รองรับการเบิกค่าใช้จ่ายสาธารณสุข (e-Claim) 16 แฟ้ม สำหรับหน่วยงานรัฐ",
    ),
    img: "/assets/img/partners/partner_eclaim.jpg",
  },
  {
    id: "partner-5", // แก้ไข key จาก blog5 เป็น partner-5 เพื่อความเป็นระบบ
    link: "https://www.peakaccount.com/",
    title: t("home:why_apsx.partner.blog5.title", "PEAK Account"),
    description: t(
      "home:why_apsx.partner.blog5.description",
      "โปรแกรมบัญชีออนไลน์ที่ครอบคลุมที่สุดในไทย ให้เจ้าของธุรกิจรับรู้สภาพการเงินที่แท้จริง",
    ),
    img: "/assets/img/partners/partner_peak.jpg",
    status: "coming_soon", // เพิ่ม Flag สำหรับ Badge พิเศษ
  },
];

export const getFaqList = (t) => [
  {
    id: "1",
    question: t(
      "home:faq.questions.list1.question",
      "โปรแกรม APSX Platform คืออะไร",
    ),
    answer: t(
      "home:faq.questions.list1.answer",
      "เป็นระบบบริหารจัดการคลินิก ที่ช่วยให้คุณบริหารจัดการคลินิกของคุณได้สะดวกรวดเร็วและมีประสิทธิภาพสูงสุด...",
    ),
  },
  {
    id: "2",
    question: t("home:faq.questions.list2.question", "ระบบคลาวด์ คืออะไร ?"),
    answer: t(
      "home:faq.questions.list2.answer",
      "Cloud Computing คือ การที่เราใช้ซอฟต์แวร์, ระบบ, และทรัพยากรของเครื่องคอมพิวเตอร์ผ่านอินเทอร์เน็ต...",
    ),
  },
  {
    id: "3",
    question: t(
      "home:faq.questions.list3.question",
      "ระบบสามารถใช้งานบน Macbook, iMac, Notebook, PC ได้หรือไม่ ?",
    ),
    answer: t(
      "home:faq.questions.list3.answer",
      "ระบบสามารถทำงานร่วมกับอุปกรณ์ทุกชนิด เพียงแค่ติดตั้ง Google Chrome ก็สามารถใช้งานได้ทันที",
    ),
  },
  {
    id: "4",
    question: t(
      "home:faq.questions.list4.question",
      "การ Update ระบบต้องลงโปรแกรมเพิ่มหรือไม่ ?",
    ),
    answer: t(
      "home:faq.questions.list4.answer",
      "ระบบจะทำการอัพเดตฟังก์ชันใหม่ๆ ให้โดยอัตโนมัติ ผู้ใช้สามารถใช้งานได้ทันทีโดยไม่มีค่าใช้จ่ายเพิ่มเติม",
    ),
  },
  {
    id: "5",
    question: t(
      "home:faq.questions.list5.question",
      "ถ้ามีข้อสงสัยเกี่ยวกับการใช้โปรแกรม สอบถามได้ที่ใด ?",
    ),
    answer: t(
      "home:faq.questions.list5.answer",
      "สามารถสอบถามได้ที่ LINE: @apsth หรือรับชมวิดีโอสอนการใช้งานได้ตลอด 24 ชม.",
    ),
  },
  {
    id: "6",
    question: t(
      "home:faq.questions.list6.question",
      "มีการอบรมการใช้โปรแกรมหรือไม่ ?",
    ),
    answer: t(
      "home:faq.questions.list6.answer",
      "APSTH มีการอบรมออนไลน์ให้ 1 ครั้งฟรี และสามารถนัดหมายทีมงานเพิ่มเติมได้โดยไม่มีค่าใช้จ่าย",
    ),
  },
  {
    id: "7",
    question: t(
      "home:faq.questions.list7.question",
      "การติดตั้งระบบ Clinic APSTH ใช้เวลานานไหม ?",
    ),
    answer: t(
      "home:faq.questions.list7.answer",
      "หลังจากชำระเงินและส่งข้อมูลครบถ้วน ระบบจะพร้อมใช้งานภายในเวลาไม่เกิน 20 นาที",
    ),
  },
];

export const getSystemFunctions = (t) => [
  { id: 1, title: t("clinic:system_functions.list1", "ภาพรวม Overview") },
  {
    id: 2,
    title: t(
      "clinic:system_functions.list2",
      "รองรับการดูยอดขายได้หลายสาขาพร้อมกัน",
    ),
  },
  {
    id: 3,
    title: t(
      "clinic:system_functions.list3",
      "รองรับการดูยอด กำไร/ขาดทุน และ Top Sale",
    ),
  },
  {
    id: 4,
    title: t(
      "clinic:system_functions.list4",
      "การจัดการง่ายใน User เดียว (Simple Control Shop)",
    ),
  },
  {
    id: 5,
    title: t(
      "clinic:system_functions.list5",
      "จัดการได้ด้วยตัวเอง ไม่ต้องเรียกใช้งานฝ่าย IT",
    ),
  },
  {
    id: 6,
    title: t(
      "clinic:system_functions.list6",
      "ระบบค่าคอมมิชชั่นแบบขั้นบันได และค่ามือพนักงาน",
    ),
  },
  {
    id: 7,
    title: t(
      "clinic:system_functions.list7",
      "การตั้งค่าเอกสารยืดหยุ่น และผังบัญชี",
    ),
  },
  {
    id: 8,
    title: t(
      "clinic:system_functions.list8",
      "จัดการข้อมูลลูกค้า มาตรฐาน JCI/HL7 ระดับสากล",
    ),
  },
  {
    id: 9,
    title: t(
      "clinic:system_functions.list9",
      "รองรับพันธุกรรมครอบครัว และประวัติสุขภาพจิต",
    ),
  },
  {
    id: 10,
    title: t(
      "clinic:system_functions.list10",
      "รองรับบริการ คอร์ส/Lab/X-Ray และการตัดต้นทุน",
    ),
  },
  {
    id: 11,
    title: t(
      "clinic:system_functions.list11",
      "รองรับการให้ค่ามือแพทย์ และค่าคอมมิชชั่น",
    ),
  },
  {
    id: 12,
    title: t(
      "clinic:system_functions.list12",
      "รองรับระบบการบริหารจัดการ IPD/OPD",
    ),
  },
  {
    id: 13,
    title: t(
      "clinic:system_functions.list13",
      "ระบบส่งโปรโมชั่นผ่านข้อความ และ Email",
    ),
  },
  {
    id: 14,
    title: t(
      "clinic:system_functions.list14",
      "รองรับการออกเอกสารทางการแพทย์ครบวงจร",
    ),
  },
  {
    id: 15,
    title: t(
      "clinic:system_functions.list15",
      "รายงานผลในรูปแบบ Excel และ PDF",
    ),
  },
  {
    id: 16,
    title: t("clinic:system_functions.list16", "และฟังก์ชันอื่นๆ อีกมากมาย"),
  },
];

export const getClinicReports = (t) => [
  // --- กลุ่มบริการและลูกค้า ---
  { id: 1, title: t("clinic:all_reports.list1", "รายงานสรุปข้อมูลลูกค้า") },
  { id: 2, title: t("clinic:all_reports.list2", "รายงานสรุปการวินิจฉัยโรค") },
  { id: 3, title: t("clinic:all_reports.list3", "รายงานการจัดคิว") },
  { id: 4, title: t("clinic:all_reports.list4", "รายงานสรุปการใช้บริการ") },
  {
    id: 7,
    title: t("clinic:all_reports.list7", "รายงานสรุปการตรวจ/Lab/X-Ray"),
  },
  { id: 10, title: t("clinic:all_reports.list10", "รายงานสรุปประวัติ OPD") },
  { id: 12, title: t("clinic:all_reports.list12", "รายงานการนัดหมาย") },

  // --- กลุ่มวิเคราะห์และการตลาด ---
  { id: 8, title: t("clinic:all_reports.list8", "รายงานวิเคราะห์ยอดขาย") },
  {
    id: 9,
    title: t("clinic:all_reports.list9", "รายงานการวิเคราะห์ยอดซื้อ RFM"),
  },
  { id: 13, title: t("clinic:all_reports.list13", "รายงาน Sale Pipeline") },
  { id: 37, title: t("clinic:all_reports.list37", "รายงานแต้ม") },

  // --- กลุ่มคลังยาและอุปกรณ์ ---
  { id: 14, title: t("clinic:all_reports.list14", "รายงานยา/อุปกรณ์") },
  {
    id: 18,
    title: t("clinic:all_reports.list18", "รายงานสรุปล็อตยา/อุปกรณ์คงเหลือ"),
  },
  {
    id: 20,
    title: t("clinic:all_reports.list20", "รายงานแจ้งเตือนยา/อุปกรณ์หมดอายุ"),
  },
  {
    id: 22,
    title: t("clinic:all_reports.list22", "รายงานแจ้งเตือนยา/อุปกรณ์ใกล้จะหมด"),
  },

  // --- กลุ่มบัญชีและภาษี ---
  { id: 25, title: t("clinic:all_reports.list25", "รายงานยอดขาย/บัญชี") },
  { id: 26, title: t("clinic:all_reports.list26", "รายงานสรุปกำไร/ขาดทุน") },
  { id: 31, title: t("clinic:all_reports.list31", "รายงานใบกำกับภาษี") },
  {
    id: 32,
    title: t("clinic:all_reports.list32", "รายงานสรุปค่ามือ/คอมมิชชั่น"),
  },

  // --- กลุ่มรายงานราชการ/ยาเสพติด (สำคัญมากสำหรับคลินิก) ---
  {
    id: 39,
    title: t("clinic:all_reports.list39", "รายงานวัตถุออกฤทธิ์/ยาเสพติดให้โทษ"),
  },
  { id: 40, title: t("clinic:all_reports.list40", "รายงาน ร.ขจ.2") },
  { id: 41, title: t("clinic:all_reports.list41", "รายงาน ร.ว.จ.3/4") },
  { id: 43, title: t("clinic:all_reports.list43", "รายงาน ย.ส.5/6/7") },
  // ... ใส่ให้ครบตามที่คุณลิสต์ไว้ด้านบน
];
