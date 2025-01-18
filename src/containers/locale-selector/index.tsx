import { LOCALES } from "@/common";
import { redirect } from "next/navigation";

const LocaleSelector = () => {
  const submit = (e: any) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const locale = data.get('locale');

    redirect(`/${locale}/experience`);
  };

  return (
    <form onSubmit={submit}>
      <select name="locale">
        {Object.entries(LOCALES).map(([key, value]) => {
          return <option key={key} value={key}>{value}</option>;
        })}
      </select>
      <button type="submit">submit</button>
    </form>
  );
};

export { LocaleSelector };
