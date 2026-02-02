import React from "react";
import Nav from "../nav/Nav";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import TypeWriter from "@/components/common/TypeWriter";
import Button from "@/components/common/Button";

import { useTranslation } from "@/app/i18n";

// components
import Badge from "../Badges";

export default async function MainHeader({ lng }) {
  const { t } = await useTranslation(lng);
  const labels = {
    login: t("nav:login", "เข้าสู่ระบบ"),
    free_trial: t("nav:free_trial", "สมัครใช้งาน"),
    free: t("nav:free", "ฟรี"),
  };
  return (
    <header className="!absolute w-full">
      <div
        className=" bg-gradient-to-r from-[#1bb59b] via-[#27c2a0] to-[#1bb5a8] !text-white font-bold !text-[.75rem] !relative"
        style={{ zIndex: 1 }}
      >
        {/* แก้จุดนี้: เอา whitespace-nowrap ออกในมือถือ และใช้ flex-wrap แทนถ้าจำเป็น */}
        <div className="  !mb-0 py-1.5 hidden lg:flex  items-center justify-center flex-wrap md:flex-nowrap">
          {/* ส่วนหัวข้อคงที่ */}
          <span className="flex-shrink-0  font-normal ">
            *{t("service_confidence.title", "ฟรี อัพเดทเวอร์ชั่น")}*
            :&nbsp;{" "}
          </span>

          {/* ส่วนข้อความวิ่ง: ปรับ min-w ให้เล็กลงในมือถือ (xs) */}
          <span className="inline-block text-left min-w-[140px] xs:min-w-[160px] md:min-w-[220px]">
            <span className="typer !text-white font-normal">
              <TypeWriter
                strings={[
                  t(
                    "home:hero.free_essentials.free_training",
                    "ฟรี สอนการใช้งาน",
                  ),
                  t(
                    "home:hero.free_essentials.free_updates",
                    "ฟรี อัพเดทเวอร์ชั่น",
                  ),
                ]}
              />
            </span>
            <span className="cursor !text-[#54a8c7]" data-owner="typer" />
          </span>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg center-nav sticky-top 
          !backdrop-blur-md 
        !bg-white/80  
          !border-b !border-[#f5f5f549] shadow shadow-[#b1b1b131] "
      >
        <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
          <div className="navbar-brand w-full">
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
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start !bg-white xl:!bg-transparent  ">
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row py-2 px-8">
              <div className="navbar-brand w-full">
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
              <button
                type="button"
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#000102] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-[#000102] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:!bg-[rgba(0,0,0,0.03)] before:font-Unicons hover:before:bg-[rgba(0,0,0,0.38)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <Nav color="#605dba" lng={lng} />

              {/* /.navbar-nav */}
              <div className="offcanvas-footer !grid xl:!hidden lg:!hidden">
                <nav className="nav social !my-4">
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
                {/* /.social */}
              </div>
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-full !flex !ml-auto ">
            <ul className="navbar-nav space-x-1 !flex-row !items-center !ml-auto ">
              <>
                {/* --- 1. ส่วนที่จะแสดงเฉพาะจอ lg (Dropdown เพื่อกันล้น) --- */}
                <li className="nav-item dropdown hidden lg:block xl:hidden">
                  <a
                    className="nav-link dropdown-toggle !relative !inline-flex items-center gap-1 !bg-[#EFF1F5] hover:!bg-[#e2e5eb] !text-[#1a1f24]  !rounded-lg !py-1.5 !px-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <i className="uil uil-rocket" />
                    <span className="!font-medium lg:!text-[0.75rem] ">
                      {labels.free_trial}
                    </span>
                    <span className="absolute -top-2 -right-2">
                      <Badge
                        color="red"
                        variant="softText"
                        className="!text-[10px] !px-1.5 !py-[3px] !font-medium]"
                      >
                        {labels.free}
                      </Badge>
                    </span>
                  </a>
                  <ul className="dropdown-menu !right-0 !left-auto !border-none !shadow-xl !rounded-xl space-y-1">
                    <li>
                      <Button
                        target="_blank"
                        rounded="lg"
                        color="gray"
                        href="https://www.app-apsx.com/login"
                        className="w-full"
                      >
                        <i className="uil uil-signin text-[0.8rem]" />
                        <span className="!font-medium !text-[14px]">
                          {labels.login}
                        </span>
                      </Button>
                    </li>
                    <li>
                      <Button
                        target="_blank"
                        rounded="lg"
                        color="dark"
                        href={`/${lng}/calendar`}
                        className="w-full"
                      >
                        <i className="uil uil-rocket text-[0.8rem]" />
                        <span className="!font-medium !text-[14px]">
                          {labels.free_trial}
                        </span>
                      </Button>
                    </li>
                  </ul>
                </li>

                {/* --- 2. ส่วนที่จะแสดงเฉพาะจอใหญ่ xl ขึ้นไป (แยกปุ่มปกติ) --- */}
                <li className="hidden xl:flex items-center gap-2">
                  <Button
                    target="_blank"
                    rounded="lg"
                    color="gray"
                    href="https://www.app-apsx.com/login"
                  >
                    <i className="uil uil-signin text-[0.8rem] mr-1" />
                    <span className="!font-medium !text-[14px]">
                      {labels.login}
                    </span>
                  </Button>
                  <Button
                    target="_blank"
                    rounded="lg"
                    color="dark"
                    href={`/${lng}/calendar`}
                  >
                    <span className="absolute top-1 right-1">
                      <Badge
                        color="red"
                        variant="softText"
                        className="!text-[10px] !px-2 !py-[4px] !rounded-full"
                      >
                        {labels.free}
                      </Badge>
                    </span>
                    <i className="uil uil-rocket text-[0.8rem] mr-1" />
                    <span className="!font-medium !text-[14px]">
                      {labels.free_trial}
                    </span>
                  </Button>
                </li>
              </>
              <li className="nav-item xl:!hidden lg:!hidden ">
                <button className="hamburger offcanvas-nav-btn ">
                  <span />
                </button>
              </li>
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-other */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
  );
}
