import { socialLinks } from "@/data/socials";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import GridBackground from "@/components/common/background/GridBackground";
import Button from "@/components/common/Button";

import { useTranslation } from "@/app/i18n";

export default async function MainFooter({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <footer className="bg-[#f5f5f6] opacity-100 !text-[#343f52]">
      <div className="container">
        {/* --- ส่วนบล็อกที่ซ้อนด้านบน (Upper Block / CTA) --- */}
        <div className="card relative z-[10] !mt-[-5rem] overflow-hidden !border-0 !rounded-[0.9rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-gradient-to-tr from-[#1bb59b] via-[#27c2a0] to-[#1bb5a8]">
          {/* ลูกเล่นแสง Ambient ด้านหลัง */}
          <div className="absolute top-[-50%] left-[-10%] w-80 h-80 bg-white/10 blur-[80px] rounded-full"></div>
          <div className="absolute bottom-[-20%] right-[-5%] w-64 h-64 bg-blue-400/20 blur-[60px] rounded-full"></div>

          <div className="card-body p-10 xl:p-12 relative z-10">
            <GridBackground
              gridColor="#f5f5f6"
              gridSize="60px"
              lineThickness="2px"
              opacity={0.3}
            />
            <div className="flex flex-wrap items-center mx-[-15px]">
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left">
                <h3 className="h1 !mb-2 !text-white !font-medium !leading-[1.2] drop-shadow-sm">
                  {t(
                    "footer:contact.title",
                    "สนใจใช้งาน โปรแกรม คลินิก APSX Platform",
                  )}
                </h3>
                <p className="lead !leading-[1.65] text-[1rem] !font-light !mb-0 text-white/90">
                  {t(
                    "footer:contact.description",
                    "สามารถสอบถามเรื่องการใช้งานเพิ่มเติมได้ที่ LINE: @apsth โทรติดต่อทีมสนับสนุนของเราได้ที่ 043-002488, 098-1816769",
                  )}
                </p>
              </div>

              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] justify-end px-[15px] text-center lg:text-right !mt-8 lg:!mt-0">
                <div>
                  <Button
                    target="_blank"
                    rounded="lg"
                    color="dark"
                    href="https://www.app-apsx.com/register"
                    className="w-full lg:w-[250px]"
                  >
                    <i className="uil uil-rocket text-[0.8rem] mr-1" />
                    <span className="!font-Kanit font-medium text-[#ffff] text-[0.95rem]">
                      {t("start_to_free", "สมัครใช้งานฟรี")}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- จบบล็อกที่ซ้อนด้านบน --- */}

        {/* เนื้อหา Footer หลัก */}
        <div className="pt-[4.5rem] xl:pt-[7rem] lg:pt-[7rem] md:pt-[7rem] pb-[1.75rem]">
          <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
            {/* คอลัมน์ที่ 1: ข้อมูลบริษัท/โลโก้ (ถ้ามี) */}
            <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] xl:mt-0 lg:mt-0">
              <div className="widget">
                <div className="navbar-brand w-full !mb-4">
                  <Link href={`/`}>
                    <Image
                      srcSet="/assets/img/logo/logo.svg"
                      alt="image"
                      src="/assets/img/logo/logo.svg"
                      width={134}
                      height={26}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <p className="!mb-4">
                  {t(
                    "footer:description",
                    "For Hospital, Clinic, Spa, Wellness, ศูนย์ดูแลผู้สูงอายุ ธุรกิจความงาม คลินิกเฉพาะทาง คลินิกเวชกรรม คลินิกทั่วไป คลินิกพยาบาลผดุงครรภ์ คลินิกกายภาพบำบัด คลินิกแพทย์แผนไทย-จีน คลินิกอายุรกรรม คลินิกแม่และเด็ก คลินิกบําบัดยาเสพติด คลินิกสุขภาพจิต คลินิกตา",
                  )}
                </p>
                {/* <address className="not-italic !leading-[inherit] !mb-4">
                  Moonshine St. 14/05 Light City, London, UK
                </address> */}
              </div>
            </div>

            {/* คอลัมน์ที่ 2: Need Help */}
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full px-[15px] lg:ml-[8.33%] max-lg:mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !text-[#343f52] !mb-3">
                  {t("footer:services.title", "บริการของเรา")}
                </h4>
                <ul className="pl-0 list-none !mb-0">
                  <li>
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/clinic`}
                    >
                      {t("footer:services.clinic_software", "โปรแกรม คลินิก")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/hospital`}
                    >
                      {t(
                        "footer:services.hospital_software",
                        "โปรแกรม โรงพยาบาล",
                      )}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/wellness`}
                    >
                      {t(
                        "footer:services.wellness_software",
                        "โปรแกรม Wellness",
                      )}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/wellness`}
                    >
                      {t(
                        "footer:services.elderly_care_center_software",
                        "โปรแกรม ศูนย์ดูแลผู้สูงอายุ",
                      )}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/spa`}
                    >
                      {t(
                        "footer:services.spa_Beauty_software",
                        "โปรแกรม Spa/Beauty",
                      )}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* คอลัมน์ที่ 3: Learn More */}
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full px-[15px] max-lg:mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !text-[#343f52] !mb-3">
                  {t("footer:accounts.title", "Accounts")}
                </h4>
                <ul className="pl-0 list-none !mb-0">
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/customer`}
                    >
                      {t("footer:accounts.our_customer", "ลูกค้าของเรา")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/calendar`}
                    >
                      {t("footer:accounts.system_demo", "Demo ระบบค้าของเรา")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href="https://www.app-apsx.com/login"
                    >
                      {t("footer:accounts.login", "Login")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/term-of-use`}
                    >
                      {t(
                        "footer:accounts.teams_of_service",
                        "Teams of Service",
                      )}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/privacy-policy`}
                    >
                      {t("footer:accounts.privacy_policy", "Privacy Policy")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* คอลัมน์ที่ 4: Contact */}
            <div className="md:w-4/12 lg:w-2/12 xl:w-2/12 w-full px-[15px] max-lg:mt-[30px]">
              <div className="widget">
                <h4 className="widget-title !text-[#343f52] !mb-3">
                  {t("footer:support.title", "Support")}
                </h4>
                <ul className="pl-0 list-none !mb-0">
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/docs`}
                    >
                      {t("footer:support.docs", "Docs")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`https://page.line.me/gbc9405c`}
                    >
                      {t("footer:support.help_center", "Help Center")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/update`}
                    >
                      {t("footer:support.changelog", "Changelog")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/contact`}
                    >
                      {t("footer:support.connect", "ติดต่อเรา")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`https://www.youtube.com/@apsthcom`}
                    >
                      {t("footer:support.vdo_tutorial", "VDO Tutorialcs")}
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      className="!text-[#343f52] hover:!text-[#00B7B8]"
                      href={`/${lng}/sitemap`}
                    >
                      {t("footer:support.site_map", "Site Map")}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="!mt-13 xl:!mt-20 lg:!mt-20 md:!mt-20 !mb-7" />

          <div className="xl:flex lg:flex md:flex items-center justify-between">
            <p className="!mb-2 xl:!mb-0">
              Copyright © 2024
              <a href="/" className="mx-2 !text-[#00B7B8]">
                APSX Platform
              </a>
              By
              <a href="/" className="mx-2 !text-[#00B7B8]">
                APSTH
              </a>
            </p>

            <nav className="nav social !mt-4">
              {socialLinks.map((elm, i) => (
                <a
                  key={i}
                  className="text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                  href={elm.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`uil ${elm.icon} text-[${elm.color}] text-[1.1rem]`}
                    // ใช้ inline style เพื่อดึงค่าสีจาก object มาแสดงผล
                    style={{ color: elm.color }}
                    // ถ้ามึงต้องใช้ unicode ผ่าน attribute data หรืออื่นๆ (แต่ปกติ uil class ก็แสดงผลได้เลย)
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
