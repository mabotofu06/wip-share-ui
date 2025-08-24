import TemplatesUser from "../_components/templates/User";
import { Metadata } from "next";
import { APP_NAME } from "../_constants/app";

export const metadata: Metadata = {
  title: `ユーザー | ${APP_NAME}`,
  description: "ユーザー情報ページです。",
};

export default function Page() {
  return <TemplatesUser />;
}
