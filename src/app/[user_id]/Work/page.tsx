import { TemplatesMyWorks } from "@/app/_components/templates/MyWorks";
import { fetchWorkGroupsByUserId } from "@/app/_constants/supabase/workGroupClient";
import { WorkGroup } from "@/app/_type/data";

type Props = {
  params: {
    user_id: string;
  };
  searchParams:{
    type: "all" | "doing" | "completed" | undefined;
  }
}

export default async function MyWorkGroup(props: Props) {
  const params = await props.params;
  const userId = decodeURIComponent(params.user_id);
  const type = await props.searchParams.type;

  console.log(type);

  //TODO:認証ユーザーのIDと比較し、自分のページ以外は閲覧不可にする
  //また、存在しないユーザーIDの場合も404エラーにする
  if(!userId)  throw new Error("User ID is required");

  //サーバ側でデータを取得し、返却
  const myWorkGroups = await fetchWorkGroupsByUserId(userId);
  if (!myWorkGroups) throw new Error("No work groups found");
  const groups: WorkGroup[] = myWorkGroups.map(item => ({
    id: item.group_id,
    title: item.title || "",
    note: item.content || "",
    images: item.images,
    userInfo: {
      id: item.user_id,
      name: "不明なユーザー",
      iconImg: ""
    },
    isClose: item.close_flag,
    updatedAt: item.update_datetime,
  }));

  return <TemplatesMyWorks userId={userId} workGroups={groups} />
}
