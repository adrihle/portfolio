import { AppIcon, Grid, Widget } from '@/components';
import styles from './style.module.scss';

const PAGES = {
  HOME: {
    image: 'https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png',
    label: 'Home',
    href: '/',
    background: 'linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)', // Educación: serenidad y claridad
  },
  EXPERIENCE: {
    image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/experiencia-234122.png?f=webp&w=512',
    label: 'Experience',
    href: '/experience',
    background: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)', // Productividad: eficiencia y crecimiento
  },
  ABOUT: {
    image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/acerca-de-3368928-2814072.png?f=webp&w=512',
    label: 'About',
    href: '/about',
    background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)', // Finanzas: confianza y estabilidad
  },
  PROJECTS: {
    image: 'https://cdn.iconscout.com/icon/free/png-256/free-google-fotos-2981833-2476486.png?f=webp',
    label: 'Projects',
    href: '/projects',
    background: 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)', // Gaming: diversión y emoción
  },
  OTRA: {
    image: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/acerca-de-3368928-2814072.png?f=webp&w=512',
    label: 'Articles',
    href: '/articles',
    background: 'linear-gradient(135deg, #d31027 0%, #ea384d 100%)', // Noticias: urgencia y actualidad
  },
  MAS: {
    image: 'https://cdn.iconscout.com/icon/free/png-256/free-google-fotos-2981833-2476486.png?f=webp',
    label: 'Contributions',
    href: '/contributions',
    background: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)', // Música: creatividad y ritmo
  },
};

const Menu = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Widget>
          <div style={{ width: '60px', height: '60px', backgroundColor: 'red' }}></div>
          <p>holaaaa</p>
        </Widget>
      </div>
      <Grid className={styles.container} minWidth='95px'>
        {Object.values(PAGES).map(({ image, label, href, background }, i) => (
          <Grid.Item key={i}>
            <AppIcon {...{ image, label, href, background }} />
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};

export { Menu };

