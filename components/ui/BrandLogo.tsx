import Image from "next/image";

const SIZES = {
  nav: {
    width: 60,
    height: 60,
    className: "h-12 w-12 sm:h-[3.25rem] sm:w-[3.25rem]",
  },
  footer: {
    width: 160,
    height: 160,
    className: "h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40",
  },
  splash: {
    width: 140,
    height: 140,
    className: "h-28 w-28 sm:h-32 sm:w-32",
  },
} as const;

type BrandLogoSize = keyof typeof SIZES;

interface BrandLogoProps {
  size?: BrandLogoSize;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = "nav",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const { width, height, className: sizeClass } = SIZES[size];

  return (
    <Image
      src="/images/logo.png"
      alt="Eden Perfect — Institut de Beauté"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${sizeClass}${className ? ` ${className}` : ""}`}
    />
  );
}
