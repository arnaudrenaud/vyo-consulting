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
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const throttleWait = useRef(false);
  const [navOpen, setNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 992px)");

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
      setAtTop(scrollY < 50);

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
          //  shadow-md
          atTop ? "mt-4" : "mt-0",
        )}
      >
        <Link href={PATHS.INDEX}>
          <img
            src={logo || ""}
            alt="Image du logo de VYO Consulting"
            className="h-8"
          />
        </Link>
        <ul className="flex items-center space-x-6 max-md:hidden">
          <li>
            <Link href={PATHS.SOLUTIONS}>Solutions</Link>
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
