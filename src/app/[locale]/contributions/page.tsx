import { List, Page } from "@/components";
import { Package } from "@/containers";
import { getParams } from "@/utils/getParams";
import { getContent } from './action';
import { LocalePageProps } from "@/interfaces";

const Contributions = async ({ params }: LocalePageProps) => {
  const { locale } = await getParams(params);
  const content = await getContent({ locale });
  return (
    <Page.Layout>
      <Page.Heading>{content.TITLE}</Page.Heading>
      <Page.Section>
        <Page.Quote by={content.QUOTE.AUTHOR}>{content.QUOTE.CONTENT}</Page.Quote>
        <Page.Paragraph bionic>{content.DESCRIPTION}</Page.Paragraph>
      </Page.Section>
      <Page.Section>
        <List
          list={content.contributions}
          renderElement={Package}
        />
      </Page.Section>
      <Page.Paragraph bionic>{content.CONNECT}</Page.Paragraph>
    </Page.Layout>
  );
};

export default Contributions;

