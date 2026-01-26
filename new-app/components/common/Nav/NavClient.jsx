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

  return (
    <ul className="navbar-nav " style={{ "--current-color": color }}>
      <li className="nav-item dropdown ">
        <a
          className={`nav-link space-x-1 dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--hover-text)] ${
            getActiveParent(ourServices) ? "!text-[var(--current-color)]" : ""
          } `}
          href="#"
          data-bs-toggle="dropdown"
        >
          <span>{labels.our_services}</span>
          <Badge color="yellow" variant="softText">
            {badges.new}
          </Badge>
        </a>
        <ul className="dropdown-menu">
          {labels.services.map((item) => (
            <li key={item.id} className="nav-item">
              {/* hover:!text-[var(--current-color)] */}
              <a
                className={`flex items-center space-x-2 dropdown-item  ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={`/${locale}/${item.href}`}
                style={{
                  display: "flex", // บังคับเป็น flex
                  alignItems: "center", // จัดกลางแนวตั้ง
                  letterSpacing: "0.7px",
                  paddingTop: "0.5rem", // ปรับ padding ให้สมดุล
                  paddingBottom: "0.5rem",
                }}
              >
                <div className="flex items-center justify-center w-[1.2rem]">
                  {/* หุ้ม Icon ด้วย div เพื่อคุมพื้นที่ให้เท่ากันทุกเมนู */}
                  <i
                    className={`uil ${item.icon} text-[1rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <span className="leading-none">{item.label}</span>
                {item.id != "clinic_software" && (
                  <Badge color="yellow" variant="softText">
                    {badges.new}
                  </Badge>
                )}
              </a>
            </li>
          ))}
        </ul>
        {/*/.dropdown-menu */}
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--hover-text)] ${
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
              {/* hover:!text-[var(--current-color)] */}
              <a
                className={`flex items-center space-x-2 dropdown-item  ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={`/${locale}/${item.href}`}
                style={{
                  display: "flex", // บังคับเป็น flex
                  alignItems: "center", // จัดกลางแนวตั้ง
                  letterSpacing: "0.7px",
                  paddingTop: "0.5rem", // ปรับ padding ให้สมดุล
                  paddingBottom: "0.5rem",
                }}
              >
                <div className="flex items-center justify-center w-[1.2rem]">
                  {/* หุ้ม Icon ด้วย div เพื่อคุมพื้นที่ให้เท่ากันทุกเมนู */}
                  <i
                    className={`uil ${item.icon} text-[1rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <div className="grid gap-1">
                  <span className="leading-none">{item.label}</span>
                  <span className="leading-none text-[12px] font-medium">
                    {item.sub}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item ">
        <a
          className={`nav-link  !text-[.85rem] !tracking-[normal] hover:!text-[var(--hover-text)] 
          after:!content-none after:!hidden  
          `}
          href="#"
        >
          {labels.priicing}
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className={`nav-link dropdown-toggle !text-[.85rem] !tracking-[normal] hover:!text-[var(--hover-text)] ${
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
              {/* hover:!text-[var(--current-color)] */}
              <a
                className={`flex items-center space-x-2 dropdown-item  ${
                  item.href === pathname ? "!text-[var(--current-color)]" : ""
                }`}
                href={item.href}
                style={{
                  display: "flex", // บังคับเป็น flex
                  alignItems: "center", // จัดกลางแนวตั้ง
                  letterSpacing: "0.7px",
                  paddingTop: "0.5rem", // ปรับ padding ให้สมดุล
                  paddingBottom: "0.5rem",
                }}
              >
                <div className="flex items-center justify-center w-[1.2rem]">
                  {/* หุ้ม Icon ด้วย div เพื่อคุมพื้นที่ให้เท่ากันทุกเมนู */}
                  <i
                    className={`uil ${item.icon} text-[1rem] leading-none`}
                    style={{ color: item.color }}
                  />
                </div>
                <div className="grid gap-1">
                  <span className="leading-none">{item.label}</span>
                  <span className="leading-none text-[12px] font-medium">
                    {item.sub}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li className="nav-item ">
        <a
          className={`nav-link  !text-[.85rem] !tracking-[normal] hover:!text-[var(--hover-text)] 
          after:!content-none after:!hidden  
          `}
          href="#"
        >
          {labels.contact_us}
        </a>
      </li>
      <LanguageSwitcher />
    </ul>
  );
}
