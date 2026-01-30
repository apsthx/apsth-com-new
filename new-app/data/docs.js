export const getApiLists = (t) => [
  {
    title: t(
      "api:list1",
      "ดึงข้อมูลเอกสารต่างๆ ได้แก่ ใบแจ้งหนี้, ใบวางมัดจำ, ใบเสร็จและบัญชีลูกหนี้",
    ),
  },
  {
    title: t(
      "api:list2",
      "ดึงข้อมูลลูกค้า ได้แก่ ข้อมูลลูกค้าทั้งหมดและประวัติ OPD Card ทั้งหมด",
    ),
  },
  {
    title: t(
      "api:list3",
      "ดึงข้อมูลรายการตรวจ ตรวจทั่วไป/ตรวจแล็บและรายการผลแล็บ",
    ),
  },
  {
    title: t(
      "api:list4",
      "ดึงข้อมูลการนัดหมาย ได้แก่ เพิ่มนัดหมาย, รายงานการนัดหมายและนัดหมายเพิ่มเติม",
    ),
  },
  {
    title: t(
      "api:list5",
      "ดึงข้อมูลรายการยา/อุปกรณ์ทั้งหมด, รายการคงเหลือ, รอบสต๊อกและรายการหมดอายุ",
    ),
  },
  {
    title: t(
      "api:list6",
      "ดึงข้อมูลรายการใช้บริการ, รายการคอร์สคงเหลือ, รายการตัดคอร์ส",
    ),
  },
  { title: t("api:list7", "ค่ามือแพทย์/ค่ามือพนักงานและต้นทุนยา/อุปกรณ์") },
  { title: t("api:list8", "ดึงข้อมูลรายงานทั้งหมดในระบบ") },
];

export const getDocPlaylists = (t) => [
  {
    id: "list1",
    link: "https://youtube.com/playlist?list=PLMNmwfPqdKEp82IPrpirPNVnGB6T_fzIj&si=wxROFkRhnhvWL1H_",
    title: t("docs:documentation.list1.title", "คู่มือตั้งค่าระบบ"),
    description: t(
      "docs:documentation.list1.description",
      "รายละเอียดการตั้งค่าระบบเบื้องต้นสำหรับผู้เริ่มต้น",
    ),
    icon: "uil-setting",
    color: "#2bc2bb", // สีเขียวมินต์ประจำแบรนด์
  },
  {
    id: "list2",
    link: "https://youtube.com/playlist?list=PLMNmwfPqdKEpe_Sv71sdutQyf5ZKD5ode&si=w-jUW7uUjXRGG2Ux",
    title: t("docs:documentation.list2.title", "คู่มือการใช้งาน"),
    description: t(
      "docs:documentation.list2.description",
      "เจาะลึกฟังก์ชันการทำงานต่างๆ ของ APSX Platform",
    ),
    icon: "uil-book-open",
    color: "#3f78e0", // สีฟ้าสื่อถึงความรู้/คู่มือ
  },
];

export const getSystemUpdates = (t) => [
  {
    id: "blog1",
    version: "Version X",
    tag: "Latest",
    date: "Jan 2026", // เพิ่มวันที่เพื่อให้ดูเป็น Timeline จริงๆ
    title: t("update:blog.blog1.title", "ปรับโครงสร้าง + เขียนระบบใหม่ทั้งหมด"),
    items: t("update:blog.blog1.items", { returnObjects: true }) || [],
    color: "#00b8b8",
  },
  {
    id: "blog2",
    version: "V3.9",
    tag: "Stable",
    date: "Dec 2025",
    title: t("update:blog.blog2.title", "ฟังก์ชันยาชุด คอร์สชุด และตรวจชุด"),
    items: t("update:blog.blog2.items", { returnObjects: true }) || [],
    color: "#3f78e0",
  },
  {
    id: "blog3",
    version: "V2.1 - V3.6",
    tag: "Legacy",
    date: "Mid 2025",
    title: t("update:blog.blog3.title", "ระบบใบเสร็จ + ตั้งค่าวันหยุดคลินิก"),
    items: t("update:blog.blog3.items", { returnObjects: true }) || [],
    color: "#a4aec6",
  },
];
