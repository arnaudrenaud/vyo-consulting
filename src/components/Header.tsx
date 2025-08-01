/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useEffect } from "react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { PATHS } from "@/helpers/constants";
import Link from "next/link";
import {
  ALL_EXPERTISES_QUERYResult,
  METADATA_QUERYResult,
} from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import styles from "@/styles/header.module.scss";
import clsx from "clsx";
import { getSolutionsInOrder } from "@/helpers/functions";
import { useRouter } from "next/router";

export function Header({
  metadata,
  expertises,
}: {
  metadata: METADATA_QUERYResult;
  expertises: ALL_EXPERTISES_QUERYResult;
}) {
  if (!metadata || !expertises) {
    throw new Error(
      "Global metadata and expertises must de defined to render Header.",
    );
  }

  const router = useRouter();
  const currentPath = router.pathname;

  const logo = metadata.logo ? urlFor(metadata.logo).url() : null;

  const [scrollDirection, setScrollDirection] = useState("");
  const lastScrollY = useRef(0);
  const throttleWait = useRef(false);
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const [isOpen, setIsOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (navOpen) {
      setMenuVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      if (menuVisible) {
        setIsAnimatingOut(true);
        const timeout = setTimeout(() => {
          setMenuVisible(false);
          setIsAnimatingOut(false);
        }, 400); // ← doit matcher la durée de l'animation CSS
        return () => clearTimeout(timeout);
      }
    }
  }, [navOpen, menuVisible]);

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
        <ul className="flex items-center space-x-10 max-lg:hidden text-muted-foreground">
          <li
            className={`relative inline-block text-left after:content-[' '] after:block after:h-[3px] after:translate-y-[19px] ${currentPath.startsWith(PATHS.SOLUTIONS) ? "after:bg-green-600" : ""} mt-1 hover:cursor-pointer`}
            onClick={toggleDropdown}
          >
            <button className="flex items-center space-x-1">
              <p className="font-medium">Solutions</p>
              <img
                src={
                  isOpen ? "/icones/chevron-up.svg" : "/icones/chevron-down.svg"
                }
                alt={isOpen ? "chevron up" : "chevron down"}
                className="select-none"
              />
            </button>

            <div
              className={`origin-top-left absolute left-0 mt-[21.5px] w-56 bg-[#fff7ed] shadow-lg ring-1 ring-black/5 transition-opacity duration-200 ${
                isOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <ul className="py-1 space-y-1">
                {getSolutionsInOrder(expertises).map((item, idx) => (
                  <li
                    key={idx}
                    className="px-2 py-[7px] hover:bg-white rounded-md cursor-pointer transition-colors mx-6 text-sm font-medium"
                  >
                    <Link href={`${PATHS.SOLUTIONS}/${item.slug.current}`}>
                      <span className="flex h-[14px]">
                        <img
                          className=""
                          src={urlFor(item.logo).url()}
                          alt={item.slug.current}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* <li>
            <Link href={PATHS.PROJECTS}>
              <p className="font-medium">Projets</p>
            </Link>
          </li> */}
          <li
            className={`relative inline-block text-left after:content-[' '] after:block after:h-[3px] after:translate-y-[19px] ${currentPath === PATHS.PROJECTS ? "after:bg-green-600" : ""} mt-1 hover:cursor-pointer`}
          >
            <Link href={PATHS.PROJECTS}>
              <p className="font-medium">Projets</p>
            </Link>
          </li>
          <li
            className={`relative inline-block text-left after:content-[' '] after:block after:h-[3px] after:translate-y-[19px] ${currentPath === PATHS.ABOUT ? "after:bg-green-600" : ""} mt-1 hover:cursor-pointer`}
          >
            <Link href={PATHS.ABOUT}>
              <p className="font-medium">À propos</p>
            </Link>
          </li>

          <li
            className={`${currentPath === "/contact" ? "text-black bg-[#F5F5F5] shadow-[0px_0px_0px_3px_rgba(163, 163, 163, 0.5)] border-[#d1cdc8] border-2" : "text-white bg-[#10182b]"} rounded-full px-4 py-2`}
          >
            <Link href={PATHS.CONTACT} className="flex items-center">
              <img
                src={`/icones/${currentPath === "/contact" ? "contact-black.svg" : "contact-white.svg"}`}
                alt="contact icon"
                className="inline-block mr-2 w-4"
              />
              <p className="font-medium">Nous contacter</p>
            </Link>
          </li>
        </ul>

        {/* Button Burger Menu */}
        <div
          role="button"
          className="menu-toggle block lg:hidden self-end z-[999999]"
          onClick={() => setNavOpen(!navOpen)}
          aria-expanded={navOpen}
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

        {menuVisible && (
          <div
            className={clsx(
              styles.menuBase,
              isAnimatingOut ? styles.menuExit : styles.menuEnter,
            )}
            role="menu"
          >
            <li
              className="relative inline-block text-left after:content-[' '] after:h-[3px] after:block after:bg-green-600 after:translate-y-[19px] mt-1 hover:cursor-pointer"
              onClick={toggleDropdown}
            >
              <button className="flex items-center space-x-1">
                <p className="font-medium text-3xl">Solutions</p>
                <img
                  src={
                    isOpen
                      ? "/icones/chevron-up.svg"
                      : "/icones/chevron-down.svg"
                  }
                  alt={isOpen ? "chevron up" : "chevron down"}
                  className="select-none"
                />
              </button>

              <div
                className={`origin-top-left absolute left-0 max-lg:-left-9 mt-[21.5px] w-56 bg-[#fff7ed] max-lg:bg-white shadow-lg ring-1 ring-black/5 transition-opacity duration-200 ${
                  isOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                <ul className="py-1 space-y-1">
                  {getSolutionsInOrder(expertises).map((item, idx) => (
                    <li
                      key={idx}
                      className="px-2 py-[7px] hover:bg-white rounded-md cursor-pointer transition-colors mx-6 text-sm font-medium"
                    >
                      <Link
                        href={`${PATHS.SOLUTIONS}/${item.slug.current}`}
                        onClick={() => setNavOpen(false)}
                        role="menuitem"
                      >
                        <span className="flex h-[14px]">
                          <img
                            className=""
                            src={urlFor(item.logo).url()}
                            alt={item.slug.current}
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* <Link
              href={PATHS.PROJECTS}
              onClick={() => setNavOpen(false)}
              role="menuitem"
            >
              <span className="text-3xl">Projects</span>
            </Link> */}
            <Link
              href={PATHS.ABOUT}
              onClick={() => setNavOpen(false)}
              role="menuitem"
            >
              <span className="text-3xl">À propos</span>
            </Link>
            <Link
              href={PATHS.CONTACT}
              onClick={() => setNavOpen(false)}
              role="menuitem"
            >
              <span className="text-3xl">Contact</span>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
