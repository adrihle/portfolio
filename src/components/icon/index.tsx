import Image from "next/image"
import NextLink from "next/link";
import styles from './style.module.scss';
import { TECH_STACK } from "@/common";

const ICONS = {
  web: '/web.svg',
  github: '/social/github.svg',
  instagram: '/social/instagram.svg',
  linkedin: '/social/linkedin.svg',
  mail: '/social/mail.svg',
  npm: '/npm.svg',
} as const;

const COLORED_BRANDS: (keyof typeof TECH_STACK)[] = ['express', 'nextjs', 'github', 'pandas', 'aws'];
const COLOR_DEFAULT = 'e5e5e5';

type BrandProps = {
  icon: keyof typeof TECH_STACK;
  color?: string;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const getBrandIconUrl = ({ icon, color }: Omit<BrandProps, 'size'>) => {
  const colored = !color && !COLORED_BRANDS.includes(icon) ? '' : `/${color || COLOR_DEFAULT}`;
  return `https://cdn.simpleicons.org/${TECH_STACK[icon]}${colored}?viewbox=auto`;
};

const Brand = ({ icon, color, size = 24, className, ...props }: BrandProps) => {
  return (
    <Image
      src={getBrandIconUrl({ icon, color })}
      width={size}
      height={size}
      alt={icon}
      className={`${styles.icon} ${className}`}
      {...props}
    />
  );
};

type IconProps = {
  src: keyof typeof ICONS;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const Icon = ({ src, size = 24, className, ...props }: IconProps) => {
  return (
    <Image
      src={ICONS[src]}
      width={size}
      height={size}
      alt={src}
      className={`${styles.icon} ${className}`}
      {...props}
    />
  );
};

type IconLinkProps = {
  href: string;
} & IconProps;

const Link = ({ href = '', ...props }: IconLinkProps) => {
  return (
    <NextLink href={href} target="_blank">
      <Icon {...props} />
    </NextLink>
  );
};

Icon.Link = Link;
Icon.Brand = Brand;

export { Icon };
export type { IconProps, IconLinkProps };
