import StickyServiceSection from "@/components/common/StickyServiceSection";

export default function ServicesAPSXPlatform() {
  const myServices = [
    {
      title: "ระบบเวชระเบียน (OPD Management)",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#fdf1f8]", // สีชมพูอ่อน
      iconColor: "text-[#e668b3]",
      icon: (
        <i className="uil uil-medkit text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
    {
      title: "ระบบบริหารสต็อกยา",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#eff7fa]", // สีฟ้าอ่อน
      iconColor: "text-[#54a8c7]",
      icon: (
        <i className="uil uil-store text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
    {
      title: "รายงานวิเคราะห์กว่า 40 รูปแบบ",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#f0f0f9]", // สีม่วงอ่อน
      iconColor: "text-[#605dba]",
      icon: (
        <i className="uil uil-chart-line text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
    ,
    {
      title: "เครื่องมือเก็บ–ใช้ข้อมูลลูกค้า",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#f0f0f9]", // สีม่วงอ่อน
      iconColor: "text-[#605dba]",
      icon: (
        <i className="uil uil-users-alt text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
    {
      title: "รองรับหลายสาขาในบัญชีเดียว",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#f0f0f9]", // สีม่วงอ่อน
      iconColor: "text-[#605dba]",
      icon: (
        <i className="uil uil-layers text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
    {
      title: "สิทธิ์การเข้าถึงที่ยืดหยุ่น",
      description:
        "Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit.",
      bgColor: "bg-[#f0f0f9]", // สีม่วงอ่อน
      iconColor: "text-[#605dba]",
      icon: (
        <i className="uil uil-shield-check text-[#1bb59b] text-[1.2rem] leading-none" />
      ),
    },
  ];

  return (
    <main>
      <StickyServiceSection
        title="The service"
        description="Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla."
        services={myServices}
        buttonText="ดูรายละเอียดทั้งหมด"
      />
    </main>
  );
}
