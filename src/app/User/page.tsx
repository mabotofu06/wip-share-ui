import TemplatesUser from "../_components/templates/User";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ユーザー | WIP Share",
  description: "ユーザー情報ページです。",
};

export default function Page() {
  return <TemplatesUser />;
}
