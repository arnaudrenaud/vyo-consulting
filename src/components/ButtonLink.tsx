/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface ButtonLinkProps {
  href: string;
  text: string;
  additionnalClasses?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  text,
  additionnalClasses,
}) => {
  return (
    <Link
      href={href}
      className={`flex pl-0 items-center rounded-[20px] pr-3 border border-black w-fit font-bold text-sm max-[330px]:text-[13px] ${additionnalClasses}`}
    >
      <img src="/icones/green-dot.png" alt="green dot" className="w-8" />
      {text}{" "}
      <img
        src="/icones/arrow-right.png"
        alt="arrow right"
        className="w-3 ml-3"
      />
    </Link>
  );
};

export default ButtonLink;
