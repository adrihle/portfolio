'use client'
import { AppIcon, Grid } from "@/components"
import styles from './style.module.scss';
import { useParams } from "next/navigation";

type Routes = Record<string, {
  image: string;
  label: string;
  href: string;
  background: string;
}>;

const ICON_SIZE = 60;

const ROUTES: Routes = {
  HOME: {
    image: '/home.svg',
    label: 'Home',
    href: '/',
    background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)', // Educación: serenidad y claridad
  },
  EXPERIENCE: {
    image: '/experience.svg',
    label: 'Experience',
    href: '/experience',
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)', // Productividad: eficiencia y crecimiento
  },
  ABOUT: {
    image: '/about.svg',
    label: 'About',
    href: '/about',
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', // Finanzas: confianza y estabilidad
  },
  PROJECTS: {
    image: '/project.svg',
    label: 'Projects',
    href: '/projects',
    background: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)', // Gaming: diversión y emoción
  },
  OTRA: {
    image: '/book.svg',
    label: 'Articles',
    href: '/articles',
    background: 'linear-gradient(135deg, #d31027 0%, #ea384d 100%)', // Noticias: urgencia y actualidad
  },
  MAS: {
    image: '/package.svg',
    label: 'Libraries',
    href: '/contributions',
    background: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)', // Música: creatividad y ritmo
  },
};

const Navigation = () => {
  const { locale } = useParams();
  
  return (
    <Grid className={styles.container} minWidth={ICON_SIZE} gap={15}>
      {Object.values(ROUTES).map((props, i) => (
        <Grid.Item key={i}>
          <AppIcon {...props} size={ICON_SIZE} href={`/${locale}${props.href}`} />
        </Grid.Item>
      ))}
    </Grid>
  );
};

export { Navigation };
