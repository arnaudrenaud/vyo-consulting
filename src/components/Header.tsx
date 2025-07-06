/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { PATHS } from "@/helpers/constants";
import Link from "next/link";
import { METADATA_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import styles from "@/styles/header.module.scss";
import clsx from "clsx";

export function Header({ metadata }: { metadata: METADATA_QUERYResult }) {
  const logo = metadata?.logo ? urlFor(metadata.logo).url() : null;

  const [scrollDirection, setScrollDirection] = useState("");
  const lastScrollY = useRef(0);
  const throttleWait = useRef(false);
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navOpen]);

  useEffect(() => {
    const threshold = 10;

    const throttle = (callback: () => void, time: number) => {
      if (throttleWait.current) return;
      throttleWait.current = true;
      setTimeout(() => {
        callback();
        throttleWait.current = false;
      }, time);
    };

    const updateScrollState = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY.current) < threshold) return;
      setScrollDirection(scrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = scrollY;
    };

    const onScroll = () => {
      throttle(updateScrollState, 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="main-navigation"
        className={clsx(
          "nav-bar h-[1px] w-full bg-[#c9cdd2]",
          isMobile ? "h-20" : "h-full pt-9",
          scrollDirection === "down"
            ? `${styles.isScrollingDown}`
            : "bg-[#fff7ed]/90",
        )}
      >
        <Link href={PATHS.INDEX}>
          {logo && (
            <img
              src={logo || ""}
              alt="Image du logo de VYO Consulting"
              className="h-7"
            />
          )}
        </Link>
        <ul className="flex items-center space-x-10 max-md:hidden">
          <li
            className="relative inline-block text-left after:content-[' '] after:h-[3px] after:block after:bg-green-600 after:translate-y-[19px] mt-1 hover:cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center space-x-1">
              <button>Solutions</button>
              <img
                src={
                  isOpen ? "/icones/chevron-up.svg" : "/icones/chevron-down.svg"
                }
                alt={isOpen ? "chevron up" : "chevron down"}
              />
            </div>

            <div
              className={`origin-top-left absolute left-0 mt-[21.5px] w-56 bg-[#fff7ed] shadow-lg ring-1 ring-black/5 transition-opacity duration-200 ${
                isOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <ul className="py-1">
                {[
                  "vyo.design",
                  "vyo.agile&methods",
                  "vyo.product&project",
                  "vyo.softwarefactory",
                  "vyo.devops&cloud",
                  "vyo.cybersecurity",
                  "vyo.data",
                  "vyo.infra",
                  "vyo.squad",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-[5.5px] hover:bg-white rounded-md cursor-pointer transition-colors mx-6 text-sm font-medium"
                  >
                    {/* dynamiser la couleur de 'vyo.' && le path en fonction de la solution */}
                    <Link href={PATHS.SOLUTIONS}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link href={PATHS.PROJETS}>Projets</Link>
          </li>
          <li>
            <Link href={PATHS.ABOUT}>A propos</Link>
          </li>

          <li className="text-white bg-[#10182b] rounded-full px-4 py-2">
            <Link href={PATHS.CONTACT} className="flex items-center">
              <img
                src="/icones/contact.png"
                alt="contact icon"
                className="inline-block mr-2 w-4"
              />
              Nous contacter
            </Link>
          </li>
        </ul>
        {/* Button Burger Menu */}
        <div
          role="button"
          className="menu-toggle block md:hidden self-end z-[99]"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div
            className={
              navOpen ? `${styles.hamBox} ${styles.hamBoxOpen}` : styles.hamBox
            }
          >
            <span
              className={
                navOpen ? `${styles.lineTop} ${styles.spin}` : styles.lineTop
              }
            ></span>
            <span
              className={
                navOpen
                  ? `${styles.lineBottom} ${styles.spin}`
                  : styles.lineBottom
              }
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
}
