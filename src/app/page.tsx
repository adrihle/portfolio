import { Playground } from "@/containers";
import { getColaborations } from './action';
import { Layout } from "@/components";


const Home = async () => {
  const collaborations = await getColaborations();
  console.log({ collaborations });
  return (
    <Layout>
      <Playground />
      <svg viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" strokeWidth="5" stroke="#f7f7f7"></path></svg>
    </Layout>
  );
};

export default Home;

