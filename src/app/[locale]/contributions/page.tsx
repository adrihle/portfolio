import { List, Page } from "@/components";
import { Package } from "@/containers";
import { getParams } from "@/utils/getParams";
import { getContent } from './action';
import { LocalePageProps } from "@/interfaces";

const Contributions = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const texts = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{texts.TITLE}</Page.Heading>
      <Page.Section>
        <Page.Quote by={texts.QUOTE.AUTHOR}>{texts.QUOTE.CONTENT}</Page.Quote>
        <Page.Paragraph bionic>{texts.DESCRIPTION}</Page.Paragraph>
      </Page.Section>
      <Page.Section>
        <List
          list={texts.contributions}
          renderElement={Package}
        />
      </Page.Section>
      <Page.Paragraph bionic>{texts.CONNECT}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Contributions;

