import React from "react";
import Nav from "../Nav/Nav";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/socials";

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
      <nav
        className="navbar navbar-expand-lg center-nav sticky-top 
          !backdrop-blur-md 
        !bg-white/50  
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
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start ">
            <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
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
                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
              <Nav color="#605dba" lng={lng} />
              {/* /.navbar-nav */}
              <div className="offcanvas-footer xl:!hidden lg:!hidden">
                <div>
                  <div className="flex gap-1">
                    <a
                      target="_blank"
                      href="https://www.app-apsx.com/login"
                      className="btn !text-[#f5f5f6] !bg-[#a4aec633] hover:!bg-[#9daac733] !border-none !shadow-none focus:!shadow-none active:!shadow-none btn-xs !rounded-lg !py-1"
                    >
                      {labels.login}
                    </a>
                    <a
                      target="_blank"
                      href="https://www.app-apsx.com/register"
                      className="btn !relative !text-[#f5f5f6] !bg-[#747ed1] hover:!bg-[#6b76d3] !border-none !shadow-none focus:!shadow-none active:!shadow-none btn-xs !rounded-lg !py-1 !px-3"
                    >
                      <span className="absolute -top-3 -right-5 -translate-x-1/2">
                        <Badge
                          color="red"
                          variant="softText"
                          className="!text-[0.6rem] !px-2 !py-[2px] !leading-tight !shadow-sm"
                        >
                          {labels.free}
                        </Badge>
                      </span>
                      {labels.free_trial}
                    </a>
                  </div>
                  <nav className="nav social social-white !mt-4">
                    {socialLinks.map((elm, i) => (
                      <a
                        key={i}
                        className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                        href={elm.href}
                      >
                        <i
                          className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                        />
                      </a>
                    ))}
                  </nav>
                  {/* /.social */}
                </div>
              </div>
              {/* /.offcanvas-footer */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-full !flex !ml-auto ">
            <ul className="navbar-nav space-x-1 !flex-row !items-center !ml-auto ">
              <li className="flex items-center justify-center navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <a
                  target="_blank"
                  href="https://www.app-apsx.com/login"
                  className="btn !text-[#343f52] !bg-[#a4aec633] hover:!bg-[#9daac733] !border-none !shadow-none focus:!shadow-none active:!shadow-none btn-xs !rounded-lg !py-1"
                >
                  {labels.login}
                </a>
              </li>
              <li className="flex items-center justify-center navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <a
                  target="_blank"
                  href="https://www.app-apsx.com/register"
                  className="btn !relative !text-[#f5f5f6] !bg-[#747ed1] hover:!bg-[#6b76d3] !border-none !shadow-none focus:!shadow-none active:!shadow-none btn-xs !rounded-lg !py-1 !px-3"
                >
                  <span className="absolute -top-3 -right-5 -translate-x-1/2">
                    <Badge
                      color="red"
                      variant="softText"
                      className="!text-[0.6rem] !px-2 !py-[2px] !leading-tight !shadow-sm"
                    >
                      {labels.free}
                    </Badge>
                  </span>
                  {labels.free_trial}
                </a>
              </li>
              <li className="nav-item xl:!hidden lg:!hidden">
                <button className="hamburger offcanvas-nav-btn">
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
