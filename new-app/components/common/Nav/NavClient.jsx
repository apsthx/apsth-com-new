"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { ourServices, ourCustomers, documents } from "@/data/menu";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "@/components/common/LanguageChanger";

// components
import Badge from "../Badges";

// import LanguageChanger from '@/components/common/LanguageChanger'
// !text-[var(--current-color)]
export default function NavClient({ color, labels, badges, locale }) {
  useEffect(() => {
    // Dynamically import Bootstrap
    import("bootstrap").then((Bootstrap) => {
      const CLASS_NAME = "has-child-dropdown-show";

      // Save the original toggle function
      const originalToggle = Bootstrap.Dropdown.prototype.toggle;

      // Override the toggle function
      Bootstrap.Dropdown.prototype.toggle = function () {
        // Remove the CLASS_NAME from all dropdowns
        document.querySelectorAll("." + CLASS_NAME).forEach(function (e) {
          e.classList.remove(CLASS_NAME);
        });

        // Traverse up through the closest dropdown parents
        let dd = this._element
          .closest(".dropdown")
          .parentNode.closest(".dropdown");
        for (; dd && dd !== document; dd = dd.parentNode.closest(".dropdown")) {
          dd.classList.add(CLASS_NAME);
        }

        // Call the original toggle function
        return originalToggle.call(this);
      };

      // Add event listeners for hide.bs.dropdown to remove the CLASS_NAME
      document.querySelectorAll(".dropdown").forEach(function (dd) {
        dd.addEventListener("hide.bs.dropdown", function (e) {
          if (this.classList.contains(CLASS_NAME)) {
            this.classList.remove(CLASS_NAME);
            e.preventDefault();
          }
          e.stopPropagation();
        });
      });
    });

    // Optional cleanup function for any potential side effects
    return () => {
      // Cleanup code here (if needed)
    };
  }, []);

  const pathname = usePathname();

  const getActiveParent = (menuLinks) => {
    return menuLinks.find((parent) => {
      if (parent.links) {
        return parent.links.some((link) => link.href === pathname);
      }
      return parent.href === pathname;
    });
  };

  // ... ส่วนบนคงเดิม ...

  return (
    <ul className="navbar-nav" style={{ "--current-color": color }}>
      {/* เมนูหลัก: เพิ่ม !px-1 หรือ !px-2 เพื่อให้เมนูหลักชิดกันมากขึ้น */}
      <li className="nav-item dropdown ">
        <a
          className={`nav-link space-x-1 dropdown-toggle !text-[.85rem] !tracking-[normal] !px-2 hover:!text-[var(--hover-text)] ${
            getActiveParent(ourServices) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          <span className="!font-medium  !text-[#464c58] !tracking-wide">
            {labels.our_services}
          </span>
          <Badge color="yellow" variant="softText">
            {badges.new}
          </Badge>
        </a>
        <ul className="dropdown-menu">
          {labels.services.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                className={`flex items-center gap-2 dropdown-item ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={`/${locale}/${item.href}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "0.5px", // ลดระยะห่างตัวอักษรนิดนึง
                  paddingTop: "0.8rem", // ลด padding บน
                  paddingBottom: "0.8rem", // ลด padding ล่าง
                }}
              >
                <div className="flex items-center justify-center w-[1.1rem]">
                  <i
                    className={`uil ${item.icon} text-[0.95rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <span className="leading-none !font-medium  !text-[#464c58] !tracking-wide">
                  {item.label}
                </span>
                {item.id != "clinic_software" && (
                  <Badge color="yellow" variant="softText" className="!ms-auto">
                    {" "}
                    {/* ดัน badge ไปขวาสุดเพื่อความสะอาด */}
                    {badges.new}
                  </Badge>
                )}
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className={`!font-medium  !text-[#464c58] !tracking-wide nav-link dropdown-toggle !text-[.85rem] !px-2 hover:!text-[var(--hover-text)] ${
            getActiveParent(ourCustomers) ? "!text-[var(--current-color)]" : ""
          } `}
          href={`#`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {labels.our_customers}
        </a>
        <ul className="dropdown-menu">
          {labels.customers.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                className={`flex items-center gap-2 dropdown-item ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={`/${locale}/${item.href}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "0.35rem",
                  paddingBottom: "0.35rem",
                }}
              >
                <div className="flex items-center justify-center w-[1.1rem]">
                  <i
                    className={`uil ${item.icon} text-[0.95rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <div className="grid gap-0">
                  {" "}
                  {/* เปลี่ยน gap-1 เป็น gap-0 เพื่อให้ sub text ชิดหัวข้อ */}
                  <span className="leading-tight text-[0.85rem] !font-medium  !text-[#464c58] !tracking-wide">
                    {item.label}
                  </span>
                  <span className="leading-none text-[14px] !font-medium  !text-[#464c58] !tracking-wide opacity-80">
                    {item.sub}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </li>

      {/* เมนู Pricing & Contact: ใส่ !px-2 เพื่อให้ระยะเท่ากับ dropdown */}
      <li className="nav-item">
        <a
          className="!font-medium  !text-[#464c58] !tracking-wide nav-link  !text-[.85rem] !px-2 hover:!text-[var(--hover-text)] after:!hidden"
          href={`/${locale}#price`}
        >
          {labels.priicing}
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className={`!font-medium  !text-[#464c58] !tracking-wide nav-link dropdown-toggle !text-[.85rem] !px-2 hover:!text-[var(--hover-text)] ${
            getActiveParent(documents) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          {labels.docs}
        </a>
        <ul className="dropdown-menu">
          {labels.documents.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                className={`flex items-center gap-2 dropdown-item ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={`/${locale}/${item.href}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "0.35rem",
                  paddingBottom: "0.35rem",
                }}
              >
                <div className="flex items-center justify-center w-[1.1rem]">
                  <i
                    className={`uil ${item.icon} text-[0.95rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <div className="grid gap-0 !font-medium  !text-[#464c58] !tracking-wide">
                  <span className="leading-tight text-[0.85rem]">
                    {item.label}
                  </span>
                  <span className="leading-none text-[14px] font-medium opacity-80">
                    {item.sub}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </li>

      <li className="nav-item !font-medium  !text-[#464c58] !tracking-wide">
        <a
          className="!font-medium  !text-[#464c58] !tracking-wide nav-link !text-[.85rem] !px-2 hover:!text-[var(--hover-text)] after:!hidden"
          href={`/${locale}/contact`}
        >
          {labels.contact_us}
        </a>
      </li>
      <LanguageSwitcher />
      <div className="flex lg:!hidden gap-2 !mt-4 items-center">
        <a
          target="_blank"
          href="https://www.app-apsx.com/login"
          className="!font-medium !text-[#464c58] !tracking-wide btn btn-xs !inline-flex items-center gap-1 !bg-[#0000000a] hover:!bg-[#808ca733] !border-none !shadow-none !rounded-xl !py-2 !px-4 transition-all focus:!shadow-none active:!shadow-none"
        >
          <i className="uil uil-signin text-[0.9rem]" />
          <span className="font-medium">{labels.login}</span>
        </a>

        <a
          target="_blank"
          href="https://www.app-apsx.com/register"
          className="!font-medium !text-[#ffffff] !tracking-wide !relative !inline-flex items-center gap-1 !bg-[#00B7B8] hover:!bg-[#01a5a5] !border-none !shadow-none !rounded-xl !py-2 !px-4 transition-all focus:!shadow-none active:!shadow-none"
        >
          <span className="absolute -top-2.5 -right-2">
            <Badge
              color="red"
              variant="softText"
              className="!text-[10px] !px-1.5 !py-[2px] !leading-tight !shadow-sm !rounded-md"
            >
              {labels.free}
            </Badge>
          </span>
          <i className="uil uil-rocket text-[0.9rem]" />
          <span className="">{labels.free_trial}</span>
        </a>
      </div>
    </ul>
  );
}
