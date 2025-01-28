
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = Omit<NextImageProps, 'alt'> & {
  alt?: string;
};

const CImage = ({ alt, ...props }: ImageProps) => {
  return <NextImage {...props} alt={alt ? alt : `${props.src}`} priority/>;
};

type FillProps = Omit<NextImageProps, 'width' | 'height' | 'fill' | 'alt'> & {
  aspectRatio?: '16 / 9' | '1 / 1' | '18 / 9';
  alt?: string;
};

const Fill = ({ aspectRatio = '16 / 9', ...props }: FillProps) => {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio, ...props.style }}>
      <CImage
        {...props}
        fill
        quality={75}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  );
};

CImage.Fill = Fill;

export { CImage as Image };
export type { FillProps, ImageProps };
