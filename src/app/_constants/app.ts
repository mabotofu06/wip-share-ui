export const APP_NAME = 'Mochieve';
export const APP_VERSION = '0.0.1';

export const MAX_POST_NUM = 10;
export const MAX_WORKING_POST_NUM = 3;

export const APP_SERVICE = {
  TOP: {
    title: `トップ | ${APP_NAME}`,
    description: "アプリのトップページ",
    icon: "home",
    link: "/Top"
  },
  USER_INFO: {
    title: `ユーザー | ${APP_NAME}`,
    description: "ユーザー情報",
    icon: "user",
    link: "/User"
  },
  MY_WORKS: {
    title: "マイプロジェクト",
    description: "自分が関わっているプロジェクト",
    icon: "project",
    link: "/$userId/Work"
  },
  WORKS: {
    title: "作業内容",
    description: "新しい作業内容を作成",
    icon: "post",
    link: "/Work/Group/$workGroupId"
  }
}

export const MY_WORK_NAV_MENU = [
  { label: "作業中", code: 0 },
  { label: "すべて", code: 1 },
  { label: "完了",   code: 2 },
]

export const TOP_NAV_MENU = [
  { label: "最新", code: 0 },
  { label: "作業中の投稿", code: 1 },
  { label: "完了した投稿", code: 2 },
]