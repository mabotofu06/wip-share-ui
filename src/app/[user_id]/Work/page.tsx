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

  // 認証ユーザー情報を取得（例: cookies, session, headersなどから）
  // ここでは仮に getCurrentUserId() という関数があるとします

  // const currentUserId = await (() => {})//getCurrentUserId();
  // if (!currentUserId || currentUserId !== userId) {
  //   // 自分以外のページは閲覧不可
  //   throw new Error("Forbidden: You cannot view other users' pages");
  // }

  // 存在しないユーザーIDの場合は404
  // ここでは fetchWorkGroupsByUserId の結果が空なら404とします
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
