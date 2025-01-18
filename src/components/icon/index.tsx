import Image from "next/image"
import NextLink from "next/link";
import styles from './style.module.scss';

const ICONS = {
  web: '/web.svg',
  github: '/social/github.svg',
  instagram: '/social/instagram.svg',
  linkedin: '/social/linkedin.svg',
  mail: '/social/mail.svg',
  npm: '/npm.svg',
} as const;

const BRAND_ICONS = {
  javascript: 'javascript',
}

type IconProps = {
  src: keyof typeof ICONS;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const getBrandIconUrl = (icon: keyof typeof ICONS) => {
  return `https://cdn.simpleicons.org/${icon}/${"e5e5e5"}?viewbox=auto`;
};

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

export { Icon };
export type { IconProps, IconLinkProps };
