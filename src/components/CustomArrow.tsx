import { useState, useEffect } from "react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const NextArrow = ({ className, onClick }: ArrowProps) => {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome")) {
      console.log("we are in Chrome");
      setIsChrome(true);
    }
  }, []);

  return (
    <div
      className={`${className} ${isChrome ? "before:absolute before:left-[1px] before:top-[1px] before:scale-[0.7]" : "before:!mt-[3px]"} next-arrow`}
      onClick={onClick}
    />
  );
};

export const PrevArrow = ({ className, onClick }: ArrowProps) => {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome")) {
      console.log("we are in Chrome");
      setIsChrome(true);
    }
  }, []);

  return (
    <div
      className={`${className} ${isChrome ? "before:absolute before:left-[2px] before:top-[2px] before:scale-[0.5]" : "before:!mt-[4px]"} prev-arrow`}
      onClick={onClick}
    />
  );
};
