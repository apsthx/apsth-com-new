import ModernServiceShowcase from "@/components/common/ModernServiceShowcase";

export default function ServiceDesign() {
  const featureData = [
    {
      title: "Web Design",
      description:
        "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
      imageSrc: "/assets/img/photos/se1.jpg",
      iconClass: "uil uil-monitor",
      iconBgClass: "btn-soft-purple",
    },
    {
      title: "Mobile Design",
      description:
        "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida.",
      imageSrc: "/assets/img/photos/se2.jpg",
      iconClass: "uil uil-mobile-android",
      iconBgClass: "btn-soft-purple",
    },
  ];

  return (
    <ModernServiceShowcase title="Responsive Design" items={featureData} />
  );
}
