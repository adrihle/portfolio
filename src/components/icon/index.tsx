import Image from "next/image"
import NextLink from "next/link";
import styles from './style.module.scss';
import { ICON_SETTINGS } from "./settings";

const { LOCAL_ICONS, STACK_ICONS, LOCAL_STACK_ICONS, DECOLORED_STACK_ICON, DEFAULT_COLOR } = ICON_SETTINGS;

type BrandProps = {
  icon: keyof typeof STACK_ICONS & keyof typeof LOCAL_STACK_ICONS;
  color?: string;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const getBrandIconUrl = ({ icon, color }: Omit<BrandProps, 'size'>) => {
  const colored = !color && !DECOLORED_STACK_ICON.includes(icon) ? '' : `/${color || DEFAULT_COLOR}`;
  if (LOCAL_STACK_ICONS[icon]) return LOCAL_STACK_ICONS[icon];
  return `https://cdn.simpleicons.org/${STACK_ICONS[icon]}${colored}?viewbox=auto`;
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
  src: keyof typeof LOCAL_ICONS;
  size?: number;
} & Omit<React.ComponentProps<typeof Image>, 'src' | 'height' | 'width' | 'alt'>;

const Icon = ({ src, size = 24, className, ...props }: IconProps) => {
  return (
    <Image
      src={LOCAL_ICONS[src]}
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

type AppIconProps = {
  image: string;
  label: string;
  href: string;
  background: string;
  size?: number;
  boldKey: string;
};
const DEFAULT_SIZE = 60;

const AppIcon = ({ image, label, href, background, size = DEFAULT_SIZE, boldKey }: AppIconProps) => {
  return (
    <NextLink className={styles.container} href={href} shallow scroll={false}>
      <Image src={image}
        alt={label}
        width={size}
        height={size}
        className={styles.image}
        style={{ background }}
      />
      <p className={styles.label}>
        {label.split('').map((l, i) => l.toLowerCase() === boldKey.toLowerCase() ? <b key={`${label}-${l}-${i}`} style={{ fontWeight: 1000 }}>{l}</b> : l)}
      </p>
    </NextLink>
  );
};

Icon.Link = Link;
Icon.Brand = Brand;
Icon.App = AppIcon;

export { Icon };
export type { IconProps, IconLinkProps };
