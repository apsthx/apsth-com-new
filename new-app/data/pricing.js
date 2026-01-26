const createFeatures = (tierConfig) => {
  const { branch, user, file, reader, title } = tierConfig;
  const isNPlus = title === "Package N+";

  return [
    // --- ส่วนที่ 1: ข้อมูลตัวเลข (Limits) ---
    { key: "branch_count", value: branch, unitKey: "branches", included: true },
    { key: "user_count", value: user, unitKey: "user", included: true },
    {
      key: "file_uploads",
      value: file,
      unitKey: "file_uploads",
      included: true,
    },
    {
      key: "card_reader",
      value: reader,
      unitKey: "free_card_reader",
      included: true,
    },
    { key: "free_import", included: true },
    { key: "free_training", included: true },

    // --- ส่วนที่ 2: ระบบงาน (System Features) ---
    { key: "appointment_system", included: true },
    { key: "queue_system", included: true },
    { key: "commission_system", included: true },
    { key: "barcode_stock", included: true },
    { key: "central_admin", included: true },
    { key: "lab_xray", included: true },
    { key: "icd10_diagnosis", included: true },
    { key: "accounting_system", included: true },
    { key: "new_document", included: true },
    { key: "coupon_membership", included: true },
    { key: "id_card_retrieval", included: true },
    { key: "email_appointment", included: true },

    // สองตัวนี้ Package N+ จะถูก Filter ออกไปเพราะ included เป็น false
    { key: "email_document", included: !isNPlus },
    { key: "online_reg_line", included: !isNPlus },

    // --- ส่วนที่ 3: ระบบงานขั้นสูง (Advanced Systems) ---
    {
      key: "patient_privacy",
      defaultLabel: "Patient Data Privacy System (Doctor Only)",
      included: false,
      isAddOn: true,
    },
    {
      key: "sales_pipeline",
      defaultLabel: "Sales Pipeline System",
      included: false,
      isAddOn: true,
    },
    {
      key: "realtime_lab_xray",
      defaultLabel: "Real-time Lab/X-Ray Data System",
      included: false,
      isAddOn: true,
    },
    {
      key: "patient_file_system",
      defaultLabel: "Patient File System",
      included: false,
      isAddOn: true,
    },
    {
      key: "multi_room_exam",
      defaultLabel: "Multi-Room Examination System",
      included: false,
      isAddOn: true,
    },
    {
      key: "family_genetic",
      defaultLabel: "Family Genetic Linkage System",
      included: false,
      isAddOn: true,
    },
    {
      key: "drug_alert",
      defaultLabel: "Drug Relationship Alert System",
      included: false,
      isAddOn: true,
    },
    {
      key: "ipd_admission",
      defaultLabel: "IPD Admission System (Overnight)",
      included: false,
      isAddOn: true,
    },
    {
      key: "central_warehouse",
      defaultLabel: "Central Warehouse System",
      included: false,
      isAddOn: true,
    },
    {
      key: "face_verification",
      defaultLabel: "Face Verification System (Comparison AI)",
      included: false,
      isAddOn: true,
    },
  ];
};

export const pricingPlans = [
  {
    title: "Package N+",
    price3mo: 6750,
    price6mo: 13500,
    price1yr: 21000,
    oldPrice1yr: 27000,
    features: createFeatures({
      title: "Package N+",
      branch: 1,
      user: 15,
      file: 15,
      reader: 1,
    }),
  },
  {
    title: "Package B+",
    price3mo: 13500,
    price6mo: 27000,
    price1yr: 42000,
    oldPrice1yr: 48000,
    features: createFeatures({
      title: "Package B+",
      branch: 2,
      user: 20,
      file: 30,
      reader: 2,
    }),
  },
  {
    title: "Package PRO+",
    price3mo: 33750,
    price6mo: 67500,
    price1yr: 105000,
    oldPrice1yr: 120000,
    features: createFeatures({
      title: "Package PRO+",
      branch: 5,
      user: 30,
      file: "Unlimited",
      reader: 5,
    }),
  },
];
