export type SupabaseResponse<T> =  T | SupabaseError | null;

export interface SupabaseError {
  message: string;
  code: string;
  details?: string;
}

export interface GetWorkGroupsData {
  group_id: string;
  user_id: string;
  title?: string;
  content?: string;
  images: string[];
  close_flag: boolean;
  create_datetime: string;
  update_datetime: string;
  delete_flag: boolean;
  delete_datetime?: string;
}