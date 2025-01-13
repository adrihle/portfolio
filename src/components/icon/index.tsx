import Image from "next/image"
import NextLink from "next/link";

const ICONS = {
  web: '/web.svg',
  github: '/social/github.svg',
  instagram: '/social/instagram.svg',
  linkedin: '/social/linkedin.svg',
  mail: '/social/mail.svg',
  npm: '/npm.svg',
} as const;

type IconProps = {
  src: keyof typeof ICONS;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const Icon = ({ src, size = 24, ...props }: IconProps) => {
  return (
    <Image src={ICONS[src]} width={size} height={size} alt={src} {...props} />
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
