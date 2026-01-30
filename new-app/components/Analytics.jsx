import CoreLeftValues from "@/components/common/CoreLeftValues";

export default function Analytics({ lng }) {
  const ourValues = [
    "Aenean quam ornare. Curabitur blandit.",
    "Nullam quis risus eget urna mollis ornare.",
    "Etiam porta euismod malesuada mollis.",
    "Vivamus sagittis lacus vel augue rutrum.",
  ];

  return (
    <>
      <CoreLeftValues
        title="Overview"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={true}
        bgColor="!bg-[#F7FFFD]"
      />
      <CoreLeftValues
        title="Business Analytics"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={false}
      />
      <CoreLeftValues
        title="Customer Analytics"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={true}
        bgColor="!bg-[#F7FFFD]"
      />
      <CoreLeftValues
        title="Order Expense"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={false}
      />
      <CoreLeftValues
        title="Appointment"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={true}
        bgColor="!bg-[#F7FFFD]"
      />
      <CoreLeftValues
        title="Queue"
        description="เราช่วยจัดการค่าใช้จ่ายให้เป็นเรื่องง่าย..."
        imageSrc="/assets/img/illustrations/i7.png"
        features={ourValues}
        imageRight={false}
      />
    </>
  );
}
