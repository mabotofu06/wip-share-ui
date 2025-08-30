import { Metadata } from "next";
import TemplateTop from "../_components/templates/Top";
import { APP_NAME } from "../_constants/app";

export const metadata: Metadata = {
  title: `トップ | ${APP_NAME}`,
  description: "",
};

type Props = {
  searchParams:{
    type?: string
  }
}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const type = searchParams.type;

  console.log("Top Page type:", type);

  return <TemplateTop />;
}
