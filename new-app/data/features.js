export const getFeatures = (t, lng) => [
  {
    id: "blog1",
    title: t("home:features.features.blog1.title", "Real Time Data"),
    description: t(
      "home:features.features.blog1.description",
      "การส่งข้อมูลสะดวกและรวดเร็ว อัปเดตทันที (Sync) ลดระยะเวลาและช่วยให้การตัดสินใจบริหารงานแม่นยำในทุกวินาที",
    ),
    color: "#02a353",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g>
          {/* ขอบนาฬิกาหลัก (Primary - สีเขียวแบรนด์) */}
          <path
            fill="#2bc29d"
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"
          />
          {/* เข็มนาฬิกาสื่อถึงความเร็ว (Secondary - สีเหลืองทอง) */}
          <path
            fill="#f0a51b"
            d="M128,72a8,8,0,0,0-8,8v44.69L98.34,146.34a8,8,0,0,0,11.32,11.32l24-24A8,8,0,0,0,136,128V80A8,8,0,0,0,128,72Z"
          />
          {/* ตกแต่งเงาภายในให้ดูมีมิติ */}
          <circle cx="128" cy="128" r="40" fill="#2bc29d" opacity="0.1" />
          <circle fill="#2bc29d" cx="128" cy="128" r="12" />
        </g>
      </svg>
    ),
  },
  {
    id: "blog2",
    title: t("home:features.features.blog2.title", "AWS Cloud"),
    description: t(
      "home:features.features.blog2.description",
      "ข้อมูลคลินิกถูกรักษาไว้ที่ AWS Cloud ด้วยมาตรฐานความปลอดภัยที่ได้รับการยอมรับจากองค์กรชั้นนำทั่วโลก",
    ),
    color: "#3b73e1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g>
          {/* ฐานก้อนเมฆและส่วนโครงสร้าง (สีหลัก - Primary) */}
          <path
            fill="#3b73e1"
            d="M160,216H80a72,72,0,0,1,0-144,71.07,71.07,0,0,1,16,1.83,88,88,0,1,1,133.56,92.68A64,64,0,0,1,160,216Z"
          />
          {/* ส่วนเงาหรือ Highlight เพื่อความมีมิติ (สีรอง - Secondary) */}
          <path
            fill="#5eb9f0"
            opacity="0.65"
            d="M160,88a63.26,63.26,0,0,1,64,64,64,64,0,0,1-10.44,34.68A88,88,0,0,0,80,72a72.1,72.1,0,0,0-4,0.11A88.11,88.11,0,0,1,160,88Z"
          />
          {/* จุดเชื่อมต่อสื่อถึงการประมวลผล (ถ้าต้องการเพิ่มความเท่) */}
          <circle fill="#ffffff" cx="128" cy="136" r="8" opacity="0.8" />
        </g>
      </svg>
    ),
  },
  {
    id: "blog3",
    title: t("home:features.features.blog3.title", "Data Security"),
    description: t(
      "home:features.features.blog3.description",
      "Web Application Security เข้ารหัสแบบ SSL 256-bit ข้อมูลของคุณจะได้รับการป้องกันด้วยมาตรฐานความปลอดภัยระดับสูงสุด",
    ),
    color: "#d93d4d",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-full h-full"
      >
        <g>
          {/* ตัวบอดี้แม่กุญแจ (สีหลัก - Primary) */}
          <rect x="40" y="88" width="176" height="128" rx="20" fill="#d93d4d" />
          {/* ห่วงกุญแจ (สีรอง - Secondary) */}
          <path
            fill="#d93d4d"
            opacity="0.65"
            d="M80,88V56a48,48,0,0,1,96,0V88H152V56a24,24,0,0,0-48,0V88Z"
          />
          {/* รูกุญแจตรงกลางเพื่อความสวยงาม */}
          <circle cx="128" cy="152" r="12" fill="#ffffff" opacity="0.9" />
          <rect
            x="124"
            y="160"
            width="8"
            height="20"
            fill="#ffffff"
            opacity="0.9"
          />
        </g>
      </svg>
    ),
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
