import { GetWorkGroupsData, SupabaseResponse } from "@/app/_type/supabase";
import { supabase } from "./client"
import { getUserInfo } from "@/app/_composables/userInfo";

const TBL_NAME = 'work_group'

export const fetchWorkGroupByGroupId = async (groupId: string) => {
  const cacheKey = `work_group_cache`;

  if(typeof window !== 'undefined'){
    const cache = localStorage.getItem(cacheKey);
    if (cache) {
      const { data, timestamp } = JSON.parse(cache);
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        console.log(cache)
        const result = data.find((item: GetWorkGroupsData) => item.group_id === groupId);
        if (result) {
          console.log("キャッシュに保存されたデータを返却します")
          return result;
        }
      }
    }
  }
  console.log("キャッシュに保存されたデータが存在しないため、DBからデータを取得します")
  const { data, error } = await supabase
    .from(TBL_NAME)
    .select('*')
    .eq('group_id', groupId)
    .single();

  if (error) {
    throw error;
  }

  return data as GetWorkGroupsData;
};

export const fetchWorkGroupsByUserId = async (userId: string) => {
  const { data, error } = await supabase
    .from(TBL_NAME)
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data as Array<GetWorkGroupsData>;
};

export const fetchWorkGroups = async (limit: number = 20):Promise<SupabaseResponse<GetWorkGroupsData[]>> =>{
  const cacheKey = "work_groups_cache";
  if (typeof window !== 'undefined') {
    const cache = localStorage.getItem(cacheKey);
    if (cache) {
      const { data, timestamp } = JSON.parse(cache);
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        console.log("キャッシュに保存されたデータを返却します")
        return data;
      }
    }
  }

  const { data, error } = await supabase
    .from('work_group')
    .select('*');
  if (error) {
    throw error;
  }
  if (typeof window !== 'undefined') {
    //一度読み込んでから5分間はキャッシュを利用する
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: Date.now() }));
  }
  return data as Array<GetWorkGroupsData>;
};

/**
 * ワークグループを新規作成し、そのIDを返す.
 * @param imageUrl 投稿した画像のURL.
 * @returns 作成したワークグループのID.
 */
export const insertWorkGroup = async (imageUrl: string): Promise<string> => {
  const userId = getUserInfo()?.id;
  if(!userId) throw new Error("User not logged in");

  const { data, error } = await supabase
    .from(TBL_NAME)
    .insert({
      user_id: userId,
      images: [imageUrl]
    })
    .select('group_id')
    .single();

  if (error) {
    throw error;
  }

  return data?.group_id as string;
};
