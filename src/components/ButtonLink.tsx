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
      className={`flex pl-0 items-center rounded-[20px] pr-3 border border-black w-fit font-bold text-sm max-[330px]:text-[13px] ${additionnalClasses} max-sm:mt-4`}
    >
      <img src="/icones/green-dot.png" alt="green dot" className="w-8" />
      <p className="max-sm:text-center max-sm:py-1">{text} </p>
      <img
        src="/icones/arrow-right.png"
        alt="arrow right"
        className="w-3 ml-3"
      />
    </Link>
  );
};

export default ButtonLink;
