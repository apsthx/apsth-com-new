import ModernServiceShowcase from "@/components/common/ModernServiceShowcase";

export default function ServiceDesign() {
  const featureData = [
    {
      title: "ระบบคลาวด์ 100%",
      description:
        "ใช้งานผ่านเบราว์เซอร์ได้ทันที ไม่ต้องติดตั้งโปรแกรม พร้อมระบบสำรองข้อมูลอัตโนมัติ",
      imageSrc: "/assets/img/photos/se1.jpg",
      iconClass: "uil uil-monitor",
      iconBgClass: "btn-soft-primary",
    },
    {
      title: "ใช้งานได้ทุกอุปกรณ์",
      description:
        "ติดตามยอดขายและเช็คจำนวนคนไข้แบบ Real-time ได้ทุกที่ผ่านสมาร์ทโฟนและแท็บเล็ต",
      imageSrc: "/assets/img/photos/se2.jpg",
      iconClass: "uil uil-mobile-android",
      iconBgClass: "btn-soft-green",
    },
  ];

  return (
    <div className="py-16">
      <ModernServiceShowcase title="Responsive Design" items={featureData} />
    </div>
  );
}
