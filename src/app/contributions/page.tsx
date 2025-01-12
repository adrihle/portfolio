import { Badge, Layout, Text } from "@/components";
import { Package } from '@/containers';
import { getColaborations } from './action';
import styles from './style.module.scss';

const Page = async () => {
  const collaborations = await getColaborations();
  return (
    <Layout>
      <div className={styles.header}>
        <Text.Title>Open Source, Open Mind</Text.Title>
        <Text.Quote by="Eric S. Raymond">
          “Good programmers know what to write. Great ones know what to rewrite
          (and reuse).”
        </Text.Quote>
        <Text className={styles.description}>
          Welcome to my contributions corner! Here, you’ll find libraries, tools,
          and components I’ve created to make developers’ lives easier. From
          React to Python, these projects are my little gifts to the coding
          community—no gift wrap, but plenty of utility.
        </Text>
        <Badge>version</Badge>
      </div>
      <div className={styles.container}>
        {collaborations.map(({ name, links, ...rest }, i) => {
          return (
            <div key={i} className={styles.item} style={{ animationDelay: `${i * 0.3}s` }}>
              <Package name={name} href={links.npm} {...rest} />
            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export default Page;

