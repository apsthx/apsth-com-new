import React from "react";
import PackageGroups from "./PackageGroups";
import { useTranslation } from "@/app/i18n";

export default async function Package({ lng }) {
  const { t } = await useTranslation(lng);

  const translations = {
    selectPlan: t("read_more", "ดูรายละเอียด"),
    addOnLabel: t("Add On"), // เพิ่มสำหรับป้ายส้ม
    billingCycles: {
      "3mo": `3 ${t("month", "เดือน")}`,
      "6mo": `6 ${t("month", "เดือน")}`,
      "1yr": `1 ${t("year", "ปี")}`,
    },
    features: {
      // กลุ่ม Base
      branch_count: t("home:package.name.branches", "จำนวนสาขา"), // แสดงชื่อหัวข้อ แล้วค่อยต่อด้วยตัวเลข
      user_count: t("home:package.name.user", "User"), // เช่น User 15 users/สาขา
      file_uploads: t("home:package.name.file_uploads", "File uploads"),
      card_reader: t(
        "home:package.name.free_card_reader",
        "ฟรี เครื่องอ่านบัตร",
      ),
      free_import: t("home:package.name.free_data_import", "ฟรี นำเข้าข้อมูล"),
      free_training: t("home:package.name.free_training", "ฟรี สอนการใช้งาน"),
      appointment_system: t(
        "home:package.name.appointment_system",
        "ระบบนัดหมาย (ล็อคห้อง, ล็อคหมอ)",
      ),
      // กลุ่ม System Features ที่ระบุ Key และ Default Value ตามรูปแบบ t("key", "default")
      appointment_system: t(
        "home:package.name.appointment_system",
        "ระบบนัดหมาย (ล็อคห้อง, ล็อคหมอ)",
      ),
      queue_system: t(
        "home:package.name.queue_system",
        "Queue System (Room, Doctor Lock)",
      ),
      commission_system: t(
        "home:package.name.commission_system",
        "Commission System",
      ),
      barcode_stock: t(
        "home:package.name.barcode_stock",
        "Barcode System for Stock Management",
      ),
      central_admin: t(
        "home:package.name.central_admin",
        "Central Admin System (Multiple branches)",
      ),
      lab_xray: t("home:package.name.lab_xray", "Lab & X-Ray System"),
      icd10_diagnosis: t(
        "home:package.name.icd10_diagnosis",
        "ICD10/Disease Diagnosis System",
      ),
      accounting_system: t(
        "home:package.name.accounting_system",
        "Accounting System",
      ),
      new_document: t("home:package.name.new_document", "New Document System"),
      coupon_membership: t(
        "home:package.name.coupon_membership",
        "Coupon, Membership Card System",
      ),
      id_card_retrieval: t(
        "home:package.name.id_card_retrieval",
        "Data Retrieval via ID Card/Passport",
      ),
      email_appointment: t(
        "home:package.name.email_appointment",
        "Email Appointment Reminder",
      ),
      email_document: t(
        "home:package.name.email_document",
        "Email Document Reminder",
      ),
      online_reg_line: t(
        "home:package.name.online_reg_line",
        "Online Membership (via Line@)",
      ),
      // --- ส่วนที่ 3: ระบบงานขั้นสูง (Advanced Systems) ---
      patient_privacy: t(
        "home:package.name.patient_privacy",
        "ระบบรักษาความเป็นส่วนตัวข้อมูลคนไข้ (เฉพาะแพทย์)",
      ),
      sales_pipeline: t(
        "home:package.name.sales_pipeline",
        "ระบบติดตามสถานะการขาย (Sales Pipeline)",
      ),
      realtime_lab_xray: t(
        "home:package.name.realtime_lab_xray",
        "ระบบข้อมูลแล็บและเอ็กซเรย์แบบ Real-time",
      ),
      patient_file_system: t(
        "home:package.name.patient_file_system",
        "ระบบจัดเก็บแฟ้มประวัติคนไข้",
      ),
      multi_room_exam: t(
        "home:package.name.multi_room_exam",
        "ระบบตรวจรักษาแบบหลายห้อง",
      ),
      family_genetic: t(
        "home:package.name.family_genetic",
        "ระบบเชื่อมโยงพันธุกรรมครอบครัว",
      ),
      drug_alert: t(
        "home:package.name.drug_alert",
        "ระบบแจ้งเตือนปฏิกิริยาระหว่างยา",
      ),
      ipd_admission: t(
        "home:package.name.ipd_admission",
        "ระบบรับผู้ป่วยใน (ค้างคืน)",
      ),
      central_warehouse: t(
        "home:package.name.central_warehouse",
        "ระบบคลังสินค้าส่วนกลาง",
      ),
      face_verification: t(
        "home:package.name.face_verification",
        "ระบบยืนยันตัวตนด้วยใบหน้า (AI)",
      ),
    },
    // แก้ไขในส่วนของ translations
    units: {
      // เปลี่ยนคีย์จาก branches เป็น branch_count ให้ตรงกับฟีเจอร์
      branch_count: t("home:package.units.branches", "สาขา"),

      // เปลี่ยนคีย์จาก user เป็น user_count ให้ตรงกับฟีเจอร์
      user_count: t("home:package.units.user", "users/สาขา"),

      file_uploads: t("home:package.units.file_uploads", "GB"),

      // เปลี่ยนคีย์จาก free_card_reader เป็น card_reader ให้ตรงกับฟีเจอร์
      card_reader: t("home:package.units.free_card_reader", "เครื่อง"),
    },
  };

  return (
    <section id="price" className="wrapper !bg-[#ffffff]">
      <div className="container">
        <div
          data-cues="slideInDown"
          data-delay={300}
          className="w-full flex-[0_0_auto] pt-16 xl:pt-0 !px-[15px] max-w-full !text-center"
        >
          {/* 1. Headline: Monochrome Style - สีเดียวแต่เล่นระดับความหนา (Weight) */}
          <h2 className="!text-[calc(1.4rem_+_1.5vw)] font-black !leading-[1.2] xl:!text-[2rem] text-[#343f52] tracking-tighter">
            {t("home:package.title", "ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่ม Vat 7%")}
          </h2>

          {/* 2. Description: คุมโทนสีเทาเข้ม-จาง แบบเดียวกันทั้งหมด */}
          <div className="max-w-[850px] mx-auto">
            <p className="mt-0 text-[0.8rem] xl:text-[0.8rem] text-[#343f52] opacity-70">
              ({t("home:package.description", "Package Plans")})
            </p>
          </div>
        </div>
        <PackageGroups translations={translations} />
      </div>
    </section>
  );
}
